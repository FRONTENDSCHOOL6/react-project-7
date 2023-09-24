import S from "../components/favorite/Favorite.module.css";
import { Helmet } from "react-helmet-async";
import React, { useRef, useState, useEffect } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getPbImageURL } from "@/utils/getPbImageURL";
import { Link } from "react-router-dom";
import SwiperButton from "../components/common/SwiperButton";
import pb from "@/api/pocketbase";

export default function Favorites() {
	//@ 스와이퍼 상태 설정
	const [isBeginningM, setIsBeginningM] = useState(true);
	const [isEndM, setIsEndM] = useState(false);
	const prevRefM = useRef(null);
	const nextRefM = useRef(null);

	const [isBeginningP, setIsBeginningP] = useState(true);
	const [isEndP, setIsEndP] = useState(false);
	const prevRefP = useRef(null);
	const nextRefP = useRef(null);

	//@ 스와이퍼 변경 핸들러
	const handleSlideChange = (swiper, setIsBeginningFunc, setIsEndFunc) => {
		setIsBeginningFunc(swiper.isBeginning); //? 스와이퍼 시작인지 확인, 상태 업데이트
		setIsEndFunc(swiper.isEnd); //? 스와이퍼 마지막인지 확인, 상태
	};

	//@ 영화 스와이퍼 활성화 처리
	useEffect(() => {
		if (prevRefM.current || nextRefM.current) {
			if (isBeginningM) {
				prevRefM.current.classList.add("swiper-button-disabled");
			} else {
				prevRefM.current.classList.remove("swiper-button-disabled");
			}

			if (isEndM) {
				nextRefM.current.classList.add("swiper-button-disabled");
			} else {
				nextRefM.current.classList.remove("swiper-button-disabled");
			}
		}
	}, [isBeginningM, isEndM]);

	//@ 프로그램 스와이퍼 활성화 처리
	useEffect(() => {
		if (prevRefP.current || nextRefP.current) {
			if (isBeginningP) {
				prevRefP.current.classList.add("swiper-button-disabled");
			} else {
				prevRefP.current.classList.remove("swiper-button-disabled");
			}

			if (isEndP) {
				nextRefP.current.classList.add("swiper-button-disabled");
			} else {
				nextRefP.current.classList.remove("swiper-button-disabled");
			}
		}
	}, [isBeginningP, isEndP]);

	//@ 로컬스토리지 정보
	const userFromLocalStorage = JSON.parse(
		localStorage.getItem("pocketbase_auth") || "{}"
	);
	const userId = userFromLocalStorage?.model?.id;
	console.log("User ID:", userId);

	const [state, setState] = useState({
		favoriteProgram: [],
		favoriteMovie: [],
	});

	// @ 사용자 정보
	useEffect(() => {
		const handleData = async (users) => {
			try {
				if (!userId) return;
				const data = await pb
					.collection(users)
					.getOne(userId, { expand: "favoriteMovie,favoriteProgram" });

				let newState = {
					favoriteMovie: data.expand.favoriteMovie || [],
					favoriteProgram: data.expand.favoriteProgram || [],
				};

				if (data.poster) {
					newState.poster = getPbImageURL(data, "poster");
				}

				const keys = ["title"];
				for (let key of keys) {
					if (data[key]) {
						newState[key] = data[key];
					}
				}

				return newState;
			} catch (error) {
				console.error(`Failed to fetch user data`, error);
			}
		};
		const fetchUserData = handleData("users");

		fetchUserData
			.then((userData = {}) => {
				console.log("User data:", userData);

				setState((prevState) => ({
					...prevState,
					...userData,
				}));
			})
			.catch((error) => console.error(error));
	}, [userId]);

	return (
		<main className={`${S.main} `}>
			<Helmet>
				<title>타잉 7조 - 상세 페이지</title>
				<meta
					name="description"
					content="멋쟁이 사자처럼 6기 7조의 파이널 프로젝트 - 티빙 클론코딩 내가 찜한 콘텐츠 페이지"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="타잉 내가 찜한 콘텐츠 페이지" />
				<meta property="og:description" content="프로젝트 타잉 내찜콘 페이지" />
				<meta property="og:image" content="@/assets/metaImgFavorite.png" />
				<meta
					property="og:url"
					content="https://frontendschool6.github.io/react-project-7/#/favorite"
				/>
			</Helmet>
			<section className={S.section}>
				<h2 className={`${S.favoriteTitle} pl-[3rem]`}>내가 찜한 콘텐츠</h2>
				<span className={`${S.sectionTitle} pl-[3rem]`}>찜한 영화</span>
				<div className="pt-[0.5rem] pb-[2.215rem] px-[3rem] overflow-y-visible">
					<Swiper
						className="detailSwiper"
						slidesPerView={5}
						spaceBetween={15}
						slidesPerGroup={5}
						modules={[Navigation]}
						breakpoints={{
							480: { slidesPerView: 3 },
							768: { slidesPerView: 4 },
							1024: { slidesPerView: 5 },
						}}
						navigation={{
							prevEl: prevRefM.current,
							nextEl: nextRefM.current,
							keyboard: {
								enabled: true,
								onlyInViewport: false,
							},
						}}
						onInit={(swiper) => {
							handleSlideChange(swiper, setIsBeginningM, setIsEndM);
							if (swiper.isBeginning) {
								prevRefM.current.classList.add("swiper-button-disabled");
							}
						}}
						onSlideChange={(swiper) => {
							handleSlideChange(swiper, setIsBeginningM, setIsEndM);
						}}
					>
						{state.favoriteMovie.map((movie, index) => (
							<SwiperSlide key={index}>
								<Link to={`/contents/${movie.id}`}>
									<figure className={`pt-[0.5625rem] ${S.figureHoverEffect}`}>
										<img
											src={getPbImageURL(movie, "poster")}
											alt={movie.title}
										/>
										<figcaption className=" pt-[0.5651rem]">
											<h2>{movie.title}</h2>
										</figcaption>
									</figure>
								</Link>
							</SwiperSlide>
						))}
						<SwiperButton
							className={`swiper-button-prev ${
								!isBeginningM ? "opacity-60" : "opacity-0"
							}`}
							ref={prevRefM}
						/>
						<SwiperButton
							className={`swiper-button-next ${
								!isEndM ? "opacity-60" : "opacity-0"
							}`}
							ref={nextRefM}
						/>
					</Swiper>
				</div>
				<span className={`${S.sectionTitle}  pl-[3rem]`}> 찜한 프로그램</span>
				<div className="pt-[0.5rem] pb-[2.215rem] detailSwiper detailPagenation px-[3rem] overflow-y-visible">
					<Swiper
						className="detailSwiper"
						slidesPerView={5}
						spaceBetween={15}
						slidesPerGroup={5}
						modules={[Navigation]}
						breakpoints={{
							480: { slidesPerView: 3 },
							768: { slidesPerView: 4 },
							1024: { slidesPerView: 5 },
						}}
						navigation={{
							prevEl: prevRefP.current,
							nextEl: nextRefP.current,
							keyboard: {
								enabled: true,
								onlyInViewport: false,
							},
						}}
						onInit={(swiper) => {
							handleSlideChange(swiper, setIsBeginningP, setIsEndP);
							if (swiper.isBeginning) {
								prevRefP.current.classList.add("swiper-button-disabled");
							}
						}}
						onSlideChange={(swiper) => {
							handleSlideChange(swiper, setIsBeginningP, setIsEndP);
						}}
					>
						{state.favoriteProgram.map((program, index) => (
							<SwiperSlide key={index}>
								<Link to={`/contents/${program.id}`}>
									<figure className={`pt-[0.5625rem] ${S.figureHoverEffect}`}>
										<img
											src={getPbImageURL(program, "poster")}
											alt={program.title}
										/>
										<figcaption className=" pt-[0.5615rem]">
											<h2>{program.title}</h2>
										</figcaption>
									</figure>
								</Link>
							</SwiperSlide>
						))}
						<SwiperButton
							className={`swiper-button-prev ${
								!isBeginningP ? "opacity-60" : "opacity-0"
							}`}
							ref={prevRefP}
						/>
						<SwiperButton
							className={`swiper-button-next ${
								!isEndP ? "opacity-60" : "opacity-0"
							}`}
							ref={nextRefP}
						/>
					</Swiper>
				</div>
			</section>
		</main>
	);
}
