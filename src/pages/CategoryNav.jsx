import React, { useRef, useEffect, useState } from "react";
import pb from "@/api/pocketbase";
import { getPbImageURL } from "@/utils/getPbImageURL";
import S from "./Movie.module.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export function NavButton({ content, index, id, activeIndex, setActiveIndex }) {
	// const [movieList, setMovieList] = useState(null);

	const handleButtonClick = (e) => {
		if (activeIndex === index) {
			setActiveIndex(null);
		} else {
			setActiveIndex(index);
		}
	};

	return (
		<button
			type="button"
			onClick={handleButtonClick}
			id={id}
			className={activeIndex === index ? `${S.buttonActive}` : `${S.button}`}
		>
			{content}
		</button>
	);
}

export function CategoryNav() {
	const [activeIndex, setActiveIndex] = useState(null);

	const [contents, setContents] = useState([]);
	const [status, setStatus] = useState("pending");
	const [error, setError] = useState(null);
	useEffect(() => {
		setStatus("loading");

		Promise.all([pb.collection("genre").getFullList()])
			.then(([genreList]) => {
				setContents([{ title: "영화 장르명", data: genreList }]);
				setStatus("success");
			})
			.catch((error) => {
				setError(error);
				setStatus("error");
			});
	}, []);

	return (
		<nav>
			<Swiper
				className="categoryNav px-[3.5%]"
				slidesPerView={8.5}
				slidesPerGroup={4}
				navigation={{
					nextEl: "#categoryNextButton",
					prevEl: "#categoryPrevButton",
					keyboard: true,
					onlyInViewport: false,
				}}
				modules={[Navigation]}
			>
				{contents?.map((contentCategory) =>
					contentCategory.data
						.filter((item) => item.movieCode && item.movieCode.trim() !== "")
						.map((item, index) => (
							<>
								<SwiperSlide key={item.id}>
									<div>
										<NavButton
											content={item.genreKR}
											index={index}
											id={item.id}
											activeIndex={activeIndex}
											setActiveIndex={setActiveIndex}
										/>
									</div>
								</SwiperSlide>
							</>
						))
				)}
				<div className="swiper-button-prev" id="categoryPrevButton"></div>
				<div className="swiper-button-next" id="categoryNextButton"></div>
			</Swiper>
		</nav>
	);
}

export function CategoryContent({ genreId }) {
	const [contents, setContents] = useState([]);
	const [status, setStatus] = useState("pending");
	const [error, setError] = useState(null);

	useEffect(() => {
		setStatus("loading");

		Promise.all([pb.collection("movie").getFullList()])
			.then((movieList) => {
				setContents([{ title: "영화", data: movieList }]);
				setStatus("success");
			})
			.catch((error) => {
				setError(error);
				setStatus("error");
			});
	}, []);

	return (
		<>
			{contents?.map((contentCategory) =>
				contentCategory.data.map((item) =>
					item
						.filter((item) => item.genre === genreId)
						.map((item) => (
							<div key={item.id} className="w-[20%]">
								<Link to={`contents/${item.id}`}>
									<img src={getPbImageURL(item, "poster")} alt={item.title} />
									<p className="text-gray200 text-xl mt-2  whitespace-nowrap overflow-hidden text-ellipsis">
										{item.title}
									</p>
								</Link>
							</div>
						))
				)
			)}
		</>
	);
}
