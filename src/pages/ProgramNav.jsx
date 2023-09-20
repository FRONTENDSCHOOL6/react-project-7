//! 실험 중인 코드
import React, { useRef, useEffect, useState } from "react";
import pb from "@/api/pocketbase";
import { getPbImageURL } from "@/utils/getPbImageURL";
import S from "./Program.module.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
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

export function ProgramNav() {
	const [activeIndex, setActiveIndex] = useState(null);

	const [contents, setContents] = useState([]);
	const [status, setStatus] = useState("pending");
	const [error, setError] = useState(null);
	useEffect(() => {
		setStatus("loading");

		Promise.all([pb.collection("genre").getFullList()])
			.then(([genreList]) => {
				setContents([{ title: "프로그램 장르명", data: genreList }]);
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
				className="programNav px-[3.5%]"
				slidesPerView={7}
				breakpoints={{
					480: {
						slidesPerView: 4,
					},
					768: {
						slidesPerView: 5,
					},
					1024: {
						slidesPerView: 6,
					},
				}}
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
						.filter(
							(item) => item.programCode && item.programCode.trim() !== ""
						)
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

export function ProgramContent() {
	//? 버튼 클릭에 관련된 변수
	const { buttonId, setButtonId } = useButtonStore();
	const { isButtonClicked, setIsButtonClicked } = useButtonStore();

	//? pb에서 데이터를 가져오는 변수
	const [contents, setContents] = useState([]);
	const [status, setStatus] = useState("pending");
	const [error, setError] = useState(null);

	useEffect(() => {
		setStatus("loading");

		Promise.all([pb.collection("program").getFullList()])
			.then((programList) => {
				setContents([{ title: "TV 프로그램", data: programList }]);
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
								<div key={item.id} className={S.listContent}>
									<Link to={`/contents/${item.id}`} className={S.listContent}>
										<img src={getPbImageURL(item, "poster")} alt={item.title} />
										<p className="text-xl mt-2  whitespace-nowrap overflow-hidden text-ellipsis">
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
							<div key={item.id} className={S.listContent}>
								<Link to={`/contents/${item.id}`}>
									<img src={getPbImageURL(item, "poster")} alt={item.title} />
									<p className="text-xl mt-2  whitespace-nowrap overflow-hidden text-ellipsis">
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