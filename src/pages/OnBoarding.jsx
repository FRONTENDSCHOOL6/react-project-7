// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import YouTube from "react-youtube"
import S from "./onboarding.module.css"
import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

function OnBoarding() {
	// SwiperCore.use([Autoplay]) // Swiper
	//@ 버튼 클릭 시 로그인 페이지로 이동
	const navigate = useNavigate()

	const navigateToLogin = () => {
		navigate("/siginin")
	}

	const [activeIndex, setActiveIndex] = useState(null)

	const handleToggle = (index) => {
		if (activeIndex === index) {
			// 이미 열려있는 아코디언을 클릭한 경우 닫음
			setActiveIndex(null)
		} else {
			// 새로운 아코디언을 클릭한 경우 해당 인덱스로 설정하고 열림
			setActiveIndex(index)
		}
	}

	return (
		<>
			{/* 재미를 플레이해보세요 */}
			<section className="join relative bg-[url('/assets/onboarding/main.webp')] bg-cover pb-[calc(35%+20rem)] w-screen h-0 text-center">
				<div className="absolute bg-black/70 brightness-50 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
				<div className="joinContent absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col gap-3 text-center">
					<p className="text-white text-[2.75rem] font-semibold leading-[65px] tracking-wide">
						티빙 오리지널 콘텐츠,
						<br></br>
						방송, 영화, 해외시리즈까지!
						<br></br>
						재미를 플레이해보세요.
					</p>
					<span className="text-gray400 text-2xl font-normal">
						간편하게 가입하고, 원하실 때 해지할 수 있어요.
					</span>
					<button
						type="button"
						onClick={navigateToLogin}
						className="relative left-1/2 -translate-x-1/2 top-10 bg-primary w-[100%] py-5 rounded text-white text-2xl font-semibold before:bg-[url('/assets/onboarding/tving-symbol.svg')] before:bg-no-repeat before:absolute before:top-0 before:left-0 before:w-20 before:h-full"
					>
						지금 바로, 티빙을 플레이 하세요!
					</button>
				</div>
			</section>
			{/* 티빙에만 있는 재미 */}
			<section className="onlyTving w-full bg-black text-center text-white pb-36">
				<div className="onlyContent flex flex-col gap-1 mb-14">
					<p className="text-[3.3rem] font-semibold mb-2">티빙에만 있는 재미</p>
					<p className="text-3xl text-gray-200">
						오리지널 콘텐츠를 만나보세요!
					</p>
					<span className="text-gray-400 text-[1.4rem]">
						차별화된 웰메이드 오리지널 콘텐츠
					</span>
				</div>
				{/* //? 추후 랜덤으로 이미지가 나타날 수 있는 로직 필요 */}
				<div className="onlyFig relative w-screen flex flex-row justify-evenly">
					<figure className="absolute top-1/2 -translate-y-1/2 left-[7%] w-[36%] brightness-[40%]">
						<img src="/assets/onboarding/hotel.webp" alt="" />
						<figcaption></figcaption>
					</figure>
					<figure className="w-1/2 z-10">
						<img src="/assets/onboarding/after-school.webp" alt="" />
						<figcaption></figcaption>
					</figure>
					<figure className="absolute top-1/2 -translate-y-1/2 right-[7%] w-[36%] brightness-[40%]">
						<img src="/assets/onboarding/dessert.webp" alt="" />
						<figcaption></figcaption>
					</figure>
				</div>
			</section>
			{/* 내가 찾던 재미 */}
			<section className="fun relative w-full bg-black text-center text-white pb-36">
				<div className="onlyContent flex flex-col gap-2 mb-14">
					<p className="text-[3.3rem] font-semibold mb-1">내가 찾던 재미</p>
					<p className="text-3xl text-gray-200">
						보고 싶은 콘텐츠를 발견하세요!
					</p>
					<span className="text-gray-400 text-[1.3rem]">
						최신, 인기 TV프로그램, 영화, 해외시리즈, 파라마운트+ 오리지널 및
						독점
					</span>
				</div>
				<div className="w-full">
					<Swiper
						className={`${S.swiperss} mySwiper`}
						slidesPerView={4}
						spaceBetween={30}
						autoplay={{
							delay: 0,
							disableOnInteraction: true,
						}}
						loop={true}
						modules={[Autoplay]}
						speed={7000}
						freeMode={true}
					>
						<SwiperSlide>
							<img src="/assets/onboarding/busan.jpeg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/assets/onboarding/dance-singer.jpeg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/assets/onboarding/earth.jpeg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/assets/onboarding/fake.jpeg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/assets/onboarding/great2.jpeg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="/assets/onboarding/king-the-land.jpeg" alt="" />
						</SwiperSlide>
					</Swiper>
					{/* <div className={S.swiperItem}>
						<img src="/assets/onboarding/busan.jpeg" alt="" />
					</div>
					<div className={S.swiperItem1}>
						<img src="/assets/onboarding/dance-singer.jpeg" alt="" />
					</div>
					<div className={S.swiperItem2}>
						<img src="/assets/onboarding/earth.jpeg" alt="" />
					</div>
					<div className={S.swiperItem3}>
						<img src="/assets/onboarding/fake.jpeg" alt="" />
					</div>
					<div className={S.swiperItem4}>
						<img src="/assets/onboarding/great2.jpeg" alt="" />
					</div>
					<div className={S.swiperItem}>
						<img src="/assets/onboarding/king-the-land.jpeg" alt="" />
					</div> */}
				</div>
			</section>
			{/* 유튜브 섹션 */}
			<section className="bg-black w-full relative">
				<div className="video relative pb-[56.25%] pt-[25px] h-0">
					{/* <YouTube
						className="absolute top-1/2 left-1/2 -translate-x-1/2"
						videoId="Lr8lSxMlp9Q"
						opts={{
							width: "100%",
							height: "100%",
							playerVars: {
								autoplay: 0,
								rel: 0,
								modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
							},
						}}
						//이벤트 리스너
						onEnd={(e) => {
							e.target.stopVideo(0)
						}}
					/> */}
					<iframe
						className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[60%] h-[60%]"
						src={`https://www.youtube-nocookie.com/embed/Lr8lSxMlp9Q`}
					/>
				</div>
			</section>
			{/* 똑똑하게 보는 재미 */}
			<section className="fun relative w-full bg-black text-center text-white pb-36">
				<div className="onlyContent flex flex-col gap-2 mb-14">
					<p className="text-[3.3rem] font-semibold mb-1">똑똑하게 보는 재미</p>
					<p className="text-3xl text-gray-200">
						최신 방송을 가장 빠르고 간편하게 시청하세요!
					</p>
					<span className="text-gray-400 text-[1.3rem]">
						실시간TV, 퀵VOD, 타임머신 기능으로 기다리지 말고 편하게 시청
					</span>
				</div>
				<div className="relative w-full">
					<video autoPlay loop muted className="mx-auto h-auto w-[30%]">
						<source src="/assets/onboarding/mobile.mp4"></source>
					</video>
					<div className="absolute w-[38%] bottom-[-5%] left-1/2 -translate-x-1/2">
						<img src="/assets/onboarding/quick-vod.png" alt="" />
					</div>
				</div>
			</section>
			{/* 함께 즐기는 재미 */}
			<section className="together w-full bg-black text-center text-white pb-36">
				<div className="onlyContent flex flex-col gap-2 mb-14">
					<p className="text-[3.3rem] font-semibold mb-1">함께 즐기는 재미</p>
					<p className="text-3xl text-gray-200">다양한 기기로 즐겨보세요!</p>
					<span className="text-gray-400 text-[1.3rem]">
						스마트폰, 태블릿, PC, TV, 크롬캐스트에서 시청
						<br />
						최대 4명의 지인들과 함께 구독
					</span>
				</div>
				<div>
					<video autoPlay loop muted className="mx-auto h-auto w-[60%]">
						<source src="/assets/onboarding/devices.mp4"></source>
					</video>
				</div>
			</section>
			{/* 지금 시작해보세요 */}
			<section className="no1 relative w-full bg-black text-center text-white pb-[calc(10%+20rem)]">
				<div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-[1rem]">
					<img
						className="inline-block w-[50%]"
						src="/assets/onboarding/no1-tving.svg"
						alt=""
					/>
					<p className="px-20 text-white text-[2.75rem] font-semibold leading-[65px] tracking-wide">
						지금 시작해보세요
					</p>
					<button
						type="button"
						onClick={navigateToLogin}
						className="relative w-[100%] left-0 top-0 bg-primary py-5 rounded text-white text-2xl font-semibold before:bg-[url('/assets/onboarding/tving-symbol.svg')] before:bg-no-repeat before:absolute before:top-0 before:left-0 before:w-[50%] before:h-full"
					>
						지금 바로, 티빙을 플레이 하세요!
					</button>
				</div>
			</section>
			{/* 자주 찾는 질문 */}
			<section className="qna w-full bg-black text-white px-[3%] select-none">
				<h3 className="text-white text-[3rem] font-semibold tracking-wide text-center">
					자주 찾는 질문
				</h3>
				<ul className="flex flex-col">
					<li className="border border-0 border-b border-gray800 py-7">
						<input type="checkbox" className="hidden" id="chat" />
						<label
							htmlFor="chat"
							onClick={() => handleToggle(0)}
							className={`flex flex-row px-2 justify-between cursor-pointer text-2xl text-gray300 ${
								activeIndex === 0 ? "text-white font-semibold" : ""
							}`}
						>
							[기타] 티빙 고객센터 카카오 챗봇 및 실시간 채팅 상담 이용하기
							<em>
								{activeIndex === 0 ? (
									<img src="/assets/onboarding/arrow-up.svg" alt="답변 닫기" />
								) : (
									<img
										src="/assets/onboarding/arrow-down.svg"
										alt="답변 열기"
									/>
								)}
							</em>
						</label>
						{activeIndex === 0 && (
							<div className="px-4 pt-4 overflow-hidden text-lg text-gray300 leading-6">
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
					<li className="border border-0 border-b border-gray800 py-7">
						<input type="checkbox" className="hidden" id="chat" />
						<label
							htmlFor="chat"
							onClick={() => handleToggle(1)}
							className={`flex flex-row px-2 justify-between cursor-pointer text-2xl text-gray300 ${
								activeIndex === 1 ? "text-white font-semibold" : ""
							}`}
						>
							[결제] 영화 VOD를 개별구매 할 수 없나요?
							<em>
								{activeIndex === 1 ? (
									<img src="/assets/onboarding/arrow-up.svg" alt="답변 닫기" />
								) : (
									<img
										src="/assets/onboarding/arrow-down.svg"
										alt="답변 열기"
									/>
								)}
							</em>
						</label>
						{activeIndex === 1 && (
							<div className="px-4 pt-4 overflow-hidden text-lg text-gray300 leading-6">
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
					<li className="border border-0 border-b border-gray800 py-7">
						<input type="checkbox" className="hidden" id="chat" />
						<label
							htmlFor="chat"
							onClick={() => handleToggle(2)}
							className={`flex flex-row px-2 justify-between cursor-pointer text-2xl text-gray300 ${
								activeIndex === 2 ? "text-white font-semibold" : ""
							}`}
						>
							[결제] 보유한 타잉캐시는 어떻게 사용하나요?
							<em>
								{activeIndex === 2 ? (
									<img src="/assets/onboarding/arrow-up.svg" alt="답변 닫기" />
								) : (
									<img
										src="/assets/onboarding/arrow-down.svg"
										alt="답변 열기"
									/>
								)}
							</em>
						</label>
						{activeIndex === 2 && (
							<div className="px-4 pt-4 overflow-hidden text-lg text-gray300 leading-6">
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
					<li className="border border-0 border-b border-gray800 py-7">
						<input type="checkbox" className="hidden" id="chat" />
						<label
							htmlFor="chat"
							onClick={() => handleToggle(3)}
							className={`flex flex-row px-2 justify-between cursor-pointer text-2xl text-gray300 ${
								activeIndex === 3 ? "text-white font-semibold" : ""
							}`}
						>
							[결제] 기존에 구매한 개별구매 영화는 시청할 수 없나요?
							<em>
								{activeIndex === 3 ? (
									<img src="/assets/onboarding/arrow-up.svg" alt="답변 닫기" />
								) : (
									<img
										src="/assets/onboarding/arrow-down.svg"
										alt="답변 열기"
									/>
								)}
							</em>
						</label>
						{activeIndex === 3 && (
							<div className="px-4 pt-4 overflow-hidden text-lg text-gray300 leading-6">
								<p>
									2023년 9월 6일 영화 VOD 개별구매 서비스가 종료되었습니다.
									<br />
									<br />
									종료일 이전 개별구매로 구매한 영화 VOD는 이용기간 만료일까지
									아래의 메뉴에서 시청이 가능합니다.
									<br />
									<br />
									■ 개별구매 영화 시청 경로
									<br />- PC : 티빙 로그인 > 우측 상단 프로필 아이콘 > MY >
									시청내역 or 구매내역 메뉴의 영화 탭에서 시청 가능
									<br />- 모바일 APP : 티빙 로그인 > 기록 > 시청내역 or 구매내역
									메뉴에서 시청 가능
									<br />
									<br />* 단, 개별구매 후 이용기간이 만료된 콘텐츠인 경우 더이상
									시청하실 수 없습니다.
								</p>
							</div>
						)}
					</li>
					<li className="border border-0 border-b border-gray800 py-7">
						<input type="checkbox" className="hidden" id="chat" />
						<label
							htmlFor="chat"
							onClick={() => handleToggle(4)}
							className={`flex flex-row px-2 justify-between cursor-pointer text-2xl text-gray300 ${
								activeIndex === 4 ? "text-white font-semibold" : ""
							}`}
						>
							[회원] 타잉 회원가입 방법이 궁금해요.
							<em>
								{activeIndex === 4 ? (
									<img src="/assets/onboarding/arrow-up.svg" alt="답변 닫기" />
								) : (
									<img
										src="/assets/onboarding/arrow-down.svg"
										alt="답변 열기"
									/>
								)}
							</em>
						</label>
						{activeIndex === 4 && (
							<div className="px-4 pt-4 overflow-hidden text-lg text-gray300 leading-6">
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
					<li className="border border-0 border-b border-gray800 py-7">
						<input type="checkbox" className="hidden" id="chat" />
						<label
							htmlFor="chat"
							onClick={() => handleToggle(5)}
							className={`flex flex-row px-2 justify-between cursor-pointer text-2xl text-gray300 ${
								activeIndex === 5 ? "text-white font-semibold" : ""
							}`}
						>
							[회원] 타잉 로그인 방법이 궁금해요.
							<em>
								{activeIndex === 5 ? (
									<img src="/assets/onboarding/arrow-up.svg" alt="답변 닫기" />
								) : (
									<img
										src="/assets/onboarding/arrow-down.svg"
										alt="답변 열기"
									/>
								)}
							</em>
						</label>
						{activeIndex === 5 && (
							<div className="px-4 pt-4 overflow-hidden text-lg text-gray300 leading-6">
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
					<li className="border border-0 border-b border-gray800 py-7">
						<input type="checkbox" className="hidden" id="chat" />
						<label
							htmlFor="chat"
							onClick={() => handleToggle(6)}
							className={`flex flex-row px-2 justify-between cursor-pointer text-2xl text-gray300 ${
								activeIndex === 6 ? "text-white font-semibold" : ""
							}`}
						>
							[로그인] 자동 로그아웃이 되었는데 제 계정을 모르겠어요.
							<em>
								{activeIndex === 6 ? (
									<img src="/assets/onboarding/arrow-up.svg" alt="답변 닫기" />
								) : (
									<img
										src="/assets/onboarding/arrow-down.svg"
										alt="답변 열기"
									/>
								)}
							</em>
						</label>
						{activeIndex === 6 && (
							<div className="px-4 pt-4 overflow-hidden text-lg text-gray300 leading-6">
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
									2) 본인인증으로 찾기 > 본인인증하기
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
					<li className="border border-0 border-b border-gray800 py-7">
						<input type="checkbox" className="hidden" id="chat" />
						<label
							htmlFor="chat"
							onClick={() => handleToggle(7)}
							className={`flex flex-row px-2 justify-between cursor-pointer text-2xl text-gray300 ${
								activeIndex === 7 ? "text-white font-semibold" : ""
							}`}
						>
							[로그인] 이용권이 있는 계정이 무엇인지 찾고싶어요.
							<em>
								{activeIndex === 7 ? (
									<img src="/assets/onboarding/arrow-up.svg" alt="답변 닫기" />
								) : (
									<img
										src="/assets/onboarding/arrow-down.svg"
										alt="답변 열기"
									/>
								)}
							</em>
						</label>
						{activeIndex === 7 && (
							<div className="px-4 pt-4 overflow-hidden text-lg text-gray300 leading-6">
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
					<li className="border border-0 border-b border-gray800 py-7">
						<input type="checkbox" className="hidden" id="chat" />
						<label
							htmlFor="chat"
							onClick={() => handleToggle(8)}
							className={`flex flex-row px-2 justify-between cursor-pointer text-2xl text-gray300 ${
								activeIndex === 8 ? "text-white font-semibold" : ""
							}`}
						>
							[로그인] 로그인이 안될 때 고객문의를 남길 수 있는 방법이 있나요?
							<em>
								{activeIndex === 8 ? (
									<img src="/assets/onboarding/arrow-up.svg" alt="답변 닫기" />
								) : (
									<img
										src="/assets/onboarding/arrow-down.svg"
										alt="답변 열기"
									/>
								)}
							</em>
						</label>
						{activeIndex === 8 && (
							<div className="px-4 pt-4 overflow-hidden text-lg text-gray300 leading-6">
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
					<li className="border border-0 border-b border-gray800 py-7">
						<input type="checkbox" className="hidden" id="chat" />
						<label
							htmlFor="chat"
							onClick={() => handleToggle(9)}
							className={`flex flex-row px-2 justify-between cursor-pointer text-2xl text-gray300 ${
								activeIndex === 9 ? "text-white font-semibold" : ""
							}`}
						>
							[인증] 성인인증은 어떻게 하나요?
							<em>
								{activeIndex === 9 ? (
									<img src="/assets/onboarding/arrow-up.svg" alt="답변 닫기" />
								) : (
									<img
										src="/assets/onboarding/arrow-down.svg"
										alt="답변 열기"
									/>
								)}
							</em>
						</label>
						{activeIndex === 9 && (
							<div className="px-4 pt-4 overflow-hidden text-lg text-gray300 leading-6">
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
	)
}

export default OnBoarding
