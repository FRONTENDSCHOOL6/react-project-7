// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react" // basic
// import SwiperCore from "swiper"
// import 'swiper/css';
// import S from "./onboarding.module.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";


function OnBoarding() {
  // SwiperCore.use([Autoplay]) // Swiper
  //@ 버튼 클릭 시 로그인 페이지로 이동
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/siginin");
  };

  return (
    <>
      {/* 재미를 플레이해보세요 */}
      <section className="join relative bg-[url('/assets/onboarding/main.webp')] bg-cover pb-[calc(35%+20rem)] w-screen h-0 text-center ">
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
          <button type="button" onClick={navigateToLogin} className="relative left-1/2 -translate-x-1/2 top-10 bg-primary w-[100%] py-5 rounded text-white text-2xl font-semibold before:bg-[url('/assets/onboarding/tving-symbol.svg')] before:bg-no-repeat before:absolute before:top-0 before:left-0 before:w-20 before:h-full">
            지금 바로, 티빙을 플레이 하세요!
          </button>
        </div>
      </section>
      {/* 티빙에만 있는 재미 */}
      <section className="onlyTving w-full bg-black text-center text-white pb-36">
        <div className="onlyContent flex flex-col gap-1 mb-14">
          <p className="text-[3.3rem] font-semibold mb-2">티빙에만 있는 재미</p>
          <p className="text-3xl text-gray-200">오리지널 콘텐츠를 만나보세요!</p>
          <span className="text-gray-400 text-[1.4rem]">차별화된 웰메이드 오리지널 콘텐츠</span>
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
      <section className="fun w-full bg-black text-center text-white pb-36">
        <div className="onlyContent flex flex-col gap-2 mb-14">
          <p className="text-[3.3rem] font-semibold mb-1">내가 찾던 재미</p>
          <p className="text-3xl text-gray-200">보고 싶은 콘텐츠를 발견하세요!</p>
          <span className="text-gray-400 text-[1.3rem]">최신, 인기 TV프로그램, 영화, 해외시리즈, 파라마운트+ 오리지널 및 독점</span>
        </div>
        <div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper w-full -z-10"
            speed={8000}
            pagination={{ clickable: false }}
            onAutoplayTimeLeft={100}
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
        </div>
      </section>
      <section>
        
      </section>
    </>
  )
}

export default OnBoarding;