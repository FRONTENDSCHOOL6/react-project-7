import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import S from "./OnBoarding.module.css";
import { useState } from "react";
import "swiper/css";
import { LoopSlide } from "./LoopSlide";
import mainImg from "/assets/main.webp";
import hotel from "/assets/hotel.webp";
import afterschool from "/assets/after-school.webp";
import dessert from "/assets/dessert.webp";
import mobile from "/assets/mobile.mp4";
import quickVod from "/assets/quick-vod.png";
import devices from "/assets/devices.mp4";
import tvingLogoBig from "/assets/no1-tving.svg";
import arrowUp from "/assets/arrow-up.svg";
import arrowDown from "/assets/arrow-down.svg";

export default function OnBoarding() {
	//@ 버튼 클릭 시 로그인 페이지로 이동
	const navigate = useNavigate();
	const navigateToLogin = () => {
		navigate("/signin");
	};

	//@ 자주찾는질문 accordion 함수와 변수
	const [activeIndex, setActiveIndex] = useState(null);
	const handleToggle = (index) => {
		if (activeIndex === index) {
			// 이미 열려있는 아코디언을 클릭한 경우 닫음
			setActiveIndex(null);
		} else {
			// 새로운 아코디언을 클릭한 경우 해당 인덱스로 설정하고 열림
			setActiveIndex(index);
		}
	};

	return (
		<>
			<Helmet>
				<title>TAING</title>
				<meta
					name="description"
					content="멋쟁이 사자처럼 6기 7조의 파이널 프로젝트 - 티빙 클론코딩 타잉 랜딩페이지"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="타잉 랜딩페이지" />
				<meta property="og:description" content="프로젝트 타잉 랜딩페이지" />
				<meta property="og:image" content="@/assets/metaImgOnBoarding.png" />
				<meta
					property="og:url"
					content="http://localhost:5173/react-project-7/#/onboarding"
				/>
			</Helmet>
			{/* 재미를 플레이해보세요 */}
			<section
				className={S.join}
				style={{
					background: `url(${mainImg})`,
					backgroundSize: "cover",
				}}
			>
				<div className={S.joinGradient}></div>
				<div className={S.joinContentWrapper}>
					<p className={S.joinContent}>
						타잉 오리지널 콘텐츠,
						<br></br>
						방송, 영화, 해외시리즈까지!
						<br></br>
						재미를 플레이해보세요.
					</p>
					<span className={S.joinSubContent}>
						간편하게 가입하고, 원하실 때 해지할 수 있어요.
					</span>
					<button
						type="button"
						onClick={navigateToLogin}
						className={S.joinButton}
					>
						지금 바로, 타잉을 플레이 하세요!
					</button>
				</div>
			</section>
			{/* 티빙에만 있는 재미 */}
			<section className={S.onlyTaing}>
				<div className={S.onlyContentWrapper}>
					<p className={S.textBig}>타잉에만 있는 재미</p>
					<p className={S.textMedium}>오리지널 콘텐츠를 만나보세요!</p>
					<span className={S.textSmall}>차별화된 웰메이드 오리지널 콘텐츠</span>
				</div>
				{/* //? 추후 랜덤으로 이미지가 나타날 수 있는 로직 필요 */}
				<div className={S.onlyFig}>
					<figure className={`${S.darkImg} left-[7%]`}>
						<img src={hotel} alt="" />
						<figcaption></figcaption>
					</figure>
					<figure className="w-1/2 z-10">
						<img src={afterschool} alt="" />
						<figcaption></figcaption>
					</figure>
					<figure className={`${S.darkImg} right-[7%]`}>
						<img src={dessert} alt="" />
						<figcaption></figcaption>
					</figure>
				</div>
			</section>
			{/* 내가 찾던 재미 */}
			<section className={S.fun}>
				<div className={S.onlyContentWrapper}>
					<p className={S.textBig}>내가 찾던 재미</p>
					<p className={S.textMedium}>보고 싶은 콘텐츠를 발견하세요!</p>
					<span className={S.textSmall}>
						최신, 인기 TV프로그램, 영화, 해외시리즈, 파라마운트+ 오리지널 및
						독점
					</span>
				</div>
				<div className="w-full">
					<LoopSlide />
				</div>
			</section>
			{/* 유튜브 섹션 */}
			<section className="bg-black w-full">
				<div className={S.videoWrapper}>
					<iframe
						className={S.videoItem}
						src={`https://www.youtube-nocookie.com/embed/Lr8lSxMlp9Q`}
					/>
				</div>
			</section>
			{/* 똑똑하게 보는 재미 */}
			<section className={S.onlyTaing}>
				<div className={S.onlyContentWrapper}>
					<p className={S.textBig}>똑똑하게 보는 재미</p>
					<p className={S.textMedium}>
						최신 방송을 가장 빠르고 간편하게 시청하세요!
					</p>
					<span className={S.textSmall}>
						실시간TV, 퀵VOD, 타임머신 기능으로 기다리지 말고 편하게 시청
					</span>
				</div>
				<div className="relative w-full">
					<video autoPlay loop muted className="mx-auto h-auto w-[30%]">
						<source src={mobile}></source>
					</video>
					<div className={S.vodImg}>
						<img src={quickVod} alt="" />
					</div>
				</div>
			</section>
			{/* 함께 즐기는 재미 */}
			<section className={S.onlyTaing}>
				<div className={S.onlyContentWrapper}>
					<p className={S.textBig}>함께 즐기는 재미</p>
					<p className={S.textMedium}>다양한 기기로 즐겨보세요!</p>
					<span className={S.textSmall}>
						스마트폰, 태블릿, PC, TV, 크롬캐스트에서 시청
						<br />
						최대 4명의 지인들과 함께 구독
					</span>
				</div>
				<div>
					<video autoPlay loop muted className="mx-auto h-auto w-[60%]">
						<source src={devices}></source>
					</video>
				</div>
			</section>
			{/* 지금 시작해보세요 */}
			<section className={S.num}>
				<div className={S.numWrapper}>
					<img className="inline-block w-[50%]" src={tvingLogoBig} alt="" />
					<p className={`${S.joinContent} px-20 max-sm:px-12`}>
						지금 시작해보세요
					</p>
					<button
						type="button"
						onClick={navigateToLogin}
						className={S.numButton}
					>
						지금 바로, 타잉을 플레이 하세요!
					</button>
				</div>
			</section>
			{/* 자주 찾는 질문 */}
			<section className={S.qna}>
				<h3 className={S.qnaTitle}>자주 찾는 질문</h3>
				{/* //! 추후 map을 이용하여 배열 순환 로직 필수 */}
				<ul className="flex flex-col">
					<li className={S.qnaItem}>
						<input type="checkbox" className="hidden" id="chat" />
						<label
							htmlFor="chat"
							onClick={() => handleToggle(0)}
							className={`${S.question} ${
								activeIndex === 0 ? "text-white font-semibold" : ""
							}`}
						>
							[기타] 티빙 고객센터 카카오 챗봇 및 실시간 채팅 상담 이용하기
							<em>
								{activeIndex === 0 ? (
									<img src={arrowUp} alt="답변 닫기" />
								) : (
									<img src={arrowDown} alt="답변 열기" />
								)}
							</em>
						</label>
						{activeIndex === 0 && (
							<div className={S.answer}>
								<p>
									새롭게 바뀐 '타잉 카카오 챗봇'에서 궁금한 점을 빠르게 해결해
									보세요.
									<br />
									더욱 자세한 내용이 궁금하시다면 상담사 연결을 통해 '실시간
									채팅 상담'도 가능합니다.
									<br />
									<br />
									<strong>■ 타잉 카카오 챗봇 이용 안내</strong>
									<br />
									① 카카오톡에서 'TAING' 검색 후 채널 추가
									<br />
									② 타잉 카카오 챗봇에서 궁금한 내용 선택하여 손쉽게 이용
									<br />
									<br />
									<strong>■ 타잉 실시간 채팅 상담 이용 안내</strong>
									<br />
									① 타잉 카카오 챗봇 문항에서 [상담사 연결] 선택
									<br />
									② 상담사에게 궁금한 내용 직접 문의하여 상담 진행
									<br />
									<br />* 타잉 실시간 채팅 상담은 평일 09:00 ~ 17:00에 이용
									가능합니다.
								</p>
							</div>
						)}
					</li>
					<li className={S.qnaItem}>
						<input type="checkbox" className="hidden" id="purchase" />
						<label
							htmlFor="purchase"
							onClick={() => handleToggle(1)}
							className={`${S.question} ${
								activeIndex === 1 ? "text-white font-semibold" : ""
							}`}
						>
							[결제] 영화 VOD를 개별구매 할 수 없나요?
							<em>
								{activeIndex === 1 ? (
									<img src={arrowUp} alt="답변 닫기" />
								) : (
									<img src={arrowDown} alt="답변 열기" />
								)}
							</em>
						</label>
						{activeIndex === 1 && (
							<div className={S.answer}>
								<p>
									2023년 9월 6일 영화 개별구매 서비스가 종료되었습니다.
									<br />
									기존에 구매하신 개별구매 영화는 시청내역 또는 구매내역
									메뉴에서 이용기간 만료일까지 시청하실 수 있습니다.
									<br />
									<br />* 티빙의 방송/영화 콘텐츠는 이용권 구매 후 스트리밍 시청
									가능합니다.
								</p>
							</div>
						)}
					</li>
					<li className={S.qnaItem}>
						<input type="checkbox" className="hidden" id="taingCash" />
						<label
							htmlFor="taingCash"
							onClick={() => handleToggle(2)}
							className={`${S.question} ${
								activeIndex === 2 ? "text-white font-semibold" : ""
							}`}
						>
							[결제] 보유한 타잉캐시는 어떻게 사용하나요?
							<em>
								{activeIndex === 2 ? (
									<img src={arrowUp} alt="답변 닫기" />
								) : (
									<img src={arrowDown} alt="답변 열기" />
								)}
							</em>
						</label>
						{activeIndex === 2 && (
							<div className={S.answer}>
								<p>
									2023년 9월 6일 영화 VOD 개별구매 서비스가 종료되었습니다.
									2022년 3월 31일 타잉캐시 충전 서비스 종료 이전 충전하여 계정
									내 보유하고 계신 타잉캐시는
									<br />
									[1:1 게시판 문의] 또는 [taing@cj.net]로 환불 접수해주시면
									빠르게 도움드리겠습니다.
								</p>
							</div>
						)}
					</li>
					<li className={S.qnaItem}>
						<input type="checkbox" className="hidden" id="purchased" />
						<label
							htmlFor="purchased"
							onClick={() => handleToggle(3)}
							className={`${S.question} ${
								activeIndex === 3 ? "text-white font-semibold" : ""
							}`}
						>
							[결제] 기존에 구매한 개별구매 영화는 시청할 수 없나요?
							<em>
								{activeIndex === 3 ? (
									<img src={arrowUp} alt="답변 닫기" />
								) : (
									<img src={arrowDown} alt="답변 열기" />
								)}
							</em>
						</label>
						{activeIndex === 3 && (
							<div className={S.answer}>
								<p>
									2023년 9월 6일 영화 VOD 개별구매 서비스가 종료되었습니다.
									<br />
									<br />
									종료일 이전 개별구매로 구매한 영화 VOD는 이용기간 만료일까지
									아래의 메뉴에서 시청이 가능합니다.
									<br />
									<br />
									■ 개별구매 영화 시청 경로
									<br />- PC : 티빙 로그인 &gt; 우측 상단 프로필 아이콘 &gt; MY
									&gt; 시청내역 or 구매내역 메뉴의 영화 탭에서 시청 가능
									<br />- 모바일 APP : 티빙 로그인 &gt; 기록 &gt; 시청내역 or
									구매내역 메뉴에서 시청 가능
									<br />
									<br />* 단, 개별구매 후 이용기간이 만료된 콘텐츠인 경우 더이상
									시청하실 수 없습니다.
								</p>
							</div>
						)}
					</li>
					<li className={S.qnaItem}>
						<input type="checkbox" className="hidden" id="signUp" />
						<label
							htmlFor="signUp"
							onClick={() => handleToggle(4)}
							className={`${S.question} ${
								activeIndex === 4 ? "text-white font-semibold" : ""
							}`}
						>
							[회원] 타잉 회원가입 방법이 궁금해요.
							<em>
								{activeIndex === 4 ? (
									<img src={arrowUp} alt="답변 닫기" />
								) : (
									<img src={arrowDown} alt="답변 열기" />
								)}
							</em>
						</label>
						{activeIndex === 4 && (
							<div className={S.answer}>
								<p>
									TAING 회원가입은 TAING 계정, SNS 연동 계정, CJ ONE 통합
									계정으로 가입이 가능합니다.
									<br />* SNS 연동 계정 종류 : Facebook, Twitter, Naver, Kakao,
									Apple
									<br />
									<br />
									■ 회원가입 방법 1) PC(WEB)
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
								</p>
							</div>
						)}
					</li>
					<li className={S.qnaItem}>
						<input type="checkbox" className="hidden" id="signIn" />
						<label
							htmlFor="signIn"
							onClick={() => handleToggle(5)}
							className={`${S.question} ${
								activeIndex === 5 ? "text-white font-semibold" : ""
							}`}
						>
							[회원] 타잉 로그인 방법이 궁금해요.
							<em>
								{activeIndex === 5 ? (
									<img src={arrowUp} alt="답변 닫기" />
								) : (
									<img src={arrowDown} alt="답변 열기" />
								)}
							</em>
						</label>
						{activeIndex === 5 && (
							<div className={S.answer}>
								<p>
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
									혹시 일치하는 회원정보가 없다는 알림 메시지가 나온다면 아래
									사항을 확인하여주세요.
									<br />
									<br />
									■ TAING 로그인 안될 시 조치 방법
									<br />
									1) WEB 브라우저 또는 APP 좌측 상단의 '뒤로가기'를 클릭하여
									계정 유형 선택 화면으로 이동
									<br />- CJ ONE 통합회원이신 경우 'CJ ONE으로 시작하기' 선택
									(제일 밑에 위치)
									<br />- TAING ID로 가입하신 경우 'TAING ID로 시작하기' 선택
									<br />- 네이버, 카카오 등 SNS 계정으로 가입하신 경우 '각 SNS로
									시작하기' 선택
									<br />
									3) 아이디, 비밀번호 입력 후 '로그인하기' 버튼 클릭하여 로그인
									<br />
									<br />* 'TAING ID'로 로그인 시도하셨는데 일치하는 회원정보가
									없다면 먼저 'CJ ONE으로 시작하기'를 선택하여 확인을
									부탁드립니다.
									<br />* 아이디가 이메일 형태의 계정인데 'TAING ID'로 로그인이
									안되시는 경우 SNS 연동 회원일 수 있으며, 네이버, 카카오 등 '각
									SNS로 시작하기'를 선택하여 확인을 부탁드립니다.
									<br />* 계정 유형을 맞게 선택하신 경우 '아이디 찾기',
									'비밀번호 찾기'를 진행해주세요.
									<br />
									<br />
									지속해서 로그인이 되지 않으시는 경우 1:1 게시판 문의 또는
									taing@cj.net 으로 문의해주시면
									<br />
									신속하게 가입하신 계정 확인하여 답변드리겠습니다.
								</p>
							</div>
						)}
					</li>
					<li className={S.qnaItem}>
						<input type="checkbox" className="hidden" id="findId" />
						<label
							htmlFor="findId"
							onClick={() => handleToggle(6)}
							className={`${S.question} ${
								activeIndex === 6 ? "text-white font-semibold" : ""
							}`}
						>
							[로그인] 자동 로그아웃이 되었는데 제 계정을 모르겠어요.
							<em>
								{activeIndex === 6 ? (
									<img src={arrowUp} alt="답변 닫기" />
								) : (
									<img src={arrowDown} alt="답변 열기" />
								)}
							</em>
						</label>
						{activeIndex === 6 && (
							<div className={S.answer}>
								<p>
									APP과 PC WEB 계정 선택 화면에서 최근에 마지막으로 로그인하신
									계정을 확인하실 수 있습니다.
									<br />
									최근 로그인하신 계정을 선택하여주시고, 혹시라도 일치하는
									회원정보가 없다는 알림 메시지가 나온다면 아래 사항을
									확인해주세요.
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
									※ 이메일로 찾기 시 확인되지 않으니, 반드시 본인인증으로 찾기로
									이용 계정 확인해주세요.
									<br />
									※ SNS 회원은 해당 SNS 아이디가 아닌 타잉 가입 시 등록한
									이메일을 알려드립니다.
									<br />
									※ 본인인증이 완료된 계정만 확인이 가능합니다.
									<br />
									※ 네이버플러스멤버십 이용권 계정은 본인인증찾기로 확인되지
									않습니다.
									<br />
									<br />
									지속해서 로그인이 되지 않으시는 경우, 1:1 게시판 문의 또는
									taing@cj.net 으로 문의해주시면
									<br />
									신속하게 가입하신 계정 확인하여 답변드리겠습니다.
								</p>
							</div>
						)}
					</li>
					<li className={S.qnaItem}>
						<input type="checkbox" className="hidden" id="ticket" />
						<label
							htmlFor="ticket"
							onClick={() => handleToggle(7)}
							className={`${S.question} ${
								activeIndex === 7 ? "text-white font-semibold" : ""
							}`}
						>
							[로그인] 이용권이 있는 계정이 무엇인지 찾고싶어요.
							<em>
								{activeIndex === 7 ? (
									<img src={arrowUp} alt="답변 닫기" />
								) : (
									<img src={arrowDown} alt="답변 열기" />
								)}
							</em>
						</label>
						{activeIndex === 7 && (
							<div className={S.answer}>
								<p>
									유료 가입한 계정을 찾고 싶을때,
									<br />
									아래 방법으로 계정을 찾으신 후 계정 유형을 선택하여
									로그인해주시기 바랍니다.
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
									※ 이메일로 찾기 시 확인되지 않으니, 반드시 본인인증으로 찾기로
									이용 계정 확인해주세요.
									<br />
									※ SNS 회원은 해당 SNS 아이디가 아닌 타잉 가입 시 등록한
									이메일을 알려드립니다.
									<br />
									※ 네이버플러스멤버십 이용권 계정은 본인인증찾기로 확인되지
									않습니다.
									<br />
									보다 자세한 확인이 필요한 경우, [1:1 게시판 문의] 또는
									[taing@cj.net]으로 문의해주시면 가입하신 계정 확인하여
									답변드리겠습니다.
								</p>
							</div>
						)}
					</li>
					<li className={S.qnaItem}>
						<input type="checkbox" className="hidden" id="cs" />
						<label
							htmlFor="cs"
							onClick={() => handleToggle(8)}
							className={`${S.question} ${
								activeIndex === 8 ? "text-white font-semibold" : ""
							}`}
						>
							[로그인] 로그인이 안될 때 고객문의를 남길 수 있는 방법이 있나요?
							<em>
								{activeIndex === 8 ? (
									<img src={arrowUp} alt="답변 닫기" />
								) : (
									<img src={arrowDown} alt="답변 열기" />
								)}
							</em>
						</label>
						{activeIndex === 8 && (
							<div className={S.answer}>
								<p>
									로그인이 되지 않으시는 경우 아래 타잉 대표메일로 이메일 문의를
									남겨주시면 확인 후 답변드리겠습니다.
									<br />- 타잉 대표메일 : taing@cj.net
									<br />
									<br />
									문의 내용에 발생 증상 외 기기 모델명, OS 버전, 브라우저,
									네트워크 등 상세 정보를 남겨주시면 더욱 빠른 조치가 가능하오니
									이용에 참고 부탁드립니다.
								</p>
							</div>
						)}
					</li>
					<li className={S.qnaItem}>
						<input type="checkbox" className="hidden" id="rating" />
						<label
							htmlFor="rating"
							onClick={() => handleToggle(9)}
							className={`${S.question} ${
								activeIndex === 9 ? "text-white font-semibold" : ""
							}`}
						>
							[인증] 성인인증은 어떻게 하나요?
							<em>
								{activeIndex === 9 ? (
									<img src={arrowUp} alt="답변 닫기" />
								) : (
									<img src={arrowDown} alt="답변 열기" />
								)}
							</em>
						</label>
						{activeIndex === 9 && (
							<div className={S.answer}>
								<p>
									만 19세 이상 시청 가능한 콘텐츠는 시청하시려는 프로필의
									성인인증이 되어야만 시청 가능합니다.
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
									성인인증은 인증 후 1년간 유효하며 해마다 갱신하셔야만 그
									권한이 유지되며,
									<br />
									인증 유효기간은 앱 설정 → [프로필 성인인증] 메뉴에서 확인하실
									수 있습니다.
									<br />
									<br />* 성인인증 메뉴가 보이지 않으실 경우 앱을 최신 버전으로
									업데이트 해주시기 바랍니다.
									<br />* 성인인증은 계정별 인증이 아닌 프로필별 인증이
									필요합니다.
								</p>
							</div>
						)}
					</li>
				</ul>
			</section>
		</>
	);
}
