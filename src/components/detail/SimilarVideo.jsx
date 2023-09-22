import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { string, shape, arrayOf } from "prop-types";
import { Navigation, Pagination } from "swiper/modules";
import S from "../detail/Contents.module.css";

export default function SimilarSection({ similar }) {
	return (
		<section className={S.section}>
			<span className={S.sectionTitle}>비슷한 TV 프로그램</span>
			<div className={S.programFont}>
				<Swiper
					className="detailSwiper detailPagenation px-[3rem]  overflow-y-visible   "
					modules={[Navigation, Pagination]}
					slidesPerView={7}
					spaceBetween={10}
					slidesPerGroup={7}
					tabIndex={0}
					freeMode={true}
					breakpoints={{
						480: { slidesPerView: 5 },
						768: { slidesPerView: 6 },
						1024: { slidesPerView: 7 },
					}}
					navigation={{
						nextEl: "#nextButton",
						prevEl: "#prevButton",
						keyboard: {
							enabled: true,
							onlyInViewport: false,
						},
					}}
					pagination={{
						clickable: true,
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
					<div
						className="swiper-button-prev"
						id="prevButton"
						role="button"
						tabIndex={0}
						onKeyDown={(e) => {
							if (e.key === "Enter") e.currentTarget.click();
						}}
					/>
					<div
						className="swiper-button-next"
						id="nextButton"
						role="button"
						tabIndex={0}
						onKeyDown={(e) => {
							if (e.key === "Enter") e.currentTarget.click();
						}}
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
