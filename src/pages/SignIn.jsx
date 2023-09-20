import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import showPasswordIcon from "/assets/eye.svg";
import hidePasswordIcon from "/assets/hide-password.svg";
import pb from "@/api/pocketbase";
import unAutoLogin from "/assets/unactive-check.svg";
import AutoLogin from "/assets/red-check.svg";
import authStore from "@/store/useAuthStore";
import { useEffect } from "react";
import useAuthStore from "@/store/useAuthStore";

function SignIn() {
	const { authState, signIn } = authStore();
	const navigate = useNavigate();

	const checkIcon = "/assets/unactive-check.svg";
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
			console.log(response);
			if (response) {
				// 인증에 성공한 경우
				console.log(response);
				const { token, record } = response;

				// localStorage에 업데이트된 데이터를 저장합니다.
				const updatedStorageData = {
					isAuth: !!record,
					user: record,
					token: token,
				};
				//localStorage.setItem(
				//	"pocketbase_auth",
				//	JSON.stringify(updatedStorageData)
				//);
				console.log(updatedStorageData);
				// Zustand 상태를 업데이트합니다.
				await useAuthStore.setState({ authState: updatedStorageData });
				console.log(useAuthStore.getState().authState);
				// Authentication successful
				console.log(authState);
				await localStorage.setItem(
					"pocketbase_auth",
					JSON.stringify(updatedStorageData)
				);
				navigate(`/profile/${updatedStorageData.user.id}`);
				console.log("Authentication successful.");
			} else {
				// Authentication failed
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

	//@아이디 비밀번호 유효성 검사용 정규표현식

	const idRegex = /^.{6,15}$/; // 아이디 정규표현식 : 영문 3~15자
	const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/; // 비밀번호 정규표현식 : 영문+숫자 8~16자

	const [formState, setFormState] = useState({
		id: "",
		password: "",
	});

	//유효성 검사 상태 설정
	const [loginValidation, setloginValidation] = useState({
		id: false,
		password: false,
	});

	//@비밀번호 보이기/숨기기
	const togglePasswordHidden = () => {
		setIsPasswordHidden(!isPasswordHidden);
	};
	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleAutoLogin = () => {
		if (isLoginClicked) {
			setImageSrc(unAutoLogin);
			setIsLoginClicked(false); // 초기 상태 false 일 땐 초기 상태 이미지 src
		} else {
			setImageSrc(AutoLogin);
			setIsLoginClicked(true); // true일 땐 변경될 이미지 src
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
				<title>Sign In - Taing</title>
			</Helmet>
			<Link to="/">
				<img
					src="/assets/logo.svg"
					alt="Taing logo"
					className="w-[110px] pt=[10px]"
				/>
			</Link>

			<div className="contentWrapper w-full">
				<div className="bg-black min-h-screen flex items-center justify-center">
					<div className="pt-10 pb-16 text-white login-title container w-1/3 mx-auto">
						{/* <div className="pb-[60px] font-bold text-[35px] flex justify-center"> */}
						<div className="pb-[60px] font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center">
							TVING ID 로그인
						</div>
						<form onSubmit={handleSignIn} className="flex flex-col gap-2">
							<input
								type="text"
								label="아이디"
								name="id"
								className="font-light h-14 bg-[#212121] text-gray600 login-form px-4 w-full rounded-sm
                        "
								onChange={handleInput}
								placeholder="아이디"
							/>
							{loginValidation.id && (
								<div style={{ color: "red" }}>
									올바른 아이디 형식을 입력하세요.
								</div>
							)}

							<label className="relative">
								<input
									type={isPasswordHidden ? "password" : "text"}
									label="비밀번호"
									name="password"
									onChange={handleDebounceInput}
									className="h-14  bg-[#212121] text-gray600 login-form px-4 w-full rounded-sm"
									placeholder="비밀번호"
								/>
								<img
									src={isPasswordHidden ? hidePasswordIcon : showPasswordIcon}
									alt="비밀번호 숨김/표시 아이콘"
									onClick={togglePasswordHidden}
									className="cursor-pointer absolute right-6 top-1/2 first-line:transform -translate-y-1/2"
								/>
							</label>
							{loginValidation.password && (
								<div style={{ color: "red" }}>
									올바른 비밀번호 형식이 아닙니다.
								</div>
							)}
							<label className="flex text-left text-gray500 text-sm pt-[7px] pb-[10px]">
								<img
									src={isLoginClicked ? AutoLogin : unAutoLogin}
									alt="자동 로그인"
									onClick={handleAutoLogin}
									className="pr-[7px]"
								/>
								자동로그인
							</label>
							{/* 로그인 */}
							<button
								type="submit"
								className="h-14 bg-[#FF153C] font-bold dark:hover:bg-[#cc1030] text-white login-button w-full rounded-sm"
							>
								로그인하기
							</button>
							<span className="text-gray300 text-center pt-[20px] pb-[10px] md:text-xs lg:text-base xl:text-md 2xl:text-lg">
								<Link
									to="/findid"
									className="text-gray400 dark:hover:text-zinc-300 pr-[13px]"
								>
									아이디 찾기{" "}
								</Link>
								|{" "}
								<Link
									to="/findpw"
									className="text-gray400 pl-[10px] dark:hover:text-zinc-300"
								>
									비밀번호 찾기
								</Link>
							</span>
						</form>
						<div
							className="flex justify-center pt-[30px] pl-[60px] pb-[100px] border-slate-600 dark:border-slate-200/30
             sm:text-xs md:text-base lg:text-base xl:text-md 2xl:text-lg
             "
						>
							아직 계정이 없으신가요?
							<Link
								to="/signup"
								className="dark:text-zinc-500 w-36 text-l dark:hover:text-zinc-300 flex pl-[10px]"
							>
								회원가입
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SignIn;
