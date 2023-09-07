
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import S from './../styles/Signin.css';

function SignIn() {
  
  // const [showPswd, setShowPswd] = useState<boolean>(false);
  const [formState, setFormState] = useState({
    id: '',
    password: '',
  });


  const debounce = (callback, timeout = 300)=>{
    let cleanup;
    return (...args)=>{
      clearTimeout(cleanup);
      cleanup=setTimeout(callback.bind(null, ...args), timeout);
    }
  }
  const handleSignIn = async (e) => {
    e.preventDefualt();

    const { id, password } = formState;
  }

  const handleInput = debounce((e) => {
    const {name, value} = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }, 400);

  
  return (
    < >
      <Helmet>
        <title>Sign In - Taing</title>
      </Helmet>
      <header className="bg-black pl-[70px] pt-[15px]">
        <Link to="/"><img src="\images\header-logo.svg" alt="Taing logo"/></Link>
      </header>
      <div className="bg-black h-screen">
      <div className="pt-[70px] text-white login-title leading-10 container max-w-lg mx-auto align-middle">
        <div className="pb-[60px] font-bold text-2xl flex justify-center">TVING ID 로그인</div>
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
           <input type="id" label="아이디" name="userID" className="h-14 bg-gray700 text-gray600 login-form px-4  w-full rounded-sm" placeholder="아이디"/>
           <input type="password" label="비밀번호" name="password" 
           className="h-14  bg-gray700 text-gray600 login-form px-4 w-full rounded-sm" placeholder="비밀번호"/>
           <label className="flex text-left text-gray500 text-sm"><input type="checkbox" name="자동로그인" className="pr-[10px]"/>
             자동로그인</label>
            <button type="submit" className="h-14 bg-primary text-white login-button w-full rounded-sm ">로그인하기</button>
            <span className="text-gray300 text-center pt-[20px] pb-[10px]"><Link to="/findid" className="text-gray400 dark:hover:text-zinc-300 pr-[13px]">아이디 찾기  </Link>
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