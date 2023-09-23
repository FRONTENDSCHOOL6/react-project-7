import { useState } from "react";
import S from "./OnBoarding.module.css";
import arrowUp from "/assets/arrow-up.svg";
import arrowDown from "/assets/arrow-down.svg";

function QnA() {
	const [activeIndex, setActiveIndex] = useState(null);

	const qnaList = [
		{
			question: "[기타] 티빙 고객센터 카카오 챗봇 및 실시간 채팅 상담 이용하기",
			answer: (
				<>
					새롭게 바뀐 '타잉 카카오 챗봇'에서 궁금한 점을 빠르게 해결해 보세요.
					<br />
					더욱 자세한 내용이 궁금하시다면 상담사 연결을 통해 '실시간 채팅
					상담'도 가능합니다.
					<br />
					<br />
					<strong>■ 타잉 카카오 챗봇 이용 안내</strong>
					<br />
					① 카카오톡에서 'TAING' 검색 후 채널 추가
					<br />
					② 타잉 카카오 챗봇에서 궁금한 내용 선택하여 손쉽게 이용
				</>
			),
		},
		{
			question: "[결제] 영화 VOD를 개별구매 할 수 없나요?",
			answer: (
				<>
					2023년 9월 6일 영화 개별구매 서비스가 종료되었습니다.
					<br />
					기존에 구매하신 개별구매 영화는 시청내역 또는 구매내역 메뉴에서
					이용기간 만료일까지 시청하실 수 있습니다.
					<br />
					<br />* 티빙의 방송/영화 콘텐츠는 이용권 구매 후 스트리밍 시청
					가능합니다.
				</>
			),
		},
		{
			question: "[결제] 보유한 타잉캐시는 어떻게 사용하나요?",
			answer: (
				<>
					2023년 9월 6일 영화 VOD 개별구매 서비스가 종료되었습니다. 2022년 3월
					31일 타잉캐시 충전 서비스 종료 이전 충전하여 계정 내 보유하고 계신
					타잉캐시는
					<br />
					[1:1 게시판 문의] 또는 [taing@cj.net]로 환불 접수해주시면 빠르게
					도움드리겠습니다.
				</>
			),
		},
		{
			question: "[결제] 기존에 구매한 개별구매 영화는 시청할 수 없나요?",
			answer: (
				<>
					2023년 9월 6일 영화 VOD 개별구매 서비스가 종료되었습니다.
					<br />
					<br />
					종료일 이전 개별구매로 구매한 영화 VOD는 이용기간 만료일까지 아래의
					메뉴에서 시청이 가능합니다.
					<br />
					<br />
					■ 개별구매 영화 시청 경로
					<br />- PC : 티빙 로그인 &gt; 우측 상단 프로필 아이콘 &gt; MY &gt;
					시청내역 or 구매내역 메뉴의 영화 탭에서 시청 가능
					<br />- 모바일 APP : 티빙 로그인 &gt; 기록 &gt; 시청내역 or 구매내역
					메뉴에서 시청 가능
					<br />
					<br />* 단, 개별구매 후 이용기간이 만료된 콘텐츠인 경우 더이상
					시청하실 수 없습니다.
				</>
			),
		},
		{
			question: "[회원] 타잉 회원가입 방법이 궁금해요.",
			answer: (
				<>
					TAING 회원가입은 TAING 계정, SNS 연동 계정, CJ ONE 통합 계정으로
					가입이 가능합니다.
					<br />* SNS 연동 계정 종류 : Facebook, Twitter, Naver, Kakao, Apple
					<br />
					<br />
					■ 회원가입 방법 1 - PC(WEB)
					<br />
					① 티빙 WEB 접속
					<br />
					② [티빙 시작하기] 클릭
					<br />
					③ 가입할 계정 유형 선택 (TVING, SNS, CJ ONE 중 유형 선택)
					<br />
					④ 회원가입하기
					<br />
					<br />
					2) MOBILE (APP)
					<br />
					① 티빙 APP 접속
					<br />
					② [티빙 시작하기] 클릭
					<br />
					③ 가입할 계정 유형 선택 (TVING, SNS, CJ ONE 중 유형 선택)
					<br />
					④ 회원가입하기
				</>
			),
		},
		{
			question: "[회원] 타잉 로그인 방법이 궁금해요.",
			answer: (
				<>
					TAING WEB과 APP은 아래와 같은 방법으로 로그인이 가능합니다.
					<br />
					■ TAING 로그인 방법
					<br />
					1) 타잉 WEB/APP 접속
					<br />
					2) '타잉 시작하기' 버튼 클릭
					<br />
					3) 계정 선택 화면에서 회원가입하신 계정 유형 선택
					<br />
					4) 아이디, 비밀번호 입력 후 '로그인하기' 버튼 클릭
					<br />
					<br />
					혹시 일치하는 회원정보가 없다는 알림 메시지가 나온다면 아래 사항을
					확인하여주세요.
					<br />
					<br />
					■ TAING 로그인 안될 시 조치 방법
					<br />
					1) WEB 브라우저 또는 APP 좌측 상단의 '뒤로가기'를 클릭하여 계정 유형
					선택 화면으로 이동
					<br />- CJ ONE 통합회원이신 경우 'CJ ONE으로 시작하기' 선택 (제일 밑에
					위치)
					<br />- TAING ID로 가입하신 경우 'TAING ID로 시작하기' 선택
					<br />- 네이버, 카카오 등 SNS 계정으로 가입하신 경우 '각 SNS로
					시작하기' 선택
					<br />
					3) 아이디, 비밀번호 입력 후 '로그인하기' 버튼 클릭하여 로그인
					<br />
					<br />* 'TAING ID'로 로그인 시도하셨는데 일치하는 회원정보가 없다면
					먼저 'CJ ONE으로 시작하기'를 선택하여 확인을 부탁드립니다.
					<br />* 아이디가 이메일 형태의 계정인데 'TAING ID'로 로그인이 안되시는
					경우 SNS 연동 회원일 수 있으며, 네이버, 카카오 등 '각 SNS로
					시작하기'를 선택하여 확인을 부탁드립니다.
					<br />* 계정 유형을 맞게 선택하신 경우 '아이디 찾기', '비밀번호
					찾기'를 진행해주세요.
					<br />
					<br />
					지속해서 로그인이 되지 않으시는 경우 1:1 게시판 문의 또는 taing@cj.net
					으로 문의해주시면
					<br />
					신속하게 가입하신 계정 확인하여 답변드리겠습니다.
				</>
			),
		},
		{
			question: "[로그인] 자동 로그아웃이 되었는데 제 계정을 모르겠어요.",
			answer: (
				<>
					APP과 PC WEB 계정 선택 화면에서 최근에 마지막으로 로그인하신 계정을
					확인하실 수 있습니다.
					<br />
					최근 로그인하신 계정을 선택하여주시고, 혹시라도 일치하는 회원정보가
					없다는 알림 메시지가 나온다면 아래 사항을 확인해주세요.
					<br />
					<br />
					■ TAING 계정 확인 방법
					<br />
					1) 계정 선택 화면 가장 하단 '아이디 찾기' 클릭
					<br />
					2) 본인인증으로 찾기 &gt; 본인인증하기
					<br />
					3) 가입한 계정 ID들 안내
					<br />
					4) 계정 ID 옆(유료)로 표기된 계정으로 로그인
					<br />
					<br />
					※ 이메일로 찾기 시 확인되지 않으니, 반드시 본인인증으로 찾기로 이용
					계정 확인해주세요.
					<br />
					※ SNS 회원은 해당 SNS 아이디가 아닌 타잉 가입 시 등록한 이메일을
					알려드립니다.
					<br />
					※ 본인인증이 완료된 계정만 확인이 가능합니다.
					<br />
					※ 네이버플러스멤버십 이용권 계정은 본인인증찾기로 확인되지 않습니다.
					<br />
					<br />
					지속해서 로그인이 되지 않으시는 경우, 1:1 게시판 문의 또는
					taing@cj.net 으로 문의해주시면
					<br />
					신속하게 가입하신 계정 확인하여 답변드리겠습니다.
				</>
			),
		},
		{
			question: "[로그인] 이용권이 있는 계정이 무엇인지 찾고싶어요.",
			answer: (
				<>
					유료 가입한 계정을 찾고 싶을때,
					<br />
					아래 방법으로 계정을 찾으신 후 계정 유형을 선택하여 로그인해주시기
					바랍니다.
					<br />
					<br />
					■ 이용계정 확인 방법
					<br />
					① 타잉 WEB/APP 접속
					<br />
					② [타잉 시작하기] 버튼 클릭
					<br />
					③ 가장 하단 [아이디 찾기] 클릭
					<br />
					④ 본인인증으로 찾기 → [본인인증하기] 클릭
					<br />
					⑤ 가입한 계정 ID들 안내
					<br />
					⑥ 계정 ID 옆 (유료)로 표기된 계정으로 로그인
					<br />
					<br />
					※ 이메일로 찾기 시 확인되지 않으니, 반드시 본인인증으로 찾기로 이용
					계정 확인해주세요.
					<br />
					※ SNS 회원은 해당 SNS 아이디가 아닌 타잉 가입 시 등록한 이메일을
					알려드립니다.
					<br />
					※ 네이버플러스멤버십 이용권 계정은 본인인증찾기로 확인되지 않습니다.
					<br />
					보다 자세한 확인이 필요한 경우, [1:1 게시판 문의] 또는
					[taing@cj.net]으로 문의해주시면 가입하신 계정 확인하여
					답변드리겠습니다.
				</>
			),
		},
		{
			question:
				"[로그인] 로그인이 안될 때 고객문의를 남길 수 있는 방법이 있나요?",
			answer: (
				<>
					로그인이 되지 않으시는 경우 아래 타잉 대표메일로 이메일 문의를
					남겨주시면 확인 후 답변드리겠습니다.
					<br />- 타잉 대표메일 : taing@cj.net
					<br />
					<br />
					문의 내용에 발생 증상 외 기기 모델명, OS 버전, 브라우저, 네트워크 등
					상세 정보를 남겨주시면 더욱 빠른 조치가 가능하오니 이용에 참고
					부탁드립니다.
				</>
			),
		},
		{
			question: "[인증] 성인인증은 어떻게 하나요?",
			answer: (
				<>
					만 19세 이상 시청 가능한 콘텐츠는 시청하시려는 프로필의 성인인증이
					되어야만 시청 가능합니다.
					<br />
					성인 인증은 아래와 같이 진행 가능합니다.
					<br />
					<br />
					■ 성인인증 방법 안내
					<br />
					1) PC (WEB)
					<br />
					① 티빙 WEB 로그인
					<br />
					② 만 19세 이상 등급 콘텐츠 접근
					<br />
					③ [휴대폰 본인 인증] 또는 [I-PIN 본인 인증]으로 성인인증 진행
					<br />
					<br />
					2) MOBILE (APP)
					<br />
					① 티빙 APP 로그인
					<br />
					② 우측 상단 [프로필 아이콘] 클릭
					<br />
					③ 우측 상단 [톱니바퀴 아이콘] 클릭
					<br />
					④ [프로필 성인인증] 메뉴 클릭
					<br />
					⑤ [휴대폰 본인 인증]으로 성인인증 진행
					<br />
					<br />
					성인인증은 인증 후 1년간 유효하며 해마다 갱신하셔야만 그 권한이
					유지되며,
					<br />
					인증 유효기간은 앱 설정 → [프로필 성인인증] 메뉴에서 확인하실 수
					있습니다.
					<br />
					<br />* 성인인증 메뉴가 보이지 않으실 경우 앱을 최신 버전으로 업데이트
					해주시기 바랍니다.
					<br />* 성인인증은 계정별 인증이 아닌 프로필별 인증이 필요합니다.
				</>
			),
		},
	];

	const handleToggle = (index) => {
		if (activeIndex === index) {
			setActiveIndex(null);
		} else {
			setActiveIndex(index);
		}
	};

	const renderAnswer = (content) => {
		return <div className={S.answer}>{content}</div>;
	};

	const renderQuestionItem = (index, question, answerContent) => {
		const isActive = activeIndex === index;
		const questionClassName = `${S.question} ${
			isActive ? "text-white font-semibold" : ""
		}`;

		return (
			<li className={S.qnaItem} key={index}>
				<input type="checkbox" className="hidden" id={`qna-${index}`} />
				<label
					htmlFor={`qna-${index}`}
					onClick={() => handleToggle(index)}
					className={questionClassName}
				>
					{question}
					<em>
						{isActive ? (
							<img src={arrowUp} alt="답변 닫기" />
						) : (
							<img src={arrowDown} alt="답변 열기" />
						)}
					</em>
				</label>
				{isActive && renderAnswer(answerContent)}
			</li>
		);
	};

	return (
		<section className={S.qna}>
			<h3 className={S.qnaTitle}>자주 찾는 질문</h3>
			<ul className="flex flex-col">
				{qnaList.map((item, index) =>
					renderQuestionItem(index, item.question, item.answer)
				)}
			</ul>
		</section>
	);
}

export default QnA;
