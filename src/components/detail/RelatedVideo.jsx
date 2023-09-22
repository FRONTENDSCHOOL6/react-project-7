import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { string, arrayOf, func, any, shape } from "prop-types";
import { Navigation, Pagination } from "swiper/modules";
import S from "../detail/Contents.module.css";
import LoopBtn from "../detail/EpisodeToggle";

export default function EpisodeSection({
	state,
	setState,
	title,
	episodeThumbs,
	sortKey,
}) {
	const [isSorted, setIsSorted] = useState(true);
	const [isToggled, setIsToggled] = useState(false);

	const handleToggle = () => {
		setIsToggled(!isToggled);
	};

	const handleSortAsc = () => {
		const sortedEpisodes = [...state.episodes].sort((a, b) => {
			const titleA = parseInt(a.title.split(",")[0]);
			const titleB = parseInt(b.title.split(",")[0]);

			return titleA - titleB;
		});

		setState((prevState) => ({
			...prevState,
			episodes: sortedEpisodes,
		}));
		setIsSorted(true);
	};

	const handleSortDesc = () => {
		const sortedEpisodes = [...state.episodes].sort((a, b) => {
			const titleA = parseInt(a.title.split(",")[0]);
			const titleB = parseInt(b.title.split(",")[0]);

			return titleB - titleA;
		});

		setState((prevState) => ({
			...prevState,
			episodes: sortedEpisodes,
		}));
		setIsSorted(false);
	};

	return (
		<section className={S.section}>
			<hr className="border-gray400" />
			<div className={S.sectionDiv}>
				<button className={S.sectionTitle} type="submit">
					{title}
					<div>
						{episodeThumbs.map((imgUrl, index) => (
							<img
								key={index}
								src={imgUrl}
								alt={`Episode Thumbnail ${index}`}
							/>
						))}
					</div>
				</button>

				<div className={S.sortBtn}>
					<button
						className={`${isSorted ? `${S.asc}` : `${S.desc}`}`}
						type="submit"
						onClick={handleSortAsc}
					>
						첫화부터
					</button>
					<button
						className={`pl-[1.375rem] mr-[2.375rem] ${
							!isSorted ? `${S.asc}` : `${S.desc}`
						}`}
						type="submit"
						onClick={handleSortDesc}
					>
						최신화부터
					</button>
					<div className="flex items-center">
						<span
							className={` pr-[0.5rem] ${
								isToggled ? `${S.playOn}` : `${S.playOff}`
							}`}
						>
							연속재생
						</span>
						<LoopBtn isToggled={isToggled} onToggle={handleToggle} />
					</div>
				</div>
			</div>
			<div className=" w-full font-semibold">
				<Swiper
					className="px-[3rem] detailSwiper"
					key={sortKey}
					spaceBetween={10}
					modules={[Pagination, Navigation]}
					slidesPerView={4}
					tabIndex={0}
					breakpoints={{
						480: { slidesPerView: 2 },
						768: { slidesPerView: 3 },
						1024: { slidesPerView: 4 },
					}}
					navigation={{
						nextEl: "#nextButton",
						prevEl: "#prevButton",
						keyboard: {
							enabled: true,
							onlyInViewport: false,
						},
					}}
				>
					{state.episodes.map((episode, index) => (
						<SwiperSlide key={index}>
							<figure className={`pt-[0.5625rem] ${S.figureHoverEffect}`}>
								<img
									src={episode.thumbUrl}
									alt={`Episode Thumbnail ${index}`}
								/>
								<figcaption className=" pt-[0.5625rem]">
									<h4 className="text-white text-lg">{episode.title}</h4>
									<p>{episode.info}</p>
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
EpisodeSection.propTypes = {
	state: shape({
		episodes: arrayOf(
			shape({
				title: string.isRequired,
			})
		).isRequired,
	}).isRequired,
	setState: func.isRequired,
	title: string.isRequired,
	episodeThumbs: arrayOf(string).isRequired,
	handleClick: func.isRequired,
	sortKey: any.isRequired,
};
