import { useNavigate, useParams } from "react-router-dom";
import S from "./Home.module.css";
import pb from "@/api/pocketbase";
import { getPbImageURL } from "@/utils/getPbImageURL";
import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MainList } from "./MainList";
import { MainBanner } from "./MainBanner";

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
		<div className="mainPage bg-black w-screen overflow-hidden">
			<MainBanner></MainBanner>
			<section className="popular">
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
									className={`swiper-button-prev ${S.mainButtonPrev}`}
									id="popularPrevButton"
									onKeyDown={(e) => {
										if (e.key === "Enter") e.currentTarget.click();
									}}
									role="button"
									tabIndex={0}
								/>
								<div
									className={`swiper-button-next ${S.mainButtonNext}`}
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
									nextEl: "#popularTvNextButton",
									prevEl: "#popularTvPrevButton",
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
									className={`swiper-button-prev ${S.mainButtonPrev}`}
									id="popularTvPrevButton"
									onKeyDown={(e) => {
										if (e.key === "Enter") e.currentTarget.click();
									}}
									role="button"
									tabIndex={0}
								/>
								<div
									className={`swiper-button-next ${S.mainButtonNext}`}
									id="popularTvNextButton"
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
			<MainList
				classTitle={"romance"}
				listTitle="사랑에 빠지는 순간, 로맨스 영화"
				genreId={"n0ztxfbdj977ycx"}
				startNum={0}
				endNum={10}
			/>
			<MainList
				classTitle={"horror"}
				listTitle={"불 끄면 생각날걸 ? 공포영화"}
				genreId={"cpcr28a1nvppyow"}
				startNum={0}
				endNum={10}
			/>
		</div>
	);
}

export default Home;
