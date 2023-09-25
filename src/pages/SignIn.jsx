import pb from "@/api/pocketbase";
import { default as useAuthStore } from "../store/useAuthStore";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import showPasswordIcon from "/assets/eye.svg";
import hidePasswordIcon from "/assets/hide-password.svg";
import AutoLogin from "/assets/red-check.svg";
import unAutoLogin from "/assets/unactive-check.svg";
import InputForm from "./../components/findid/InputForm";
import SubmitButton from "./../components/signin/SubmitButton";
import S from "./SignIn.module.css";

function SignIn() {
	const { authState, signIn } = useAuthStore();
	const navigate = useNavigate();

	const [imageSrc, setImageSrc] = useState(false);
	const [isLoginClicked, setIsLoginClicked] = useState(false);

	const [isPasswordHidden, setIsPasswordHidden] = useState(true);
	const [showPassword, setShowPassword] = useState(true);

	const autoLogin = "/assets/red-check.svg";
	const unAutoLoin = "/assets/unactive-check.svg";

	useEffect(() => {
		console.log(authState);
	}, [authState]);

	const handleSignIn = async (e) => {
		e.preventDefault();

		const { id, password } = formState;

		try {
			const response = await signIn(id, password);
			console.log("response:", response);
			if (response) {
				console.log("인증에 성공했습니다.:", response);
				const { token, record } = response;
				const updatedStorageData = {
					isAuth: !!record,
					user: record,
					token: token,
				};
				console.log(updatedStorageData);
				await useAuthStore.setState({ authState: updatedStorageData });
				console.log(useAuthStore.getState().authState);
				console.log(updatedStorageData);

				if (!updatedStorageData.isAuth){
					alert(
						"로그인에 실패하였습니다😓 아이디와 비밀번호를 다시 확인해주세요."
					);
				}else {
					navigate(`/profile/${updatedStorageData?.user?.id}`);
					console.log("Authentication successful.");
				}
				
			} else {
				alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
				console.log("Authentication failed.");
				
			}
		} catch (error) {
			console.error("Error during authentication:", error);
		}
	};

	const authData = async (e) => {
		await pb
			.collection("users")
			.authWithPassword("Your_USERNAME_OR_EMAIL", "YOUR_PASSWORD");
	};

	const idRegex = /^.{6,15}$/;
	const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;

	const [formState, setFormState] = useState({
		id: "",
		password: "",
	});
	const [loginValidation, setloginValidation] = useState({
		id: false,
		password: false,
	});
	const togglePasswordHidden = () => {
		setIsPasswordHidden(!isPasswordHidden);
	};
	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleAutoLogin = () => {
		if (isLoginClicked) {
			setImageSrc(unAutoLogin);
			setIsLoginClicked(false); 
		} else {
			setImageSrc(AutoLogin);
			setIsLoginClicked(true);
		}
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

		switch (name) {
			case "id":
				isValid = idRegex.test(value);
				break;
			case "password":
				isValid = passwordRegex.test(value);
				break;
			default:
				return;
		}

		setloginValidation({
			...loginValidation,
			[name]: !isValid,
		});
		if (isValid) {
			setFormState({
				...formState,
				[name]: value,
			});
		}
	};

	const handleDebounceInput = debounce(handleInput, 500);
	return (
		<>
			<Helmet>
				<title>타잉 7조 - SNS 로그인 페이지</title>
				<meta
					name="description"
					content="멋쟁이 사자처럼 6기 7조의 파이널 프로젝트 - 티빙 클론코딩 기본 계정 로그인 페이지"
				/>

				<meta property="og:type" content="website" />
				<meta property="og:title" content="타잉 기본 로그인 페이지" />
				<meta
					property="og:description"
					content="프로젝트 타잉 기본 계정 로그인 페이지"
				/>
				<meta
					property="og:image"
					content="https://github.com/FRONTENDSCHOOL6/react-project-7/assets/55738193/97e6369f-6694-416c-b699-f1fe43946145"
				/>
				<meta
					property="og:url"
					content="https://frontendschool6.github.io/react-project-7/#/signin"
				/>
			</Helmet>
			<div className={S.content}>
				<div className={S.contentWrapper}>
					<div className={S.title}>TVING ID 로그인</div>
					<form onSubmit={handleSignIn} className={S.formWrapper}>
						<InputForm
							type="username"
							name="id"
							onChange={handleDebounceInput}
							placeholder="아이디"
						/>
						{loginValidation.id && (
							<div style={{ color: "red" }}>
								올바른 아이디 형식을 입력하세요.
							</div>
						)}

						<label className="relative">
							<InputForm
								type={isPasswordHidden ? "password" : "text"}
								name="password"
								onChange={handleDebounceInput}
								placeholder="비밀번호"
							/>
							<img
								src={isPasswordHidden ? hidePasswordIcon : showPasswordIcon}
								alt="비밀번호 숨김/표시 아이콘"
								onClick={togglePasswordHidden}
								className={S.showPassword}
							/>
						</label>
						{loginValidation.password && (
							<div style={{ color: "red" }}>
								올바른 비밀번호 형식이 아닙니다.
							</div>
						)}
						<label className={S.showPasswordLabel}>
							<img
								src={isLoginClicked ? AutoLogin : unAutoLogin}
								alt="자동 로그인"
								onClick={handleAutoLogin}
								className="pr-[7px]"
							/>
							자동로그인
						</label>
						<SubmitButton type="submit" text="로그인하기" />
						<span className={S.linkGroup}>
							<Link to="/findid" className={S.findId}>
								아이디 찾기{" "}
							</Link>
							|{" "}
							<Link to="/findpw" className={S.findPw}>
								비밀번호 찾기
							</Link>
						</span>
					</form>
					<div className={S.signUpText}>
						아직 계정이 없으신가요?
						<Link to="/signup" className={S.signUp}>
							회원가입
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default SignIn;
