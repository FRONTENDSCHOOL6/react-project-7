import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import pb from "@/api/pocketbase";
import bigcheck from "/assets/big-check.svg";
import S from "./SuccessFindId.module.css";
import idStore from "../store/idStore";
import tvingLogo from "/assets/tving-login.svg";
import LoginButton from "../components/findid/LoginButton";

function SuccessFindId() {
	const navigate = useNavigate();
	const { idState, findId } = idStore();

	const handleLogin = () => {
		navigate("/signin");
	};
	console.log("idStore: ", idStore);

	return (
		<>
			<Helmet>
				<title>타잉 7조 - S아이디 찾기 성공 페이지</title>
				<meta
					name="description"
					content="멋쟁이 사자처럼 6기 7조의 파이널 프로젝트 - 티빙 클론코딩 아이디 찾기 성공 페이지"
				/>

				<meta property="og:type" content="website" />
				<meta property="og:title" content="타잉 아이디 찾기 성공 페이지" />
				<meta
					property="og:description"
					content="프로젝트 타잉 아이디 찾기 성공 페이지"
				/>
				<meta
					property="og:image"
					content="https://github.com/FRONTENDSCHOOL6/react-project-7/assets/55738193/7bc41697-4483-49aa-be97-838f90c0213a"
				/>
				<meta
					property="og:url"
					content="https://frontendschool6.github.io/react-project-7/#/successfindid"
				/>
			</Helmet>

			<div className={S.content}>
				<div className={S.contentWrapper}>
					<div className={S.iconSection}>
						<img
							src={bigcheck}
							alt="로그인 찾기 성공 이미지"
							className={S.checkLogo}
						/>
					</div>
					<div className={S.textSection}>
						<h1 className={S.title}>입력하신 정보와 일치하는 결과입니다</h1>
						<div className={S.subtitleWrapper}>
							<div className={S.description1}>개인정보 보호를 위해</div>
							<span className={S.description2}>
								아이디 또는 이메일의 일부만 제공합니다.
							</span>
						</div>

						<div
							className={S.idForm}
							style={{
								backgroundImage: `url(${tvingLogo})`,
								backgroundPosition: 30,
							}}
						>
							<span className="flex">
								{/* <p
									className=""
								>
									TVING ID
								</p> */}
								{idState.id}
							</span>
						</div>
						<span className={S.description3}>
							※SNS 회원은 해당 SNS 아이디가 아닌 티빙 가입 시 등록한 이메일을
							알려드립니다.
						</span>
					</div>
					<div>
						<LoginButton
							type="button"
							className={S.loginButton}
							onClick={handleLogin}
							text="로그인 하러 가기"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default SuccessFindId;
