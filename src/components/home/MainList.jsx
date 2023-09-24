import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { getPbImageURL } from "./../../utils/getPbImageURL";
import S from "./Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { string } from "prop-types";
import SwiperButton from "./../common/SwiperButton";
import useContentsStore from "./../../store/useContentsStore";
import Spinner from "./../common/Spinner";

function MainList({ classTitle, listTitle, genre, genreId }) {
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
		<section className={`${classTitle} mainSwiper`}>
			<h3 className={`${classTitle}List ${S.listTitle}`}>{listTitle}</h3>
			{contents?.map(
				(contentCategory) =>
					contentCategory.title === `${genre}` && (
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
							slidesPerGroup={7}
							spaceBetween={10}
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
								console.log(swiper);
								handleSlideChange(swiper);
							}}
							className="mySwiper overflow-y-visible mb-[4%] px-10"
						>
							{contentCategory.data
								.filter((movie) => movie.genre === genreId)
								.map((item) => (
									<SwiperSlide key={item.id} className={S.listContent}>
										<Link to={`/contents/${item.id}`}>
											<img
												className="w-full"
												src={getPbImageURL(item, "poster")}
												alt={item.title}
											/>
											<p className={S.listName}>{item.title}</p>
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
	);
}

MainList.propTypes = {
	classTitle: string.isRequired,
	listTitle: string.isRequired,
	genre: string.isRequired,
	genreId: string.isRequired,
};

export default MainList;
