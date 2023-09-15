import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import S from "./Header.module.css";
import logo from "/assets/logo.svg";
import searchIcon from "/assets/search.png";
import profileIcon from "/assets/profile.png";

function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

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
				<li>
					<Link to="search">
						<img src={searchIcon} alt="검색" className={S.profileImg} />
					</Link>
				</li>
				<li>
					<Link to="profile">
						<img src={profileIcon} alt="프로필" className={S.profileImg} />
					</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
