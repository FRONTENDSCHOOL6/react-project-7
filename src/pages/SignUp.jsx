import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import pb from "@/api/pocketbase";
import showPasswordIcon from "/assets/eye.svg";
import hidePasswordIcon from "/assets/hide-password.svg";
import unAutoLogin from "/assets/unactive-check.svg";
import AutoLogin from "/assets/red-check.svg";
import redCheck from "/assets/small-red-check.svg";
import grayCheck from "/assets/small-gray-check.svg";
import popUp from "/assets/popup-menu.svg";
import clearButton from "/assets/clear-all.svg";
import { LocalAuthStore } from "pocketbase";
import { FormInput } from "./../components/Form/FormInput";
// import { FormTitle } from "./../components/Form/FormTitle";

// import { Alert } from "react-native";
import S from "./Signup.module.css";

function SignUp() {
	const navigate = useNavigate();

	//@ 유효성검사 정규식
	const usernameRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/; // 영문+숫자 6~12글자
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식
	const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/; // 8~15글자 영문+숫자

	console.log(pb);

	const [imageSrc, setImageSrc] = useState(false);
	const [isAgreeClicked, setIsAgreeClicked] = useState(false);

	const handleAgreeConfirm = () => {
		if (isAgreeClicked) {
			setImageSrc(unAutoLogin);
			setIsAgreeClicked(false); // 초기 상태 false 일 땐 초기 상태 이미지 src
		} else {
			setImageSrc(AutoLogin);
			setIsAgreeClicked(true); // true일 땐 변경될 이미지 src
		}
	};

	const [checkIcon, setCheckIcon] = useState(false);
	const [isAgreeChecked, setIsAgreeChecked] = useState(false);
	const handleAgreeChecked = () => {
		if (isAgreeChecked) {
			setCheckIcon(redCheck);
			setIsAgreeChecked(false);
		} else {
			setCheckIcon(grayCheck);
			setIsAgreeChecked(true);
		}
	};

	//@ 기본 Form
	const [formState, setFormState] = useState({
		username: "",
		email: "",
		password: "",
		passwordConfirm: "",
	});

	//@ 유효성 검사 상태
	const [validationErrors, setValidationErrors] = useState({
		username: false,
		email: false,
		password: false,
		passwordConfirm: false,
	});

	const [errorMessage, setErrorMessage] = useState({
		username: false,
		email: false,
		password: false,
		passwordConfirm: false,
	});

	const isFormValid = () => {
		return Object.values(validationErrors).every((error) => error === false);
	};

	const [isPasswordHidden, setIsPasswordHidden] = useState(true);
	const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);

	//@ 등록
	const handleRegister = async (e) => {
		e.preventDefault();

		const { password, passwordConfirm } = formState;

		if (password !== passwordConfirm) {
			alert("비밀번호가 일치하지 않습니다. 다시 입력하세요.");
			return;
		}
		//@ 회원 가입 API 호출 및 처리
		await pb
			.collection("users")
			.create({ ...formState, emailVisibility: true });

		console.log(pb.authStore);
		alert("회원가입이 완료되었습니다 ❤ 가입된 정보로 로그인을 해주세요");
		navigate("/signin");
	};

	const handleInput = (e) => {
		const { name, value } = e.target;

		let isValid;

		switch (name) {
			case "username":
				isValid = usernameRegex.test(value);
				break;
			case "email":
				isValid = emailRegex.test(value);
				break;
			case "password":
				isValid = passwordRegex.test(value);
				break;
			case "passwordConfirm":
				isValid = formState.password === value;
				break;
			default:
				return;
		}

		setValidationErrors({
			...validationErrors,
			[name]: !isValid,
		});
		if (isValid) {
			setFormState({
				...formState,
				[name]: value,
			});
		}
	};

	const debounce = (callback, timeout = 100) => {
		let cleanup;
		return (...args) => {
			clearTimeout(cleanup);
			cleanup = setTimeout(callback.bind(null, ...args), timeout);
		};
	};
	const handleDebounceInput = debounce(handleInput, 100);

	//@ 비밀번호 숨김/해제 토글함수
	const togglePasswordHidden = () => {
		setIsPasswordHidden(!isPasswordHidden);
	};
	const toggleConfirmPasswordHidden = () => {
		setIsConfirmPasswordHidden(!isConfirmPasswordHidden);
	};

	return (
		<>
			<Helmet>
				<title>SignUp - Taing</title>
			</Helmet>
			<div className={S.screen}>
				<div className={S.contentWrapper}>
					<h1 className={S.signup}>티빙 회원가입</h1>
					<p className={S.subtitle}>
						아이디와 이메일로 간편하게 티빙을 시작하세요!
					</p>
					<form onSubmit={handleRegister}>
						{/* //@ 아이디 */}
						<span className="relative">
							<FormInput
								label="아이디"
								name="username"
								defaultValue={formState.username}
								onChange={handleDebounceInput}
								placeholder="아이디"
							/>
							<img
								src={clearButton}
								alt="아이디 입력 초기화"
								className="hidden absolute top-[5%] right-5 cursor-pointer"
							/>
						</span>
						{validationErrors.username ? (
							<p
								className={`text-red-500 ${
									validationErrors.username ? "border-red-600" : ""
								}`}
							>
								영문 소문자 또는 영문 소문자, 숫자 조합 6~12자리로 입력해주세요
							</p>
						) : (
							<p className={S.idValidation}>
								영문 소문자 또는 영문 소문자, 숫자 조합 6~12자리
							</p>
						)}
						{/*//@비밀번호*/}
						{/* //@ 비밀번호 유효성 검사, 일치 여부 확인 */}
						<span className="relative">
							<FormInput
								type={isPasswordHidden ? "password" : "text"}
								label="비밀번호"
								name="password"
								defaultValue={formState.password}
								onChange={handleDebounceInput}
								className={` ${
									validationErrors.password
										? "border-red-500"
										: !validationErrors.password && formState.password !== ""
										? "border-slate-300"
										: "border-slate-300"
								} text-white h-16 mt-3 bg-gray800 placeholder-slate-600 px-4 w-full rounded-sm`}
								placeholder="비밀번호"
							/>
							<img
								src={isPasswordHidden ? hidePasswordIcon : showPasswordIcon}
								alt="비밀번호 숨김/표시 아이콘"
								onClick={togglePasswordHidden}
								className={S.hidePasswordButton}
							/>
						</span>
						{validationErrors.password && (
							<span className="text-red-500 text-base">
								비밀번호는 영문, 숫자를 포함하여 8~16자로 입력해주세요.
							</span>
						)}

						{/*//@ 비밀번호 확인 */}
						<label className="relative">
							<FormInput
								type={isPasswordHidden ? "password" : "text"}
								label="비밀번호 확인"
								name="passwordConfirm"
								defaultValue={formState.passwordConfirm}
								placeholder="비밀번호 확인"
								className={` ${
									validationErrors.passwordConfirm
										? "border-red-500"
										: !validationErrors.passwordConfirm &&
										  formState.passwordConfirm !== ""
										? "border-green-600"
										: "border-slate-400"
								} ${S.basicForm}`}
							/>
							<img
								src={
									isConfirmPasswordHidden ? hidePasswordIcon : showPasswordIcon
								}
								alt="비밀번호 숨김/표시 아이콘"
								onClick={toggleConfirmPasswordHidden}
								className={S.hidePasswordButton}
							/>
						</label>
						{validationErrors.passwordConfirm ? (
							<span className="text-red-500 text-base">
								비밀번호가 일치하지 않습니다. 다시 확인해주세요.
							</span>
						) : (
							<span className="text-gray500 text-base">
								영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리{" "}
							</span>
						)}
						<FormInput
							type="email"
							label="이메일"
							name="email"
							defaultValue={formState.email}
							placeholder="이메일"
							onChange={handleDebounceInput}
						/>
						{validationErrors.email && (
							<span className="text-red-500 text-base">
								올바른 이메일 형식으로 입력해주세요.
							</span>
						)}

						{/*//@약관 동의 체크 */}
						<div className="pt-6 text-gray400">
							<span className="flex pb-2">
								<img
									src={isAgreeClicked ? AutoLogin : unAutoLogin}
									alt="자동 로그인"
									onClick={handleAgreeConfirm}
									className="pr-3 cursor-pointer"
								/>
								<p className="font-bold text-lg">
									필수 및 선택 항목을 모두 포함하여 동의합니다.
								</p>
							</span>
							<span className="flex">
								<img
									src={isAgreeChecked ? redCheck : grayCheck}
									alt="약관동의 체크"
									onClick={handleAgreeChecked}
									className="right-1/5 pr-3 cursor-pointer"
								/>
								<p>만 14세 이상입니다.</p>
							</span>
							<span className="flex">
								<img
									src={isAgreeChecked ? redCheck : grayCheck}
									alt="약관동의 체크"
									onClick={handleAgreeChecked}
									className={S.checkAgree}
								/>
								<p>[필수] 서비스 이용약관 동의</p>
							</span>
							<span className="flex">
								<img
									src={isAgreeChecked ? redCheck : grayCheck}
									alt="약관동의 체크"
									onClick={handleAgreeChecked}
									className={S.checkAgree}
								/>
								<p>[필수] 개인정보 수집 및 이용 동의</p>
							</span>
							<p className="flex">
								<img
									src={isAgreeChecked ? redCheck : grayCheck}
									alt="약관동의 체크"
									onClick={handleAgreeChecked}
									className={S.checkAgree}
								/>
								[선택] 개인정보 수집 및 이용 동의
							</p>
							<p className="flex">
								<img
									src={isAgreeChecked ? redCheck : grayCheck}
									alt="마케팅 정보 수신 동의"
									onClick={handleAgreeChecked}
									className={S.checkAgree}
								/>
								[선택] 마케팅 정보 수신 동의
							</p>
							<span className="flex pl-8 pr-3 pb-3">
								<span className="flex pr-5">
									<img
										src={isAgreeChecked ? redCheck : grayCheck}
										alt="푸시알림 수신 동의"
										onClick={handleAgreeChecked}
										className="right-1/5 pr-[7px] cursor-pointer"
									/>
									푸시 알림
								</span>{" "}
								<span className="flex pr-5">
									<img
										src={isAgreeChecked ? redCheck : grayCheck}
										alt="이메일 수신 동의"
										onClick={handleAgreeChecked}
										className="right-1/5 pr-[7px] cursor-pointer"
									/>
									이메일
								</span>{" "}
								<span className="flex">
									<img
										src={isAgreeChecked ? redCheck : grayCheck}
										alt="SMS 수신 동의"
										onClick={handleAgreeChecked}
										className="right-1/5 pr-[7px] cursor-pointer"
									/>
									SMS
								</span>
							</span>
						</div>
						<button
							type="submit"
							disabled={!isFormValid()}
							className={`h-16 bg-gray700 font-bold text-white login-button w-full rounded-sm"
						${
							isFormValid()
								? "bg-gray700 dark:hover:bg-[#cc1030] cursor-pointer"
								: "bg-gray700 cursor-not-allowd"
						}`}
						>
							가입하기
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default SignUp;
