import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import uquiz from "/assets/uquiz.webp";
import danceSinger from "/assets/dance-singer.jpeg";
import earth from "/assets/earth.jpeg";
import fake from "/assets/fake.jpeg";
import theGreat2 from "/assets/great2.jpeg";
import mapAgain from "/assets/map-again.jpeg";
import witch from "/assets/witch.jpeg";
import thisLife from "/assets/this-life.jpeg";
import kingTheLand from "/assets/king-the-land.jpeg";
import busan from "/assets/busan.jpeg";

function LoopSlide() {
	const groupTop = [
		{
			title: "유퀴즈 온 더 블럭",
			id: "uquiz",
			img: uquiz,
		},
		{
			title: "댄스가수 유랑단",
			id: "dance-singer",
			img: danceSinger,
		},
		{
			title: "지구뿅뿅오락실",
			id: "earth",
			img: earth,
		},
		{
			title: "이로운 사기",
			id: "fake",
			img: fake,
		},
		{
			title: "더 그레이트 시즌2",
			id: "the-great2",
			img: theGreat2,
		},
	];
	const groupBottom = [
		{
			title: "다시 갈 지도",
			id: "map-again",
			img: mapAgain,
		},
		{
			title: "마녀사냥",
			id: "witch",
			img: witch,
		},
		{
			title: "이번생도 잘 부탁해",
			id: "this-life",
			img: thisLife,
		},
		{
			title: "킹더랜드",
			id: "king-the-land",
			img: kingTheLand,
		},
		{
			title: "부산촌놈 in 시드니",
			id: "busan",
			img: busan,
		},
	];
	const groupTopTwice = Array(2)
		.fill(groupTop)
		.flat()
		.map((item, index) => ({ ...item, id: item.id + "_1_" + index }));
	const groupBottomTwice = Array(2)
		.fill(groupBottom)
		.flat()
		.map((item, index) => ({ ...item, id: item.id + "_2_" + index }));

	return (
		<>
			<Swiper
				className="mySwiper swiperLoop mb-3"
				slidesPerView={4.5}
				spaceBetween={"1%"}
				autoplay={{
					delay: 0,
					disableOnInteraction: true,
				}}
				loop={true}
				modules={[Autoplay]}
				speed={9000}
				freeMode={true}
				preventInteractionOnTransition={true}
			>
				{groupTopTwice &&
					groupTopTwice.map((item) => (
						<SwiperSlide key={item.id}>
							<img src={item.img} alt={item.title} className="rounded" />
						</SwiperSlide>
					))}
			</Swiper>
			<Swiper
				className="mySwiper swiperLoop mb-3"
				slidesPerView={4.5}
				spaceBetween={"1%"}
				autoplay={{
					delay: 0,
					disableOnInteraction: true,
				}}
				loop={true}
				modules={[Autoplay]}
				speed={10000}
				freeMode={true}
				preventInteractionOnTransition={true}
			>
				{groupBottomTwice &&
					groupBottomTwice.map((item) => (
						<SwiperSlide key={item.id}>
							<img src={item.img} alt={item.title} className="rounded" />
						</SwiperSlide>
					))}
			</Swiper>
		</>
	);
}

export default LoopSlide;
