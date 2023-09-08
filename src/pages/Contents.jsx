import S from './Contents.module.css';
import React,{ useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Contents() {
  const [isChanged, setChanged] = useState(false);
  const handleHeart = () => {
    setChanged(!isChanged);
  };

  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  const episodes = [
    { title: '1. 알쓸별잡 1화', detail: '상세 정보', date: '2023.08.03', duration: '98분', imgSrc:'/contents/ep1.png' },
    { title: '2. 알쓸별잡 2화', detail: '상세 정보', date: '2023.08.10', duration: '92분', imgSrc:'/contents/ep2.png' },
    { title: '3. 알쓸별잡 3화', detail: '상세 정보', date: '2023.08.17', duration: '101분', imgSrc:'/contents/ep3.png' },
    { title: '4. 알쓸별잡 4화', detail: '상세 정보', date: '2023.08.24', duration: '95분', imgSrc:'/contents/ep4.png' },
    { title: '5. 알쓸별잡 5화', detail: '상세 정보', date: '2023.08.31', duration: '96분', imgSrc:'/contents/ep2.png' }, 
  ];

  const related = [
    { title: '알쓸신잡', imgSrc:'/contents/relate1.png'},
    { title: '동네의 사생활', imgSrc:'/contents/relate2.png'},
    { title: '차이나피디아', imgSrc:'/contents/relate3.png'},
    { title: '잡학다식한 남자들의 히든카드 M16', imgSrc:'/contents/relate4.png'},
    { title: '만국견문록', imgSrc:'/contents/relate5.png'},
    { title: '렛츠고', imgSrc:'/contents/relate6.png'},
    { title: '동네의 사생활', imgSrc:'/contents/relate2.png'},
    { title: '알쓸신잡', imgSrc:'/contents/relate1.png'},
    { title: '동네의 사생활', imgSrc:'/contents/relate2.png'},
    { title: '차이나피디아', imgSrc:'/contents/relate3.png'},
    { title: '잡학다식한 남자들의 히든카드 M16', imgSrc:'/contents/relate4.png'},
    { title: '만국견문록', imgSrc:'/contents/relate5.png'},
    { title: '렛츠고', imgSrc:'/contents/relate6.png'},
    { title: '동네의 사생활', imgSrc:'/contents/relate2.png'},
    { title: '만국견문록', imgSrc:'/contents/relate5.png'},
    { title: '렛츠고', imgSrc:'/contents/relate6.png'},
    { title: '동네의 사생활', imgSrc:'/contents/relate2.png'},
  ];

  return (
    <main className={`text-gray300 ${S.main}`}>
      <article className={S.article}>
       <div className=" w-screen absolute inset-0 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className={S.poster}/>
       </div>
      <div className="relative z-10 flex flex-row justify-between h-full">
        <div >
          <h2 className="mb-[1.25rem]">
              <img className= "w-[23.25rem] h-[5.4375rem]"  src={'/contents/logo.png'} alt="알쓸별잡"/>
          </h2>
          <div className="border-gray300 ">
          <span className={S.tag}>12+</span>
          <span className={S.tag}>목 오후10:30</span>
          <span className={S.tag}>예능</span>
          <span className={S.tag}>tvN</span>
          <span className={S.tag}>시즌 1개</span>
          </div>
          <div className="flex">
          <button className= {S.playBtn} type="submit">
              <span className="text-center">▶</span> 1화 시청하기
          </button>
          <button className={S.likeBtn} type="submit" onClick={handleHeart}>
              <img className="m-auto w-[2rem] h-[2rem] mt-[0.5625rem] mb-[0.3125rem] " src={isChanged ? '/assets/full-heart.svg' : '/assets/heart.svg'} alt="하트 버튼" />
            <span className="text-white">찜</span>
          </button>
          <button className={S.likeBtn} type="submit">
          <img className={S.shareBtn} alt="공유 버튼"/>
            <span className="text-white">공유</span>
          </button>
          </div>
          <dl className="flex mt-[1.5625rem] font-semibold">
          <dt className="mr-[0.9375rem] font-semibold">
              크리에이터
          </dt>
          <dd>
              양정우, 양슬기, 전혜림
          </dd>
          </dl>
          <dl className="flex font-semibold">
          <dt className="mr-[0.9375rem]">
              출연
          </dt>
          <dd>
              장항준, 김민하, 이동진, 유현준, 김상욱, 심채경
          </dd>
          </dl>
          <p className={S.moreInfo}>
              별난 지구, 별난 도시에서 펼쳐지는 지적 수다의 향연! 건축X역사X문학X물리학X영화의 여러 박사들과 함께 떠나는 지구별 수다여행! 알아두면 쓸데없는 지구별 잡학사전
          </p>
          <button className="hidden" type="submit">
            더보기
          </button>
          </div>
          <div className="">
            <img className="w-[17.0625rem] h-[24.5625rem]"src={'/contents/poster.png'} alt="알아두면 쓸데없는 지구별 잡학사전"/>
          </div>
      </div>
      </article>

      <div>
        <section className={S.section}>
          <hr className="border-gray400"/>
          <div className="flex justify-between overflow-hidden mt-[1.9375rem] mb-[1.125rem]">
          <button className="text-white text-xl  font-semibold" type="submit">알쓸별잡 <span className="text-base font-semibold text-gray500"> &#40;총 5화&#41; </span> </button>  
          <div className="flex justify-end font-semibold">
          <button className="hover:text-white" type="submit">첫화부터</button>
          <button className="ml-[1.375rem] mr-[2.375rem] hover:text-white" type="submit">최신화부터</button>
          <div className="flex items-center">
          <span className="pr-[0.5rem]">연속재생</span>
          <button className={` text-white ${S.toggleBtn} ${isToggled ? `${S.on}` : `${S.off}`}`} type="submit" onClick={handleClick}> <div className={S.circle}/></button>
          </div>  
          </div>
          </div>
          <div className="flex overflow-hidden font-semibold md: w-[150%] sm:w-[200%]">
          {episodes.map((episode, index) => (
          <figure key={index} className="pt-[0.5625rem] pr-[0.875rem]">
          <img className="w-[18.125rem] h-auto " src={episode.imgSrc}/>
          <figcaption className="pr-[0.9375rem] pt-[0.5625rem]">
            <h4 className="text-white text-lg">{episode.title}</h4>
            <p>{episode.detail}</p>
            <span className="text-gray500">{episode.date} | {episode.duration}</span>
        </figcaption>
    </figure>
))}
          </div>
          </section>
        <section className={S.section}>
          <span className="text-white text-xl font-semibold">비슷한 TV 프로그램</span>
        <div className="flex justify-between w-[100%] overflow-hidden font-semibold ">
        <Swiper spaceBetween={10} slidesPerView={7}>
            {related.map((program, index) => (
              <SwiperSlide key={index}>
                <figure className="pt-[0.5625rem] pr-[0.875rem]">
                  <img className="w-[9.625rem] h-auto " src={program.imgSrc}/>
                  <figcaption className="pr-[0.9375rem] pt-[0.5625rem]">
                    <h4 className="text-lg w-[9.625rem] break-words">{program.title}</h4>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </section>
      </div>
    </main>
  )
}

export default Contents




