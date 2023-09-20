import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import pb from "@/api/pocketbase";
import idStore from "@/store/idStore";
import S from "./findid.module.css";

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


	//@ 이메일 전역 변수
	const [email, setEmail] = useState("");

	//@ 유효성 검사 상태
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

	//@유효성 검사 통과 확인
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

	//@ handleInput 함수
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

	//@ 이메일이 유효한지 여부
	const isEmailValid = emailRegex.test(email);

	//@ 확인버튼
	const handleConfirmButton = async (e) => {
		e.preventDefault();

		if (!isEmailValid) {
			setErrorMessage((prevErrors) => ({
				...prevErrors,
				email: "이메일을 올바르게 입력해주세요.",
			}));
		} else {
			//@ 입력받은 이메일 형식이 유효한 경우 처리 로직 추가
			//@ ex) 서버로 이메일 전송 등
			setErrorMessage((prevErrors) => ({
				...prevErrors,
				email: "",
			})); //@에러메시지 초기화

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
					// setResult(null);
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
				<title>FindId - Taing</title>
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
						<input
							type="email"
							label="이메일"
							name="email"
							className={`${S.inputForm} ${validationErrors.email ? `${S.formBorder}` : ""}`}
							placeholder="이메일"
							onChange={handleInput}
						/>
						{/* 이메일 유효성 에러 메시지 표시 */}
						{validationErrors.email && (
							<p className={S.errorMessage}>
								이메일을 올바르게 입력해주세요.
							</p>
						)}
						<div className="h-8"></div>
						<button
							type="submit"
							className={`${S.submitButton}
						${!isEmailValid || disable ? "" : `${S.eventSubmitButton}`}`}
							onClick={handleConfirmButton}
						>
							확인
						</button>
					</form>
					{/* <div className="w-full border-slate-800 pt-10 my-[1%] border-t-[0.5px] mt-[60px]"></div> */}
					<div className={S.horizonSection}>
						<span className={S.horizonLine}></span>
						<span className={S.horizonText}>
							또는
						</span>
						<span className={S.horizonLine}></span>
					</div>
					<div>
						<h4 className={S.findText1}>
							본인인증으로 찾기
						</h4>
						<p className={S.findText2}>
							이미 본인인증이 완료된 계정에 한하여 아이디찾기가 가능합니다
						</p>

						<button
							type="submit"
							className={S.authButton}
						>
							본인인증하기
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default FindId;
