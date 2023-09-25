import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import pb from "@/api/pocketbase";
import idStore from "../store/idStore";
import S from "./FindId.module.css";
import InputForm from "./../components/findid/inputForm";
import ConfirmButton from "../components/findid/ConfirmButton";
import LoginButton from "../components/findid/LoginButton";
import resetButton from "./../../public/assets/clear-all.svg";

function FindId() {
	const navigate = useNavigate();
	const [disable, setDisable] = useState(true);
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //이메일 형식 유효성 검사
	const [FormState, setFormState] = useState(null);

	const [isClearButtonHidden, setisClearButtonHidden] = useState(true);

	const { idState, findId } = idStore();

	useEffect(() => {
		console.log(idState);
	}, [idState]);

	const [email, setEmail] = useState("");

	const [validationErrors, setValidationErrors] = useState({
		email: false,
	});

	const [errorMessage, setErrorMessage] = useState({
		email: false,
	});

	const [result, setResult] = useState(null);

	useEffect(() => {
		setResult(null); //? 페이지가 리로드될때마다 result 값 초기화
	}, []);

	const isFormVaild = () => {
		return Object.values(validationErrors).every((error) => error === false);
	};

	const debounce = (callback, timeout = 300) => {
		let cleanup;
		return (...args) => {
			clearTimeout(cleanup);
			cleanup = setTimeout(callback.bind(null, ...args), timeout);
		};
	};
	const handleInput = (e) => {
		const { name, value } = e.target;
		let isValid;
		if (name === "email") {
			isValid = emailRegex.test(value);
			setValidationErrors((prevErrors) => ({
				...prevErrors,
				email: !isValid,
			}));
			setEmail(value);

			if (isValid) {
				setErrorMessage((prevErrors) => ({
					...prevErrors,
					email: false,
				}));
			}
		} else {
			return email;
		}
		console.log("input email=", value);
	};

	const handleDebounceInput = debounce(handleInput, 500);

	const isEmailValid = emailRegex.test(email);
	const handleConfirmButton = async (e) => {
		e.preventDefault();
		console.log("isEmailValid:", isEmailValid);
		console.log("!isEmailValid:", !isEmailValid);
		if (!isEmailValid) {
			setErrorMessage((prevErrors) => ({
				...prevErrors,
				email: "이메일을 올바르게 입력해주세요.",
			}));
		} else {
			setErrorMessage((prevErrors) => ({
				...prevErrors,
				email: "",
			}));

			try {
				const result = await pb.collection("users").getList(1, 20, {
					filter: `(email= "${email}")`,
				});
				if (result.items.length > 0) {
					console.log(
						"input email=",
						e.target.value,
						"username=",
						result.items.at(0).username
					);

					const userID = result.items.at(0).username;
					const updatedStorageData = {
						isIdFound: true,
						id: userID,
					};
					localStorage.setItem(
						"pocketbase_auth",
						JSON.stringify(updatedStorageData)
					);
					console.log(updatedStorageData);
					idStore.setState({ idState: updatedStorageData });
					navigate("/successfindid");
					console.log("Found UserID successful.");
					return userID;
				} else {
					setResult(null);
					navigate("/failedfindid");
					throw new Error("No user found");
				}
			} catch (error) {
				console.error("Error: ", error);
			}
		}
	};

	return (
		<>
			<Helmet>
				<title>타잉 7조 - 아이디 찾기 페이지</title>
				<meta
					name="description"
					content="멋쟁이 사자처럼 6기 7조의 파이널 프로젝트 - 티빙 클론코딩 아이디 찾기 페이지"
				/>

				<meta property="og:type" content="website" />
				<meta property="og:title" content="타잉 아이디 찾기 페이지" />
				<meta
					property="og:description"
					content="프로젝트 타잉 아이디 찾기 페이지"
				/>
				<meta
					property="og:image"
					content="https://github.com/FRONTENDSCHOOL6/react-project-7/assets/55738193/ce03e7d0-480e-4e5e-854e-a4c0884f5103"
				/>
				<meta
					property="og:url"
					content="https://frontendschool6.github.io/react-project-7/#/findid"
				/>
			</Helmet>
			<div className={S.contentSection}>
				<div className={S.contentWrapper}>
					<div className={S.findIdTitle}>아이디 찾기</div>
					<div className="">
						<div className={S.findIdSubtitle1}>이메일로 찾기</div>
						<div className={S.findIdSubtitle2}>
							가입 시 등록한 이메일을 입력해주세요
						</div>
					</div>
					<form onSubmit={handleInput}>
						<span>
							<InputForm
								type="email"
								name="email"
								label="이메일"
								placeholder="이메일"
								className={` ${S.inputForm} ${
									validationErrors.email ? `${S.formBorder}` : ""
								}
						}`}
								onChange={handleInput}
							/>
							<img
								src={resetButton}
								className={
									InputForm.value !== null
										? "hidden"
										: "cursor-pointer absolute right-[24px] top-3 first-line:transform -translate-y-1/2"
								}
							/>
						</span>
						{/* 이메일 유효성 에러 메시지 표시 */}
						{validationErrors.email && (
							<p className={S.errorMessage}>이메일을 올바르게 입력해주세요.</p>
						)}
						<div className="h-8"></div>
						<ConfirmButton
							type="submit"
							className={`${S.ConfirmButton}
					${!isEmailValid ? "" : `${S.eventSubmitButton}`}`}
							onClick={handleConfirmButton}
							text="확인"
						/>
					</form>
					<div className={S.horizonSection}>
						<span className={S.horizonLine}></span>
						<span className={S.horizonText}>또는</span>
						<span className={S.horizonLine}></span>
					</div>
					<div>
						<h4 className={S.findText1}>본인인증으로 찾기</h4>
						<p className={S.findText2}>
							이미 본인인증이 완료된 계정에 한하여 아이디찾기가 가능합니다
						</p>
						<LoginButton type="button" text="본인인증으로 찾기" />
					</div>
				</div>
			</div>
		</>
	);
}

export default FindId;
