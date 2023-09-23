import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import S from "@/components/header/Header.module.css";
import xIcon from "/assets/headerX.svg";
import logo from "/assets/logo.svg";
import profileIcon from "/assets/profile.png";
import searchIcon from "/assets/search.png";
import useStorage from "@/hooks/useStorage";
import authStore from "@/store/useAuthStore";
import useProfileStore from "@/store/useProfileStore";
import { getPbImageURL } from "@/utils/getPbImageURL";
import HeaderContents from "..//components/header/headerContents";
import HoverBox from "../components/header/HoverBox";
import ProfileModal from "../components/header/ProfileModal";
import LogoutPopUp from "../components/header/LogoutPopUp";

function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isImgHovered, setIsImgHovered] = useState(false);
	const [isDivHovered, setIsDivHovered] = useState(false);
	const [showLogoutPopup, setShowLogoutPopup] = useState(false);
	const { storageData } = useStorage("pocketbase_auth");
	console.log(storageData);
	const navigate = useNavigate();
	const [searchIconSrc, setSearchIconSrc] = useState(searchIcon);
	const [searchAlt, setSearchAlt] = useState("검색");
	const location = useLocation();
	const selectedProfileData = localStorage.getItem("selectedProfile");
	const selectedProfile = JSON.parse(selectedProfileData);
	const { profileData } = useProfileStore();
	const [profileImg, setProfileImg] = useState(null); // 프로필 이미지 상태 추가

	useEffect(() => {
		if (location.pathname === "/search") {
			setSearchIconSrc(xIcon);
			setSearchAlt("뒤로가기");
		} else {
			setSearchIconSrc(searchIcon);
			setSearchAlt("검색");
		}
	}, [location.pathname]);

	const handleIconClick = () => {
		if (location.pathname === "/search") {
			navigate(-1);
		}
	};
	//console.log(profileData);
	//console.log(authState);
	//console.log(authState.user);

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

	let profileUsername = profileData?.username || selectedProfile?.username;

	useEffect(() => {
		// 비동기 함수를 이용하여 프로필 이미지 가져오기
		const fetchProfileImage = async () => {
			try {
				let imageUrl;

				if (profileData && profileData.poster) {
					// profileData가 있을 경우 profileData를 사용
					imageUrl = await getPbImageURL(profileData, "poster");
				} else if (selectedProfile && selectedProfile.poster) {
					// profileData가 없고 selectedProfile이 있을 경우 selectedProfile을 사용
					imageUrl = await getPbImageURL(selectedProfile, "poster");
				} else {
					// profileData와 selectedProfile 모두 없을 경우 기본 이미지나 다른 로직을 사용
					imageUrl = profileIcon; // 예시: 기본 이미지
				}

				setProfileImg(imageUrl);
			} catch (error) {
				console.error("프로필 이미지를 가져오는 중 오류 발생: ", error);
			}
		};

		fetchProfileImage();
	}, [profileData, selectedProfile]);

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
			<HeaderContents />
			<ul className={S.profile}>
				<li onClick={handleIconClick} className="h-full w-auto">
					<Link to="search">
						<img src={searchIconSrc} alt={searchAlt} className={S.profileImg} />
					</Link>
				</li>
				<li
					onMouseEnter={() => setIsImgHovered(true)}
					onMouseLeave={() => setIsImgHovered(false)}
					className="h-full"
				>
					<img
						src={profileImg ? profileImg : profileIcon}
						alt="프로필"
						className={S.profileImg}
						onClick={() => navigate(`/profile/${storageData?.model?.id}`)}
					/>
				</li>
			</ul>
			<ProfileModal
				setIsDivHovered={setIsDivHovered}
				isImgHovered={isImgHovered}
				isDivHovered={isDivHovered}
				handleLogoutClick={handleLogoutClick}
				profileImg={profileImg}
				profileUsername={profileUsername}
			/>
			{showLogoutPopup && (
				<LogoutPopUp
					setShowLogoutPopup={setShowLogoutPopup}
					handleShowLogoutPopup={handleShowLogoutPopup}
				/>
			)}
			<HoverBox />
		</header>
	);
}
export default Header;
