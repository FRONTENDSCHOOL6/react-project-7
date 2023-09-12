import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { Link, useLocation, useNavigate } from "react-router-dom"

function FindId() {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$;/ //이메일 유효성 검사용
	const [FormState, setFormState] = useState({
		email: "",
	})

	const isFormVaild = () => {
		return Object.values(validationErrors).every((error) => error === false)
	}

	const handleInput = (e) => {
		const { name, value } = e.target
		let isValid
		if (name == "email") {
			isValid = emailRegex.text(value)
		} else return
	}

	const searchID = () => {}
	//?구분선 넣는 컴포넌트로 쓰려고 했는데 child로 쓰면 안된다는거 같아서 일단 주석처리..
	//? 모듈로 빼게 되면 <HorizonLine text={} /> 이런 식으로 쓸 수 있을 것 같다
	// const HorizonLine = (text) =>{
	//   return(
	//     <dig
	//     style={{
	//       width: "100%",
	//       textAlign: "center",
	//       borderBottom: "1px solid #aaa",
	//       lineHeight: "0.1em",
	//       margin: "10px 0 20px",
	//     }}
	//     >
	//        <span style={{ background: "#fff", padding: "0 10px" }}>{text}</span>
	//     </dig>
	//   )
	// };

	return (
		<>
			<Helmet>
				<title>FindId - Taing</title>
			</Helmet>
			<header className="bg-black pl-[70px] pt-[15px]">
				<Link to="/">
					<img src="/assets/logo.svg" alt="Taing logo" />
				</Link>
			</header>
			<div className="bg-black h-screen">
				<div className="pt-[70px] text-white login-title leading-10 container max-w-lg mx-auto align-middle">
					<div className="pb-[60px] font-bold text-2xl flex justify-center">
						아이디 찾기
					</div>
					<div className="text-white">
						<div className="font-semibold text-xl">이메일로 찾기</div>
						<div className="text-gray400">
							가입 시 등록한 이메일을 입력해주세요
						</div>
					</div>

					<input
						type="email"
						label="이메일"
						name="email"
						className="text-white h-14 bg-gray700 text-gray900 login-form px-4 w-full rounded-sm"
						placeholder="이메일"
					/>
					<div className="h-5"></div>
					<button
						type="submit"
						className="h-14 bg-gray600 text-white login-button w-full rounded-sm"
					>
						확인
					</button>

					{/* <HorizonLine text="또는" /> */}
					<div className="bg-gray800 w-[30%] my-[1%] border-[1px]"></div>
					<div>
						<span>
							본인인증으로 찾기 이미 본인인증이 완료된 계정에 한하여 아이디
							찾기가 가능합니다
						</span>
						<button
							type="submit"
							className="h-14 bg-gray100 text-black font-semibold login-button w-full rounded-sm
          dark:hover:bg-zinc-100"
						>
							본인인증하기
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default FindId
