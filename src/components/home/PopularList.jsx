import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButton from "./../common/SwiperButton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import S from "./Home.module.css";
import Spinner from "./../common/Spinner";
import useContentsStore from "./../../store/useContentsStore";
import { getPbImageURL } from "./../../utils/getPbImageURL";
import { string } from "prop-types";

function PopularList({ heading, category }) {
	const { contents, status } = useContentsStore();
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	const handleSlideChange = (swiper) => {
		setIsBeginning(swiper.isBeginning);
		setIsEnd(swiper.isEnd);
	};
	useEffect(() => {
		if (prevRef.current || nextRef.current) {
			if (isBeginning) {
				prevRef.current.classList.add("swiper-button-disabled");
			} else {
				prevRef.current.classList.remove("swiper-button-disabled");
			}

			if (isEnd) {
				nextRef.current.classList.add("swiper-button-disabled");
			} else {
				nextRef.current.classList.remove("swiper-button-disabled");
			}
		}
	}, [isBeginning, isEnd]);

	if (status === "loading") {
		return <Spinner />;
	}

	return (
		<>
			<section className="mainSwiper popular">
				<h3 className={S.popularTitle}>{heading}</h3>
				{contents?.map(
					(contentCategory) =>
						contentCategory.title === category && (
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
									prevEl: prevRef.current,
									nextEl: nextRef.current,
									keyboard: true,
									onlyInViewport: false,
								}}
								pagination={{ clickable: true }}
								modules={[Navigation, Pagination]}
								onInit={(swiper) => {
									handleSlideChange(swiper);
									if (swiper.isBeginning) {
										prevRef.current.classList.add("swiper-button-disabled");
									}
								}}
								onSlideChange={(swiper) => {
									handleSlideChange(swiper);
								}}
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
								<SwiperButton
									className={`swiper-button-prev ${
										!isBeginning ? "opacity-60" : "opacity-0"
									} ${S.mainButtonPrev}`}
									ref={prevRef}
								/>
								<SwiperButton
									className={`swiper-button-next ${
										!isEnd ? "opacity-60" : "opacity-0"
									} ${S.mainButtonNext}`}
									ref={nextRef}
								/>
							</Swiper>
						)
				)}
			</section>
		</>
	);
}

PopularList.propTypes = {
	heading: string.isRequired,
	category: string.isRequired,
};

export default PopularList;
