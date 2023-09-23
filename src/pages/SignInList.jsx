import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import S from "./SignInList.module.css";
import React, { useState } from "react";
import "swiper/css";
import pb from "@/api/pocketbase";
import mainImg from "/assets/main.webp";
import tvingLogo from "/assets/tving-login.svg";
import naverLogo from "/assets/naver-login.svg";
import kakaoLogo from "/assets/kakao-login.svg";
import facebookLogo from "/assets/facebook-login.svg";
import twitterLogo from "/assets/twitter-login.svg";
import appleLogo from "/assets/apple-login.svg";
import cjLogo from "/assets/cjone-login.png";
import SnsLoginButton from "./../components/snslogin/SnsLogin";

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
			// const role = await pb
			// 	.collection("membership")
			// 	.getFirstListItem('type="standard"');
			console.log(user);
			const { username: name, email } = user.meta;

			const updateUser = {
				name,
				username: email.split("@")[0],
				// ※ 권한(Authorization) 부여를 위한 역할(role)이 설정된 경우
				// role: role.id,
			};

			console.log("updateUser:", updateUser);
			//@update=create
			return await pb.collection("users").update(user.record.id, updateUser);
		} catch (error) {
			// throw new Error(error.message);
			console.log("오류", error.response);
		}
	};

	return (
		<>
			<Helmet>
				<title>타잉 7조 - SNS 로그인 페이지</title>
				<meta
					name="description"
					content="멋쟁이 사자처럼 6기 7조의 파이널 프로젝트 - 티빙 클론코딩 SNS 연동 로그인 페이지"
				/>

				<meta property="og:type" content="website" />
				<meta property="og:title" content="타잉 로그인 페이지" />
				<meta
					property="og:description"
					content="프로젝트 타잉 SNS 계정 연동 로그인 페이지"
				/>
				<meta property="og:image" content="@/assets/metaImgSnsLogin.png" />
				<meta
					property="og:url"
					content="http://127.0.0.1:5173/react-project-7/#/signinlist"
				/>
			</Helmet>
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
						<SnsLoginButton
							type="button"
							bgImgSrc={tvingLogo}
							onClick={navigateToLogin}
							text="TVING ID로 시작하기"
						/>
						<SnsLoginButton
							type="button"
							bgImgSrc={naverLogo}
							onClick={navigateToLogin}
							text="네이버로 시작하기"
						/>
						<SnsLoginButton
							type="button"
							bgImgSrc={kakaoLogo}
							onClick={handleKakaoLogin}
							text="카카오로 시작하기"
						/>

						<SnsLoginButton
							type="button"
							onClick={navigateToLogin}
							bgImgSrc={facebookLogo}
							text="페이스북으로 시작하기"
						/>
						<SnsLoginButton
							type="button"
							onClick={navigateToLogin}
							bgImgSrc={twitterLogo}
							text="트위터로 시작하기"
						/>

						<SnsLoginButton
							type="button"
							bgImgSrc={appleLogo}
							onClick={navigateToLogin}
							className={S.joinButton}
							text="Apple로 시작하기"
						/>
						<button
							type="button"
							onClick={navigateToLogin}
							style={{
								backgroundImage: `url(${cjLogo})`,
								backgroundPosition: 30,
								backgroundSize: 20,
							}}
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
