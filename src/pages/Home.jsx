import { Helmet } from "react-helmet-async";
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
import kbo from "/assets/kbo.jpeg";
import ufc from "/assets/ufc.jpeg";

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
		<>
			<Helmet>
				<title>TAING</title>
				<meta
					name="description"
					content="멋쟁이 사자처럼 6기 7조의 파이널 프로젝트 - 티빙 클론코딩 타잉 메인페이지"
				/>
				<meta name="keywords" content="티빙, ott, 영화, 드라마" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="타잉 메인페이지" />
				<meta property="og:description" content="프로젝트 타잉 메인페이지" />
				<meta property="og:image" content="@/assets/metaImg.png" />
				<meta
					property="og:url"
					content="http://localhost:5173/react-project-7/#/"
				/>
			</Helmet>
			<div className="mainPage bg-black w-screen overflow-hidden">
				<MainBanner></MainBanner>
				<section className="mainSwiper popular">
					<h3 className={S.popularTitle}>인기 영화</h3>
					{contents?.map(
						(contentCategory) =>
							contentCategory.title === "영화" && (
								<Swiper
									key={contentCategory.title}
									slidesPerView={5.5}
									breakpoints={{
										480: {
											slidesPerView: 3,
										},
										768: {
											slidesPerView: 4,
										},
										1024: {
											slidesPerView: 5,
										},
									}}
									slidesPerGroup={3}
									spaceBetween={70}
									navigation={{
										nextEl: "#popularNextButton",
										prevEl: "#popularPrevButton",
										keyboard: true,
										onlyInViewport: false,
									}}
									pagination={{ clickable: true }}
									modules={[Navigation, Pagination]}
									tabIndex={0}
									className="overflow-y-visible mb-10 pl-[5%]"
								>
									{contentCategory.data.slice(27, 37).map((item, index) => (
										<SwiperSlide key={item.id} className={S.listContent}>
											<span className="rank absolute bottom-[0%] left-[-20%] text-[7rem] leading-[6rem] text-white italic font-extrabold">
												{index + 1}
											</span>
											<Link
												to={`contents/${item.id}`}
												className="w-full flex flex-row items-end gap-[4%]"
											>
												<img
													src={getPbImageURL(item, "poster")}
													alt={item.title}
												/>
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
				<section className="mainSwiper popular">
					<h3 className={S.popularTitle}>인기 TV프로그램</h3>
					{contents?.map(
						(contentCategory) =>
							contentCategory.title === "TV 프로그램" && (
								<Swiper
									key={contentCategory.title}
									slidesPerView={5.5}
									breakpoints={{
										480: {
											slidesPerView: 3,
										},
										768: {
											slidesPerView: 4,
										},
										1024: {
											slidesPerView: 5,
										},
									}}
									slidesPerGroup={3}
									spaceBetween={70}
									navigation={{
										nextEl: "#popularTvNextButton",
										prevEl: "#popularTvPrevButton",
										keyboard: true,
										onlyInViewport: false,
									}}
									pagination={{ clickable: true }}
									modules={[Navigation, Pagination]}
									tabIndex={0}
									className="overflow-y-visible mb-10 pl-[5%]"
								>
									{contentCategory.data.slice(27, 37).map((item, index) => (
										<SwiperSlide key={item.id} className={S.listContent}>
											<span className="rank absolute bottom-[0%] left-[-20%] text-[7rem] leading-[6rem] text-white italic font-extrabold">
												{index + 1}
											</span>
											<Link to={`contents/${item.id}`} className="w-full">
												<img
													src={getPbImageURL(item, "poster")}
													alt={item.title}
												/>
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
					listTitle={"사랑에 빠지는 순간, 로맨스"}
					genre={"영화"}
					genreId={"n0ztxfbdj977ycx"}
				/>
				<MainList
					classTitle={"kids"}
					listTitle={"아이들과 함께! 키즈 프로그램"}
					genre={"TV 프로그램"}
					genreId={"jbrgnkddukg6sod"}
				/>
				<MainList
					classTitle={"tv"}
					listTitle={"가족끼리 즐기자! 예능 프로그램"}
					genre={"TV 프로그램"}
					genreId={"bk1642512y8h7u4"}
				/>
				<section className={S.eventBanner}>
					<div className="w-full">
						<img className="w-full" src={kbo} alt="" />
					</div>
				</section>
				<MainList
					classTitle={"sf"}
					listTitle={"강력한 비주얼 ! SF 영화"}
					genre={"영화"}
					genreId={"i1cbm8l1n1opqh1"}
				/>
				<MainList
					classTitle={"horror"}
					listTitle={"불 끄면 생각날걸? 공포 영화"}
					genre={"영화"}
					genreId={"cpcr28a1nvppyow"}
				/>
				<MainList
					classTitle={"documentary"}
					listTitle={"다큐멘터리"}
					genre={"TV 프로그램"}
					genreId={"rpq7aiz0y08y0y8"}
				/>
				<section className={S.eventBanner}>
					<div className="w-full">
						<img className="w-full" src={ufc} alt="" />
					</div>
				</section>
			</div>
		</>
	);
}

export default Home;
