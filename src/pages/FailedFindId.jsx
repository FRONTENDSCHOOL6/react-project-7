import { Helmet } from "react-helmet-async";
import bigbang from "/assets/bigbang.png";
import { useNavigate } from "react-router-dom";
import S from "./FailedFindId.module.css";
import LoginButton from "@/components/findid/LoginButton";

function FailedFindId() {
	const navigate = useNavigate();

	const handleRefindId = () => {
		navigate("/findid");
	};

	return (
		<>
			<Helmet>
				<title>타잉 7조 - 아이디 찾기 실패 페이지</title>
				<meta
					name="description"
					content="멋쟁이 사자처럼 6기 7조의 파이널 프로젝트 - 티빙 클론코딩 아이디 찾기 실패 페이지"
				/>

				<meta property="og:type" content="website" />
				<meta property="og:title" content="타잉 아이디 찾기 실패 페이지" />
				<meta
					property="og:description"
					content="프로젝트 타잉 아이디 찾기 실패 페이지"
				/>
				<meta
					property="og:image"
					content="https://github.com/FRONTENDSCHOOL6/react-project-7/assets/55738193/cbc0e2de-b64a-4e6e-a0d0-85a2b29a2b16"
				/>
				<meta
					property="og:url"
					content="https://frontendschool6.github.io/react-project-7/#/failedfindid"
				/>
			</Helmet>
			<div className={S.contentWrapper}>
				<div className={S.container}>
					<div className={S.imgSection}>
						<img
							src={bigbang}
							alt="로그인 찾기 실패 이미지"
							className={S.img}
						/>
					</div>
					<h1 className={S.title}>일치하는 결과를 찾을 수 없습니다.</h1>
					<div className={S.textSection}>
						<div className={S.description}>연속 10회 틀릴 경우</div>
						<span className={S.description2}>
							아이디 찾기 기능이 일시적으로 제한됩니다.
						</span>
					</div>
					<LoginButton
						type="button"
						className={S.loginButton}
						onClick={handleRefindId}
						text="아이디 다시 찾기"
					/>
				</div>
			</div>
		</>
	);
}

export default FailedFindId;
