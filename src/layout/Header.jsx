import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import S from "./Header.module.css";
import logo from "/assets/logo.svg";
import searchIcon from "/assets/search.png";
import profileIcon from "/assets/profile.png";
import xIcon from "/assets/headerX.svg";

import authStore from "@/store/authStore";
import useStorage from "@/hooks/useStorage";
import pb from "@/api/pocketbase";
import { getPbImageURL } from "@/utils/getPbImageURL";
function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [showLogoutPopup, setShowLogoutPopup] = useState(false);
	const [profileData, setProfileData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const { authState, signOut } = authStore(); // authState와 signOut을 가져옵니다.
	const { storageData } = useStorage("pocketbase_auth");
	console.log(storageData);
	const selectedProfile = JSON.parse(localStorage.getItem("selectedProfile"));
	const navigate = useNavigate();
	const [searchIconSrc, setSearchIconSrc] = useState(searchIcon);
	const [searchAlt, setSearchAlt] = useState("검색");
	const location = useLocation();


	// ? search 페이지로 갔을 시, 아이콘과 alt 변경
	useEffect(() => {
		if (location.pathname === "/search") {
			setSearchIconSrc(xIcon);
			setSearchAlt("뒤로가기");
		} else {
			setSearchIconSrc(searchIcon);
			setSearchAlt("검색");
		}
	}, [location.pathname]);

	// ? x아이콘 클릭시 뒤로가기 핸들러
	const handleIconClick = () => {
		if (location.pathname === "/search") {
			navigate(-1);
		}
	};

	const { authState, signOut } = authStore(); // authState와 signOut을 가져옵니다.

	console.log(authState);

	//@ 스크롤 이벤트
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 150) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const storageData = localStorage.getItem("pocketbase_auth");
		if (storageData) {
			const parsedData = JSON.parse(storageData);
			authStore.setState({ authState: parsedData });
		}
	}, []);

	useEffect(() => {
		const fetchProfiles = async () => {
			try {
				setIsLoading(true);
				const data = await pb
					.collection("users")
					.getOne(authState?.user?.id, { expand: "profiles" });
				setProfileData(data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchProfiles(authState?.user?.id);
	}, [authState]);

	const handleHover = () => {
		setIsHovered(!isHovered);
	};
	const handleLogoutClick = () => {
		handleShowLogoutPopup();
	};
	const handleShowLogoutPopup = () => {
		setShowLogoutPopup(!showLogoutPopup);
	};

	return (
		<header
			className={`
      ${isScrolled ? "bg-black/[80%]" : "to-transparent"}
      ${isScrolled ? "saturate-100 backdrop-blur-lg" : ""}
      ${S.header}`}
		>
			<h1 className="w-[6.5%]">
				<Link to="/">
					<img src={logo} alt="타잉" className="w-full" />
				</Link>
			</h1>
			<ul className={S.content}>
				<li>
					<Link href="/" className={S.home}>
						홈
					</Link>
				</li>
				<li>
					<Link to="program">TV 프로그램</Link>
				</li>
				<li>
					<Link to="movie">영화</Link>
				</li>
				<li>
					<Link to="live">내가 찜한 콘텐츠</Link>
				</li>
			</ul>
			<ul className={S.profile}>
				<li onClick={handleIconClick}>
					<Link to="search">
						<img src={searchIconSrc} alt={searchAlt} className={S.profileImg} />
					</Link>
				</li>
				<li
					onMouseEnter={handleHover}
					onMouseLeave={handleHover}
					className="w-10 h-10 object-cover "
				>
					<img
						src={getPbImageURL(selectedProfile, "poster") || profileIcon}
						alt="프로필"
						className={S.profileImg}
						onClick={() => navigate(`/profile/${storageData.user.id}`)}
					/>
				</li>
			</ul>
			<div
				className={`leading-[1.15] text-base text-white fixed min-w-[15rem] box-border shadow-[0px_5px_10px_0_rgba(0,0,0,0.5)] bg-[#212121] translate-x-0 -translate-y-2.5 -mt-0.5 pt-6 pb-[1.167rem] px-0 rounded-sm border-solid border-[#4d4d4d] border right-[3.5rem] top-[5.833rem] transition-all z-50 
          ${isHovered ? "" : "invisible opacity-0"}`}
				onMouseEnter={handleHover}
				onMouseLeave={handleHover}
			>
				<div className="flex flex-col px-5">
					<div className="flex gap-3 items-center">
						<img
							src={getPbImageURL(selectedProfile, "poster") || profileIcon}
							alt="유저의 프로필 이미지"
							className="w-12 h-12 object-cover"
						/>
						<div className="flex flex-col">
							<span className="font-semibold text-left">
								{selectedProfile?.username || storageData.user.nickname}
							</span>

							<button
								type="button"
								className="pt-1 text-sm text-left"
								onClick={() => navigate(`/profile/${storageData.user.id}`)}
							>
								<span className="text-sm text-[#a3a3a3] hover:text-white">
									프로필 전환 &gt;
								</span>
							</button>
						</div>
					</div>
				</div>
				<hr className="border-[#2e2e2e] border-t h-[0.0625rem] bg-[#2e2e2e] my-4" />
				<ul className="py-2 flex flex-col justify-center gap-3">
					<li
						className="inline-block w-full text-lg leading-normal text-neutral-400 transition-[color] duration-[0.1s] px-[1.667rem] py-2 hover:text-white hover:bg-[#2e2e2e]"
						onClick={() => navigate("/membership")}
					>
						이용권
					</li>
					<li
						className="inline-block w-full text-lg leading-normal text-neutral-400 transition-[color] duration-[0.1s] px-[1.667rem] py-2 hover:text-white hover:bg-[#2e2e2e]"
						onClick={handleLogoutClick}
					>
						로그아웃
					</li>
				</ul>
			</div>
			{showLogoutPopup && (
				<div className="fixed inset-0 bg-black opacity-[95%]">
					<div className="absolute top-[calc(50vh_-_100px)] left-[calc(50vw_-_200px)] bg-[#212121] flex justify-center items-center w-[25rem] h-[9.375rem] rounded flex-col">
						<h2 className="py-4 px-4 text-white text-xl inline-block">
							로그아웃 하시겠습니까?
						</h2>
						<div className="flex justify-between items-center w-full mt-4">
							<button
								type="button"
								className="text-[#a3a3a3] flex-grow hover:text-white"
								onClick={async () => {
									await signOut();
									localStorage.removeItem("pocketbase_auth");
									setShowLogoutPopup(false);
									navigate("/onboarding");
								}}
							>
								확인
							</button>
							<span className="text-[#a3a3a3]">|</span>
							<button
								type="button"
								className="text-[#a3a3a3] flex-grow hover:text-white"
								onClick={handleShowLogoutPopup}
							>
								취소{" "}
							</button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}

export default Header;
