import{j as n,t as i,p as c}from"./index-216c0cc6.js";import"./react-7b82c02c.js";import{m as r}from"./main-45d001df.js";import{u as l}from"./reactRouter-08e27dd4.js";import"./extra-3c07f53d.js";const u="u8Bv",g="PycI",d="oGzw",p="dfCN",j="W47p",m="ZT6J",b="deec",k="OsH0",x="A-iz",h="ljTg",y="nVBT",v="uPS0",C="ZtYr",I="_4B8J",N="_2QTg",B="nu6d",f="GhK9",T="Y-ws",W="Mm4d",L="CTAc",w="jtp9",P="_8TY7",S="GxAf",$="Erde",o={join:u,joinGradient:g,joinContentWrapper:d,joinContent:p,joinSubContent:j,joinButton:m,onlyTaing:b,onlyContentWrapper:k,fun:x,textBig:h,textMedium:y,textSmall:v,onlyFig:C,darkImg:I,videoWrapper:N,videoItem:B,vodImg:f,no1:T,no1Wrapper:W,qna:L,qnaTitle:w,qnaItem:P,question:S,answer:$},q="/react-project-7/assets/naver-login.svg",G="/react-project-7/assets/kakao-login.svg",A="/react-project-7/assets/facebook-login.svg",z="/react-project-7/assets/twitter-login.svg",E="/react-project-7/assets/apple-login.svg",F="/react-project-7/assets/cjone-login.png";function O(){const s=l(),t=()=>{s("/signin")},a=async()=>{try{const e=await c.collection("users").authWithOAuth2({provider:"kakao"})}catch(e){throw new Error(e.message)}};return n.jsx(n.Fragment,{children:n.jsxs("section",{className:o.join,style:{background:`url(${r})`,backgroundSize:"cover"},children:[n.jsx("div",{className:o.joinGradient}),n.jsxs("div",{className:o.joinContentWrapper,children:[n.jsxs("p",{className:o.joinContent,children:["반가워요!",n.jsx("br",{}),"계정을 선택해주세요."]}),n.jsxs("div",{className:"flex flex-col gap-5",children:[n.jsx("button",{type:"button",style:{backgroundImage:`url(${i})`,backgroundPosition:30},onClick:t,className:o.joinButton,children:n.jsx("span",{children:"TVING ID로 시작하기"})}),n.jsx("button",{type:"button",style:{backgroundImage:`url(${q})`,backgroundPosition:30},onClick:t,className:o.joinButton,children:n.jsx("span",{children:"네이버로 시작하기"})}),n.jsx("button",{type:"button",onClick:a,style:{backgroundImage:`url(${G})`,backgroundPosition:30},className:o.joinButton,children:n.jsx("span",{children:"카카오로 시작하기"})}),n.jsx("button",{type:"button",onClick:t,style:{backgroundImage:`url(${A})`,backgroundPosition:30},className:o.joinButton,children:n.jsx("span",{children:"페이스북으로 시작하기"})}),n.jsx("button",{type:"button",onClick:t,style:{backgroundImage:`url(${z})`,backgroundPosition:30},className:o.joinButton,children:n.jsx("span",{children:"트위터로 시작하기"})}),n.jsx("button",{type:"button",style:{backgroundImage:`url(${E})`,backgroundPosition:30},onClick:t,className:o.joinButton,children:n.jsx("span",{children:"Apple로 시작하기"})}),n.jsx("button",{type:"button",style:{backgroundImage:`url(${F})`,backgroundPosition:30,backgroundSize:20},onClick:t,className:`${o.joinButton} h-[10%]`,children:n.jsx("span",{children:"CJone으로 시작하기"})})]})]})]})})}export{O as default};
