//@ 작동 되는 코드
// import React, { useRef, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import pb from "@/api/pocketbase";
// import { getPbImageURL } from "@/utils/getPbImageURL";
// import S from "./Movie.module.css";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import useButtonStore from "@/store/buttonStore";

// export function NavButton({ content, index, id, activeIndex, setActiveIndex }) {
// 	const { buttonId, setButtonId } = useButtonStore();

// 	const handleButtonClick = (e) => {
// 		if (activeIndex === index) {
// 			setActiveIndex(null);
// 		} else {
// 			setActiveIndex(index);
// 			setButtonId(e.target.id);
// 		}
// 	};

// 	return (
// 		<button
// 			type="button"
// 			onClick={handleButtonClick}
// 			id={id}
// 			className={activeIndex === index ? `${S.buttonActive}` : `${S.button}`}
// 		>
// 			{content}
// 		</button>
// 	);
// }

// export function CategoryNav() {
// 	const [activeIndex, setActiveIndex] = useState(null);

// 	const [contents, setContents] = useState([]);
// 	const [status, setStatus] = useState("pending");
// 	const [error, setError] = useState(null);
// 	useEffect(() => {
// 		setStatus("loading");

// 		Promise.all([pb.collection("genre").getFullList()])
// 			.then(([genreList]) => {
// 				setContents([{ title: "영화 장르명", data: genreList }]);
// 				setStatus("success");
// 			})
// 			.catch((error) => {
// 				setError(error);
// 				setStatus("error");
// 			});
// 	}, []);

// 	return (
// 		<nav>
// 			<Swiper
// 				className="categoryNav px-[3.5%]"
// 				slidesPerView={8.5}
// 				slidesPerGroup={4}
// 				navigation={{
// 					nextEl: "#categoryNextButton",
// 					prevEl: "#categoryPrevButton",
// 					keyboard: true,
// 					onlyInViewport: false,
// 				}}
// 				modules={[Navigation]}
// 			>
// 				{contents?.map((contentCategory) =>
// 					contentCategory.data
// 						.filter((item) => item.movieCode && item.movieCode.trim() !== "")
// 						.map((item, index) => (
// 							<>
// 								<SwiperSlide key={item.id}>
// 									<div>
// 										<NavButton
// 											content={item.genreKR}
// 											index={index}
// 											id={item.id}
// 											activeIndex={activeIndex}
// 											setActiveIndex={setActiveIndex}
// 										/>
// 									</div>
// 								</SwiperSlide>
// 							</>
// 						))
// 				)}
// 				<div className="swiper-button-prev" id="categoryPrevButton"></div>
// 				<div className="swiper-button-next" id="categoryNextButton"></div>
// 			</Swiper>
// 		</nav>
// 	);
// }

// export function CategoryContent() {
// 	const { buttonId, setButtonId } = useButtonStore();
// 	const [contents, setContents] = useState([]);
// 	const [status, setStatus] = useState("pending");
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		setStatus("loading");

// 		Promise.all([pb.collection("movie").getFullList()])
// 			.then((movieList) => {
// 				setContents([{ title: "영화", data: movieList }]);
// 				setStatus("success");
// 			})
// 			.catch((error) => {
// 				setError(error);
// 				setStatus("error");
// 			});
// 	}, []);

// 	return (
// 		<>
// 			{contents?.map((contentCategory) =>
// 				contentCategory.data.map((item) =>
// 					item
// 						.filter((item) => item.genre === buttonId)
// 						.map((item) => (
// 							<div key={item.id} className="w-[20%]">
// 								<Link to={`contents/${item.id}`}>
// 									<img src={getPbImageURL(item, "poster")} alt={item.title} />
// 									<p className="text-gray200 text-xl mt-2  whitespace-nowrap overflow-hidden text-ellipsis">
// 										{item.title}
// 									</p>
// 								</Link>
// 							</div>
// 						))
// 				)
// 			)}
// 		</>
// 	);
// }

//! 실험 중인 코드
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pb from "@/api/pocketbase";
import { getPbImageURL } from "@/utils/getPbImageURL";
import S from "./Movie.module.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useButtonStore from "@/store/buttonStore";

export function NavButton({ content, index, id, activeIndex, setActiveIndex }) {
	const { buttonId, setButtonId } = useButtonStore();
	const { isButtonClicked, setIsButtonClicked } = useButtonStore();

	const handleButtonClick = (e) => {
		if (activeIndex === index) {
			setActiveIndex(null);
		} else {
			setActiveIndex(index);
			setButtonId(e.target.id);
			setIsButtonClicked(true);
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

export function CategoryContent() {
	//? 버튼 클릭에 관련된 변수
	const { buttonId, setButtonId } = useButtonStore();
	const { isButtonClicked, setIsButtonClicked } = useButtonStore();

	//? pb에서 데이터를 가져오는 변수
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
	if (isButtonClicked === true) {
		return (
			<>
				{contents?.map((contentCategory) =>
					contentCategory.data.map((item) =>
						item
							.filter((item) => item.genre === buttonId)
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
	} else {
		return (
			<>
				{contents?.map((contentCategory) =>
					contentCategory.data.map((item) =>
						item.map((item) => (
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
}
