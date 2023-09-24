import{c as p,j as e,W as B}from"./index-c33573b8.js";import{r as o}from"./react-7b82c02c.js";import{h as y,s as S,A as v,u as I}from"./unactive-check-104860d8.js";import{u as O}from"./reactRouter-08e27dd4.js";import"./extra-3c07f53d.js";const W="/react-project-7/assets/clear-all.svg",n="/react-project-7/assets/small-gray-check.svg",i="/react-project-7/assets/small-red-check.svg";function re(){const A=O(),P=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/,$=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,V=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;console.log(p);const[q,f]=o.useState(!1),[w,j]=o.useState(!1),H=()=>{w?(f(I),j(!1)):(f(v),j(!0))},[G,b]=o.useState(!1),[l,N]=o.useState(!1),c=()=>{l?(b(i),N(!1)):(b(n),N(!0))},[s,z]=o.useState({username:"",email:"",password:"",passwordConfirm:""}),[a,F]=o.useState({username:!1,email:!1,password:!1,passwordConfirm:!1});o.useState({username:!1,email:!1,password:!1,passwordConfirm:!1});const C=()=>Object.values(a).every(d=>d===!1),[x,R]=o.useState(!0),[g,U]=o.useState(!0),D=async d=>{d.preventDefault();const{password:m,passwordConfirm:r,email:t,...K}=s;if(m!==r){alert("비밀번호가 일치하지 않습니다. 다시 입력하세요.");return}try{const k=await p.collection("users").create({...s,emailVisibility:!0}),h=await p.collection("users").getFirstListItem(`email = "${t}"`);console.log(h);const T={username:s.username,userInfo:[h.id]},Q=await p.collection("profile").create(T),M=await p.collection("profile").getFirstListItem(`username = "${s.username}"`),X=await p.collection("users").update(h.id,{profiles:[M.id]})}catch(k){console.error("회원 가입 중 오류 발생:",k)}A("/signin")},u=d=>{const{name:m,value:r}=d.target;let t;switch(m){case"username":t=P.test(r);break;case"email":t=$.test(r);break;case"password":t=V.test(r);break;case"passwordConfirm":t=s.password===r;break;default:return}F({...a,[m]:!t}),t&&z({...s,[m]:r})},E=((d,m=100)=>{let r;return(...t)=>{clearTimeout(r),r=setTimeout(d.bind(null,...t),m)}})(u,100),L=()=>{R(!x)},Z=()=>{U(!g)};return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:e.jsx("title",{children:"SignUp - Taing"})}),e.jsx("div",{className:"bg-black h-screen z-50",children:e.jsxs("div",{className:"wrapper pt-[70px] text-white login-title leading-10 container w-1/3 mx-auto align-middle",children:[e.jsx("h3",{className:"text-white pb-[30px] font-semibold text-4xl flex justify-center",children:"티빙 회원가입"}),e.jsx("p",{className:"text-gray300 font-bold text-xl text-center pb-10",children:"아이디와 이메일로 간편하게 티빙을 시작하세요!"}),e.jsxs("form",{onSubmit:D,children:[e.jsxs("span",{className:"relative",children:[e.jsx("input",{type:"text",label:"아이디",name:"username",id:"username",defaultValue:s.username,className:"text-white h-16 bg-gray800 placeholder-slate-600 login-form px-4 w-full rounded-sm",placeholder:"아이디",onChange:E}),e.jsx("img",{src:W,alt:"아이디 입력 초기화",className:"hidden absolute top-[5%] right-5 cursor-pointer"})]}),a.username?e.jsx("p",{className:`text-red-500 ${a.username?"border-red-600":""}`,children:"영문 소문자 또는 영문 소문자, 숫자 조합 6~12자리로 입력해주세요"}):e.jsx("p",{className:"text-gray500",children:"영문 소문자 또는 영문 소문자, 숫자 조합 6~12자리"}),e.jsxs("label",{className:"relative",children:[e.jsx("input",{type:x?"password":"text",label:"비밀번호",name:"password",id:"password",defaultValue:s.password,onChange:u,className:` ${a.password?"border-red-500":(!a.password&&s.password!=="","border-slate-300")} text-white h-16 mt-3 bg-gray800 placeholder-slate-600 login-form px-4 w-full rounded-sm`,placeholder:"비밀번호"}),e.jsx("img",{src:x?y:S,alt:"비밀번호 숨김/표시 아이콘",onClick:L,className:"cursor-pointer absolute right-[24px] top-3 first-line:transform -translate-y-1/2"})]}),a.password&&e.jsx("span",{className:"text-red-500 text-base",children:"비밀번호는 영문, 숫자를 포함하여 8~16자로 입력해주세요."}),e.jsxs("label",{className:"relative",children:[e.jsx("input",{type:g?"password":"text",label:"비밀번호 확인",name:"passwordConfirm",id:"passwordConfirm",defaultValue:s.passwordConfirm,placeholder:"비밀번호 확인",onChange:u,className:`${a.passwordConfirm?"border-red-500":!a.passwordConfirm&&s.passwordConfirm!==""?"border-green-600":"border-slate-400"}
									text-white h-16 mt-3 bg-gray800 placeholder-slate-600 login-form px-4 w-full rounded-sm`}),e.jsx("img",{src:g?y:S,alt:"비밀번호 숨김/표시 아이콘",onClick:Z,className:"cursor-pointer absolute right-[24px] top-3 first-line:transform -translate-y-1/2"})]}),a.passwordConfirm?e.jsx("span",{className:"text-red-500 text-base",children:"비밀번호가 일치하지 않습니다. 다시 확인해주세요."}):e.jsxs("span",{className:"text-gray500 text-base",children:["영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리"," "]}),e.jsx("input",{type:"email",label:"이메일",name:"email",id:"email",defaultValue:s.email,className:"text-white h-16 mt-3 bg-gray800 placeholder-slate-600 login-form px-4 w-full rounded-sm",placeholder:"이메일",onChange:u}),a.email&&e.jsx("span",{className:"text-red-500 text-base",children:"올바른 이메일 형식으로 입력해주세요."}),e.jsxs("div",{className:"pt-6 text-gray400",children:[e.jsxs("span",{className:"flex pb-2",children:[e.jsx("img",{src:w?v:I,alt:"자동 로그인",onClick:H,className:"pr-3 cursor-pointer"}),e.jsx("p",{className:"font-bold text-lg",children:"필수 및 선택 항목을 모두 포함하여 동의합니다."})]}),e.jsxs("span",{className:"flex",children:[e.jsx("img",{src:l?i:n,alt:"약관동의 체크",onClick:c,className:"right-1/5 pr-3 cursor-pointer"}),e.jsx("p",{children:"만 14세 이상입니다."})]}),e.jsxs("span",{className:"flex",children:[e.jsx("img",{src:l?i:n,alt:"약관동의 체크",onClick:c,className:"right-1/5 pr-3 cursor-pointer"}),e.jsx("p",{children:"[필수] 서비스 이용약관 동의"})]}),e.jsxs("span",{className:"flex",children:[e.jsx("img",{src:l?i:n,alt:"약관동의 체크",onClick:c,className:"right-1/5 pr-3 cursor-pointer"}),e.jsx("p",{children:"[필수] 개인정보 수집 및 이용 동의"})]}),e.jsxs("p",{className:"flex",children:[e.jsx("img",{src:l?i:n,alt:"약관동의 체크",onClick:c,className:"right-1/5 pr-3 cursor-pointer"}),"[선택] 개인정보 수집 및 이용 동의"]}),e.jsxs("p",{className:"flex",children:[e.jsx("img",{src:l?i:n,alt:"마케팅 정보 수신 동의",onClick:c,className:"right-1/5 pr-3 cursor-pointer"}),"[선택] 마케팅 정보 수신 동의"]}),e.jsxs("span",{className:"flex pl-8 pr-3 pb-3",children:[e.jsxs("span",{className:"flex pr-5",children:[e.jsx("img",{src:l?i:n,alt:"푸시알림 수신 동의",onClick:c,className:"right-1/5 pr-[7px] cursor-pointer"}),"푸시 알림"]})," ",e.jsxs("span",{className:"flex pr-5",children:[e.jsx("img",{src:l?i:n,alt:"이메일 수신 동의",onClick:c,className:"right-1/5 pr-[7px] cursor-pointer"}),"이메일"]})," ",e.jsxs("span",{className:"flex",children:[e.jsx("img",{src:l?i:n,alt:"SMS 수신 동의",onClick:c,className:"right-1/5 pr-[7px] cursor-pointer"}),"SMS"]})]})]}),e.jsx("button",{type:"submit",disabled:!C(),className:`h-16 bg-gray700 font-bold text-white login-button w-full rounded-sm"
						${C()?"bg-gray700 dark:hover:bg-[#cc1030] cursor-pointer":"bg-gray700 cursor-not-allowd"}`,children:"가입하기"})]})]})})]})}export{re as default};
