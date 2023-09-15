import{j as e,W as L,p as l}from"./index-98e0b301.js";import{r as o}from"./react-7b82c02c.js";import{d as z,L as r}from"./reactRouter-7cbd2f1e.js";import{h as A,s as P,A as g,u as h}from"./red-check-178813c9.js";import"prop-types";import"./extra-3c07f53d.js";function E(){const f=z(),[T,c]=o.useState(!1),[x,p]=o.useState(!1),[i,b]=o.useState(!0);o.useState(!0);const w=async n=>{n.preventDefault();const{id:s,password:t}=m;await l.collection("users").authWithPassword(s,t),f("/"),console.log("pb.authStore.id=",l.authStore.model.id),console.log("pb.authStore.email=",l.authStore.model.email),console.log("pb.authStore.password=",l.authStore.model.password),console.log("pb.auStore.token=",l.authStore.token),console.log("pb.auStore.userID(username)=",l.authStore.model.username)},j=/^.{6,15}$/,S=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,[m,N]=o.useState({id:"",password:""}),[d,v]=o.useState({id:!1,password:!1}),k=()=>{b(!i)},y=()=>{x?(c(h),p(!1)):(c(g),p(!0))},I=(n,s=300)=>{let t;return(...a)=>{clearTimeout(t),t=setTimeout(n.bind(null,...a),s)}},u=n=>{const{name:s,value:t}=n.target;let a;switch(s){case"id":a=j.test(t);break;case"password":a=S.test(t);break;default:return}v({...d,[s]:!a}),a&&N({...m,[s]:t})},C=I(u,500);return e.jsxs(e.Fragment,{children:[e.jsx(L,{children:e.jsx("title",{children:"Sign In - Taing"})}),e.jsx(r,{to:"/",children:e.jsx("img",{src:"/assets/logo.svg",alt:"Taing logo",className:"w-[110px] pt=[10px]"})}),e.jsx("div",{className:"contentWrapper w-full",children:e.jsx("div",{className:"bg-black min-h-screen flex items-center justify-center",children:e.jsxs("div",{className:"pt-10 pb-16 text-white login-title container w-1/3 mx-auto",children:[e.jsx("div",{className:"pb-[60px] font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center",children:"TVING ID 로그인"}),e.jsxs("form",{onSubmit:w,className:"flex flex-col gap-2",children:[e.jsx("input",{type:"text",label:"아이디",name:"id",className:`font-light h-14 bg-[#212121] text-gray600 login-form px-4 w-full rounded-sm
                        `,onChange:u,placeholder:"아이디"}),d.id&&e.jsx("div",{style:{color:"red"},children:"올바른 아이디 형식을 입력하세요."}),e.jsxs("label",{className:"relative",children:[e.jsx("input",{type:i?"password":"text",label:"비밀번호",name:"password",onChange:C,className:"h-14  bg-[#212121] text-gray600 login-form px-4 w-full rounded-sm",placeholder:"비밀번호"}),e.jsx("img",{src:i?A:P,alt:"비밀번호 숨김/표시 아이콘",onClick:k,className:"cursor-pointer absolute right-6 top-1/2 first-line:transform -translate-y-1/2"})]}),d.password&&e.jsx("div",{style:{color:"red"},children:"올바른 비밀번호 형식이 아닙니다."}),e.jsxs("label",{className:"flex text-left text-gray500 text-sm pt-[7px] pb-[10px]",children:[e.jsx("img",{src:x?g:h,alt:"자동 로그인",onClick:y,className:"pr-[7px]"}),"자동로그인"]}),e.jsx("button",{type:"submit",className:"h-14 bg-[#FF153C] font-bold dark:hover:bg-[#cc1030] text-white login-button w-full rounded-sm",children:"로그인하기"}),e.jsxs("span",{className:"text-gray300 text-center pt-[20px] pb-[10px] md:text-xs lg:text-base xl:text-md 2xl:text-lg",children:[e.jsxs(r,{to:"/findid",className:"text-gray400 dark:hover:text-zinc-300 pr-[13px]",children:["아이디 찾기"," "]}),"|"," ",e.jsx(r,{to:"/findpw",className:"text-gray400 pl-[10px] dark:hover:text-zinc-300",children:"비밀번호 찾기"})]})]}),e.jsxs("div",{className:`flex justify-center pt-[30px] pl-[60px] pb-[100px] border-slate-600 dark:border-slate-200/30
             sm:text-xs md:text-base lg:text-base xl:text-md 2xl:text-lg
             `,children:["아직 계정이 없으신가요?",e.jsx(r,{to:"/signup",className:"dark:text-zinc-500 w-36 text-l dark:hover:text-zinc-300 flex pl-[10px]",children:"회원가입"})]})]})})})]})}export{E as default};
