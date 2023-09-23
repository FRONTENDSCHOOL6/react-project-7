import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import S from "@/components/header/Header.module.css";
import logo from "/assets/logo.svg";

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
		</header>
	);
}

export default Header;
