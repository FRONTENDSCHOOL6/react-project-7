
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
// import pb from "@/api/pocketbase";
import S from './../styles/Signin.css';
import showPasswordIcon from "/assets/eye.svg";
import hidePasswordIcon from "/assets/hide-password.svg";

function SignIn() {
    const navigate= useNavigate();

		const [imageSrc, setImageSrc] = useState("/assets/unactive-check.svg")
		const [isLoginClicked, setIsLoginClicked] = useState(false)

		const [isPasswordHidden, setIsPasswordHidden] = useState(true)
    const [showPassword, setShowPassword] = useState(true);

    //@정규표현식
    const idRegex = /^.{3,15}$/; // 아이디 정규표현식 : 영문 3~15자
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/; // 비밀번호 정규표현식 : 영문+숫자 8~16자


    const [formState, setFormState] = useState({
			id: "",
			password: "",
		});
    
    //유효성 검사 상태 설정
    const [loginValidation, setloginValidation] = useState({
      id: false,
      password: false
    });

    const isFormValid=()=>{
      return Object.values(validationErrors).every((error)=> error === false );
    }
    

    //@비밀번호 보이기/숨기기
    const togglePasswordHidden = () => {
      setIsPasswordHidden(!isPasswordHidden);
    };
    const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

		const handleLoginClick = () => {
			if (isLoginClicked) {
				setImageSrc("/assets/unactive-check.svg")
				setIsLoginClicked(false) // 초기 상태 false 일 땐 초기 상태 이미지 src
			} else {
				setImageSrc("/assets/red-check.svg")
				setIsLoginClicked(true) // true일 땐 변경될 이미지 src
			}
		}


		const debounce = (callback, timeout = 300) => {
			let cleanup
			return (...args) => {
				clearTimeout(cleanup)
				cleanup = setTimeout(callback.bind(null, ...args), timeout)
			}
		}

		const handleSignIn = async (e) => {
			e.preventDefualt();

			const { id, password } = formState;

      await pb.collection("users").authWithPassword(id, password);

      navigate("/");
		};

		// const handleInput = debounce((e) => {
		// 	const { name, value } = e.target
		// 	setFormState({
		// 		...formState,
		// 		[name]: value,
		// 	})
		// }, 400)

    const handleInput = (e) => {
      const {name , value} = e.target;

      let isValid;

      switch (name){
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
      if (isValid){
        setFormState({
          ...formState,
          [name]:value,
        });
      }
    };

  return (
    < >
      <Helmet>
        <title>Sign In - Taing</title>
      </Helmet>
      <header className="bg-black  pl-10 md:pl-20 md:pt-10">
      {/* <header className="bg-black pl-[70px] pt-[15px]"> */}
        <Link to="/">
          <img src="/assets/logo.svg" alt="Taing logo" className="w-[110px]"/>
        </Link>
      </header>
      <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="pt-10 pb-16 text-white login-title container max-w-lg mx-auto">
        <div className="pb-[60px] font-bold text-[35px] flex justify-center">TVING ID 로그인</div>
        <form
          onSubmit={handleSignIn}
          className="flex flex-col gap-2"
          >
            {/*<form
             type="id"
             label="아이디"
             name="userID"
            //  defaultvalue={formState.id}
             onChange={handleInput}
             />
             <form
             type="password"
             label="비밀번호"
             name="password"
            //  defaultValue={formState.password}
             onChange={handleInput}
             />
           */}
           <input type="text" label="아이디" name="id" className="font-light h-14 bg-[#212121] text-gray600 login-form px-4  w-full rounded-sm" 
           onChange={handleInput} placeholder="아이디"/>
          {loginValidation.id && <div style={{color: 'red'}}>올바른 아이디 형식을 입력하세요.</div>}
          
           <label className="relative"><input type={isPasswordHidden? "password" : "text"} 
           label="비밀번호" name="password" 
           onChange={handleInput}
           className="h-14  bg-[#212121] text-gray600 login-form px-4 w-full rounded-sm" placeholder="비밀번호"/>
           <img
              src={isPasswordHidden ? hidePasswordIcon : showPasswordIcon}
              alt="비밀번호 숨김/표시 아이콘"
              onClick={togglePasswordHidden}
              className="cursor-pointer absolute right-6 top-1/2 first-line:transform -translate-y-1/2"/>
              
           </label>
           {loginValidation.password && <div style={{color: 'red'}}>올바른 비밀번호 형식이 아닙니다.</div>}
            <label className="flex text-left text-gray500 text-sm pt-[7px] pb-[10px]">
              <img src={imageSrc} alt="자동 로그인" onClick={handleLoginClick} className="pr-[7px]"/>
             자동로그인</label>
            <button type="submit" className="h-14 bg-[#FF153C] font-bold dark:hover:bg-[#cc1030] text-white login-button w-full rounded-sm">로그인하기</button>
            <span className="text-gray300 text-center pt-[20px] pb-[10px]">
              <Link to="/findid" className="text-gray400 dark:hover:text-zinc-300 pr-[13px]">아이디 찾기   </Link>
             | <Link to="/findpw" className="text-gray400 pl-[10px] dark:hover:text-zinc-300">비밀번호 찾기</Link></span>
        </form>
          <div className="flex justify-center pt-[30px] pl-[60px] pb-[100px] border-slate-600 dark:border-slate-200/30">
            아직 계정이 없으신가요?  
            <Link 
            to="/signup"
            className="dark:text-zinc-500 w-36 text-l dark:hover:text-zinc-300 flex pl-[10px]"> 회원가입</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn