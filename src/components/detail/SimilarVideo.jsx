import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { string, shape, arrayOf } from "prop-types";
import { Navigation, Pagination } from "swiper/modules";
import S from "../detail/Contents.module.css";
import SwiperButton from "../../components/common/SwiperButton";

export default function SimilarSection({ similar }) {
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

	return (
		<section className={S.section}>
			<span className={S.sectionTitle}>비슷한 TV 프로그램</span>
			<div className={S.programFont}>
				<Swiper
					className="detailSwiper detailPagenation px-[3rem]  overflow-y-visible  "
					slidesPerView={7}
					spaceBetween={10}
					slidesPerGroup={7}
					breakpoints={{
						480: { slidesPerView: 5 },
						768: { slidesPerView: 6 },
						1024: { slidesPerView: 7 },
					}}
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
				>
					{similar.map((similarItem, index) => (
						<SwiperSlide key={index}>
							<figure className={`pt-[0.5625rem] ${S.figureHoverEffect}`}>
								<img
									src={similarItem.thumbUrl}
									alt={`Episode Thumbnail ${index}`}
								></img>
								<figcaption className=" pt-[0.5625rem]">
									<h4>{similarItem.info}</h4>
								</figcaption>
							</figure>
						</SwiperSlide>
					))}
					<SwiperButton
						className={`swiper-button-prev ${
							!isBeginning ? "opacity-60" : "opacity-0"
						}`}
						ref={prevRef}
					/>
					<SwiperButton
						className={`swiper-button-next ${
							!isEnd ? "opacity-60" : "opacity-0"
						}`}
						ref={nextRef}
					/>
				</Swiper>
			</div>
		</section>
	);
}

SimilarSection.propTypes = {
	similar: arrayOf(
		shape({
			thumbUrl: string.isRequired,
			info: string.isRequired,
		})
	).isRequired,
};
