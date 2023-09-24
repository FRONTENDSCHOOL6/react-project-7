import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import S from "./SignInList.module.css";
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
	
	const navigate = useNavigate();
	const navigateToLogin = () => {
		navigate("/signin");
	};
	const handleKakaoLogin = async () => {
		try {
			const user = await pb.collection("users").authWithOAuth2({
				provider: "kakao",
			});

			console.log(user);
			const { username: name, email, nickname } = user.meta;			

			const updateUser = {
				name,
				username: email.split("@")[0],
				nickname,
			};

			const response = await pb
				.collection("users")
				.update(user.record.id, updateUser);

			const { token, record } = response;

			const updatedStorageData = {
				isAuth: !!record,
				user: record,
				token: token,
			};
			alert("카카오 계정으로 회원가입이 완료되었습니다 💛 ");
			navigate(`/profile/${updatedStorageData?.user?.id}`);
			console.log("Authentication successful.");
			return;
		} catch (error) {
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
				<meta
					property="og:image"
					content="https://github.com/FRONTENDSCHOOL6/react-project-7/assets/55738193/8cc80c0e-15b4-4a6b-9fdd-b939414320fb"
				/>
				<meta
					property="og:url"
					content="https://frontendschool6.github.io/react-project-7/#/signinlist"
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
						<SnsLoginButton
							type="button"
							bgImgSrc={cjLogo}
							text="CJ one으로 시작하기"
							onClick={navigateToLogin}
							className={S.joinButton}
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default SignInList;
