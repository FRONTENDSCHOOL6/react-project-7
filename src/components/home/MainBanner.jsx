import { Link } from "react-router-dom";
import S from "./Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import street from "/assets/streetwoman.webp";
import uquiz from "/assets/dongwon-uquiz.webp";
import lie from "/assets/lie.webp";
import SwiperButton from "@/components/common/SwiperButton";

export function MainBanner() {
	const bannerContents = [
		{
			id: "q1pqyij1cmjidxh",
			title: "스트릿우먼파이터",
			img: street,
			desc: "K-POP 데스 매치 미션",
		},
		{
			id: "sjjmb2un0496h9z",
			title: "유퀴즈 온 더 블럭",
			img: uquiz,
			desc: "강동원, 20년만의 예능 출연!",
		},
		{
			id: "7ew1rjbtkqfhwee",
			title: "소용없어 거짓말",
			img: lie,
			desc: "김소현X황민현의 쌍방구원 로맨스",
		},
	];

	return (
		<Swiper
			className={"mySwiper homeMain"}
			loop="true"
			navigation={{
				nextEl: "#homeNextButton",
				prevEl: "#homePrevButton",
				keyboard: true,
				onlyInViewport: false,
			}}
			autoplay={true}
			effect={"fade"}
			pagination={{ clickable: true }}
			modules={[Navigation, EffectFade, Autoplay, Pagination]}
			tabIndex={0}
		>
			{bannerContents &&
				bannerContents.map((item) => (
					<div key={item.id}>
						<SwiperSlide className={S.homeGradient} key={item.id}>
							<img className="w-full" src={item.img} alt={item.title} />
							<span className={S.mainBannerDesc}>{item.desc}</span>
							<Link
								key={item.id}
								to={`/contents/${item.id}`}
								className={S.mainBannerMoreBtn}
								alt={item.title}
							>
								<button>자세히 보기</button>
							</Link>
						</SwiperSlide>
					</div>
				))}
			<SwiperButton className="swiper-button-next" id="homePrevButton" />
			<SwiperButton className="swiper-button-prev" id="homeNextButton" />
		</Swiper>
	);
}
