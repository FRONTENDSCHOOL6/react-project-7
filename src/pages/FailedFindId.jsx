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
				<title>아이디 찾기 실패 </title>
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
							text="아이디 다시 찾기"/>
					
				</div>
			</div>
		</>
	);
}

export default FailedFindId;
