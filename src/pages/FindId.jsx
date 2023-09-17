import { useState , useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import pb from "@/api/pocketbase";

function FindId() {
	const navigate = useNavigate();
	const [disable, setDisable] = useState(true);
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //이메일 형식 유효성 검사
	const [FormState, setFormState] = useState(null);

	const [isClearButtonHidden, setisClearButtonHidden] = useState(true);

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

	useEffect(()=> {
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
	const handleConfirmButton = async (email) => {
		email.preventDefault();

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
					filter: `(email~ "${email.target.value}")`,
				});
				if (result.items.length > 0){
					console.log("input email=",email.target.value, "username=",result.items.at(0).username);
					setResult(null);
				}else{
					setResult(null);
					throw new Error("No user found");
				}
			} catch (error) {
				console.error("Error: ", error);
			}
		}
	};

	// const authData = async (e) => {
	// 	// await pb.collection("users").getFirstListItem(?filter=(email=`${email}`)
	// 	await pb.collection("users").getFullList(email == `${email}`, email);
	// 	const result = await pb
	// 		.collection("users")
	// 		.getList(1, 20, { filter: (email = value) });
	// 	return;
	// };

	// const result = await pb.collection('users').getList(1, 20, {
	//         filter: email = value,
	//     });
	// const toggleClearButton = () => {
	// 	showClearButton();
	// };

	// const toggleClearButton = () => {
	// 	hiddenClearButton();
	// }

	return (
		<>
			<Helmet>
				<title>FindId - Taing</title>
			</Helmet>
			<div className="bg-black h-screen z-50">
				<div className="pt-[70px] text-white login-title leading-10 container w-1/3 mx-auto align-middle">
					<div className="pb-[60px] font-semibold text-4xl flex justify-center">
						아이디 찾기
					</div>
					<div className="text-white">
						<div className="font-semibold text-xl">이메일로 찾기</div>
						<div className="text-gray400 font-medium">
							가입 시 등록한 이메일을 입력해주세요
						</div>
					</div>
					<form onSubmit={handleInput}>
						<input
							type="email"
							label="이메일"
							name="email"
							className={`text-white h-16 bg-gray800 placeholder-slate-600 login-form px-4 w-full rounded-sm
									${validationErrors.email ? "border-red-500" : ""}`}
							placeholder="이메일"
							onChange={handleInput}
						/>
						{/* 이메일 유효성 에러 메시지 표시 */}
						{validationErrors.email && (
							<p className="text-red-500 text-sm mt-2">
								이메일을 올바르게 입력해주세요.
							</p>
						)}
						<div className="h-8"></div>
						<button
							type="submit"
							className={`h-16 bg-gray300 text-gray500 font-extrabold login-button w-full rounded-sm
						dark:hover:bg-gray100 dark:hover:text-black
						${!isEmailValid || disable ? "" : "opacity-50 cursor-pointer"}`}
							// disabled={!isEmailValid || disable}
							onClick={handleConfirmButton}
						>
							확인
						</button>
					</form>
					{/* <div className="w-full border-slate-800 pt-10 my-[1%] border-t-[0.5px] mt-[60px]"></div> */}
					<div className="flex flex-row items-center mt-10 justify-between">
						<span className="w-2/5 h-[1px] bg-gray800"></span>
						<span className="w-1/5 text-center ">또는</span>
						<span className="w-2/5 h-[1px] bg-gray800"></span>
					</div>
					<div>
						<h4 className="pt-10 pb-3 text-gray100 font-semibold text-xl">
							본인인증으로 찾기
						</h4>
						<p className="pb-5 text-gray400">
							이미 본인인증이 완료된 계정에 한하여 아이디찾기가 가능합니다
						</p>

						<button
							type="submit"
							className="h-16 bg-gray100 text-black font-extrabold login-button w-full rounded-sm dark:hover:bg-zinc-100"
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