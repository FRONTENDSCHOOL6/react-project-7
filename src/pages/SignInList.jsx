import { useNavigate } from "react-router-dom";
import S from "./SignInList.module.css";
import React, { useState } from "react";
import "swiper/css";
// import { Autoplay } from "swiper/modules";
// import { useRef } from "react";
// import { LoopSlide } from "./LoopSlide";
import pb from "@/api/pocketbase";
import mainImg from "/assets/main.webp";
import tvingLogo from "/assets/tving-login.svg";
import naverLogo from "/assets/naver-login.svg";
import kakaoLogo from "/assets/kakao-login.svg";
import facebookLogo from "/assets/facebook-login.svg";
import twitterLogo from "/assets/twitter-login.svg";
import appleLogo from "/assets/apple-login.svg";
import cjLogo from "/assets/cjone-login.png";

function SignInList() {
	//@ 버튼 클릭 시 로그인 페이지로 이동
	const navigate = useNavigate();
	const navigateToLogin = () => {
		navigate("/signin");
	};

	//@ const response = await pb.authStore.clear(); 로그아웃 하는 부분 이걸로 로그아웃 하면
	//계속 그냥 카카오 누르면 자동으로 넘어가지게 된다
	// 캐시데이터 초기화시켜주는 건 야무쌤 로그아웃

	//@카카오 연동 로그인
	const handleKakaoLogin = async () => {
		try {
			//@카카오 로그인
			const user = await pb.collection("users").authWithOAuth2({
				provider: "kakao",
			});
			// navigate("/");
			//@ 권한 부여를 위한 역할 설정 ... 멤버쉽을 type으로 넣어보려고 했는데 불필요하시면 지우셔도 괜찮을거 같아요,,
			//const role = await pb
			//	.collection("membership")
			//	.getFirstListItem('type="standard"');
			//console.log(user);
			const { username: name, email } = user.meta;

			const updateUser = {
				name,
				username: email.split("@")[0],
				// ※ 권한(Authorization) 부여를 위한 역할(role)이 설정된 경우
				// role: role.id,
			};
			// const updateUser = {
			// 	name,
			// 	username: email.split("@")[0],
			// 	// myMembership: role.id,
			// };

			// console.log("updateUser:", updateUser);
			//@update=create
			await pb.collection("users").update(user.record.id, updateUser);
		} catch (error) {
			throw new Error(error.message);
		}
	};

	// const handleKakaoLogout = async () => {
	// 	try {
	// 		location.replace(
	// 			`https://kauth.kakao.com/oauth/logout?client_id=57bd642b7e25410be657c54313859839&logout_redirect_uri=https://final-taing.pockethost.io/api/oauth2-redirect`
	// 		);
	// 	} catch (error) {
	// 		throw new Error(error.message);
	// 	}
	// };

	return (
		<>
			<section
				className={S.join}
				style={{
					background: `url(${mainImg})`,
					backgroundSize: "cover",
				}}
			>
				<div className={S.joinGradient}></div>
				<div className={S.joinContentWrapper}>
					<p className={S.joinContent}>
						반가워요!
						<br></br>
						계정을 선택해주세요.
					</p>
					<div className="flex flex-col gap-5">
						<button
							type="button"
							style={{
								backgroundImage: `url(${tvingLogo})`,
								backgroundPosition: 30,
							}}
							onClick={navigateToLogin}
							className={S.joinButton}
						>
							<span>TVING ID로 시작하기</span>
						</button>
						<button
							type="button"
							style={{
								backgroundImage: `url(${naverLogo})`,
								backgroundPosition: 30,
							}}
							onClick={navigateToLogin}
							className={S.joinButton}
						>
							<span>네이버로 시작하기</span>
						</button>
						<button
							type="button"
							onClick={handleKakaoLogin}
							style={{
								backgroundImage: `url(${kakaoLogo})`,
								backgroundPosition: 30,
							}}
							className={S.joinButton}
						>
							<span>카카오로 시작하기</span>
						</button>
						<button
							type="button"
							onClick={navigateToLogin}
							style={{
								backgroundImage: `url(${facebookLogo})`,
								backgroundPosition: 30,
							}}
							className={S.joinButton}
						>
							<span>페이스북으로 시작하기</span>
						</button>
						<button
							type="button"
							onClick={navigateToLogin}
							style={{
								backgroundImage: `url(${twitterLogo})`,
								backgroundPosition: 30,
							}}
							className={S.joinButton}
						>
							<span>트위터로 시작하기</span>
						</button>
						<button
							type="button"
							style={{
								backgroundImage: `url(${appleLogo})`,
								backgroundPosition: 30,
							}}
							onClick={navigateToLogin}
							className={S.joinButton}
						>
							<span>Apple로 시작하기</span>
						</button>
						<button
							type="button"
							style={{
								backgroundImage: `url(${cjLogo})`,
								backgroundPosition: 30,
								backgroundSize: 20,
							}}
							onClick={navigateToLogin}
							className={`${S.joinButton} h-[10%]`}
						>
							<span>CJone으로 시작하기</span>
						</button>
					</div>
				</div>
			</section>
		</>
	);
}

export default SignInList;
