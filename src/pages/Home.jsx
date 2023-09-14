import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import pb from "@/api/pocketbase";
import { getPbImageURL } from "@/utils/getPbImageURL";
import S from "./Home.module.css";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { MainList } from "./MainList";

//@ 메인 배너 컴포넌트
function MainBanner() {
	const bannerContents = [
		{
			id: "q1pqyij1cmjidxh",
			title: "스트릿우먼파이터",
			img: "/assets/home/streetwoman.webp",
			desc: "K-POP 데스 매치 미션",
		},
		{
			id: "sjjmb2un0496h9z",
			title: "유퀴즈 온 더 블럭",
			img: "/assets/home/dongwon-uquiz.webp",
			desc: "강동원, 20년만의 예능 출연!",
		},
		{
			id: "7ew1rjbtkqfhwee",
			title: "소용없어 거짓말",
			img: "/assets/home/lie.webp",
			desc: "김소현X황민현의 쌍방구원 로맨스",
		},
	];

	return (
		<Swiper
			className={"mySwiper homeMain ${S.homeGradient}"}
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
						<SwiperSlide key={item.id}>
							<img src={item.img} alt={item.title} />
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
			<div
				className="swiper-button-prev"
				id="homePrevButton"
				onKeyDown={(e) => {
					if (e.key === "Enter") e.currentTarget.click();
				}}
				role="button"
				tabIndex={0}
			/>
			<div
				className="swiper-button-next"
				id="homeNextButton"
				onKeyDown={(e) => {
					if (e.key === "Enter") e.currentTarget.click();
				}}
				role="button"
				tabIndex={0}
			/>
		</Swiper>
	);
}

function Home() {
	const [contents, setContents] = useState([]);
	const [status, setStatus] = useState("pending");
	const [error, setError] = useState(null);
	const itemCount = 20;

	useEffect(() => {
		setStatus("loading");

		Promise.all([
			pb.collection("program").getFullList(),
			pb.collection("movie").getFullList(),
		])
			.then(([programList, movieList]) => {
				setContents([
					{ title: "TV 프로그램", data: programList },
					{ title: "영화", data: movieList },
				]);
				setStatus("success");
			})
			.catch((error) => {
				setError(error);
				setStatus("error");
			});
	}, []);

	return (
		<div className="bg-black w-screen overflow-hidden">
			<MainBanner></MainBanner>
			{/* <section className="popular">
				<h3 className={S.popularTitle}>타잉 인기 영화</h3>
				{contents?.map(
					(contentCategory) =>
						contentCategory.title === "영화" && (
							<Swiper
								key={contentCategory.title}
								slidesPerView={7}
								breakpoints={{
									480: {
										slidesPerView: 5,
									},
									768: {
										slidesPerView: 6,
									},
									1024: {
										slidesPerView: 7,
									},
								}}
								slidesPerGroup={3}
								spaceBetween={10}
								navigation={{
									nextEl: "#popularNextButton",
									prevEl: "#popularPrevButton",
									keyboard: true,
									onlyInViewport: false,
								}}
								pagination={{ clickable: true }}
								modules={[Navigation, Pagination]}
								tabIndex={0}
								className="overflow-y-visible mb-10 px-10"
							>
								{contentCategory.data.slice(27, 38).map((item) => (
									<SwiperSlide key={item.id}>
										<Link to={`contents/${item.id}`}>
											<img
												src={getPbImageURL(item, "poster")}
												alt={item.title}
											/>
											<p className="text-gray200 text-xl mt-2">{item.title}</p>
										</Link>
									</SwiperSlide>
								))}
								<div
									className={`swiper-button-prev ${S.popularButtonPrev}`}
									id="popularPrevButton"
									onKeyDown={(e) => {
										if (e.key === "Enter") e.currentTarget.click();
									}}
									role="button"
									tabIndex={0}
								/>
								<div
									className={`swiper-button-next ${S.popularButtonNext}`}
									id="popularNextButton"
									onKeyDown={(e) => {
										if (e.key === "Enter") e.currentTarget.click();
									}}
									role="button"
									tabIndex={0}
								/>
							</Swiper>
						)
				)}
			</section>
			<section className="popular">
				<h3 className={S.popularTitle}>타잉 인기 드라마</h3>
				{contents?.map(
					(contentCategory) =>
						contentCategory.title === "TV 프로그램" && (
							<Swiper
								key={contentCategory.title}
								slidesPerView={7}
								breakpoints={{
									480: {
										slidesPerView: 5,
									},
									768: {
										slidesPerView: 6,
									},
									1024: {
										slidesPerView: 7,
									},
								}}
								slidesPerGroup={3}
								spaceBetween={10}
								navigation={{
									nextEl: "#popularNextButton",
									prevEl: "#popularPrevButton",
									keyboard: true,
									onlyInViewport: false,
								}}
								pagination={{ clickable: true }}
								modules={[Navigation, Pagination]}
								tabIndex={0}
								className="overflow-y-visible mb-10 px-10"
							>
								{contentCategory.data.slice(27, 38).map((item) => (
									<SwiperSlide key={item.id}>
										<Link to={`contents/${item.id}`}>
											<img
												src={getPbImageURL(item, "poster")}
												alt={item.title}
											/>
											<p className="text-gray200 text-xl mt-2">{item.title}</p>
										</Link>
									</SwiperSlide>
								))}
								<div
									className={`swiper-button-prev ${S.popularButtonPrev}`}
									id="popularPrevButton"
									onKeyDown={(e) => {
										if (e.key === "Enter") e.currentTarget.click();
									}}
									role="button"
									tabIndex={0}
								/>
								<div
									className={`swiper-button-next ${S.popularButtonNext}`}
									id="popularNextButton"
									onKeyDown={(e) => {
										if (e.key === "Enter") e.currentTarget.click();
									}}
									role="button"
									tabIndex={0}
								/>
							</Swiper>
						)
				)}
			</section> */}
			<MainList
				classTitle={"horror"}
				listTitle={"공포영화"}
				startNum={0}
				endNum={10}
			/>

			{/* <div>
				{contents?.map(
					(contentCategory) =>
						contentCategory.data.length > 0 && (
							<Swiper
								key={contentCategory.title}
								slidesPerView={7}
								spaceBetween={10}
								className="h-96"
							>
								{contentCategory.data.slice(0, itemCount).map((item) => (
									<SwiperSlide key={item.id} className="overflow-hidden">
										<img
											src={getPbImageURL(item, "poster")}
											alt={item.title}
											className=" h-[250px] w-auto"
										/>
										<h2 className="text-gray200">{item.title}</h2>
									</SwiperSlide>
								))}
							</Swiper>
						)
				)}
			</div> */}
		</div>
	);
}

export default Home;
