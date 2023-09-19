import{c as r}from"./extra-3c07f53d.js";import{p as s}from"./index-d6e6559a.js";const o={isAuth:!1,user:null,token:""},h=r(e=>({authState:o,signIn:async(u,n)=>{try{const t=await s.collection("users").authWithPassword(u,n),a=!!t;return console.log(t),console.log(a),e({authState:{isAuth:a,user:a?t.record:null,token:a?t.token:""}}),t}catch(t){return console.error("Error during authentication:",t),e({authState:{isAuth:!1,user:null,token:""}}),{isAuth:!1,user:null,token:""}}},signOut:async()=>(e({authState:{isAuth:!1,user:null,token:""}}),await s.authStore.clear()),cancelMembership:async u=>(e({authState:{isAuth:!1,user:null,token:""}}),await s.collection("users").delete(u))}));//! 로컬스토리지에 저장된 사용자 정보와 동기화(인증상태 유지)
//! 사용자 인증상태 변경시
//! 로그아웃 로직
export{h as u};
