import { Link } from "react-router-dom";
import pb from "@/api/pocketbase";
import { getPbImageURL } from "@/utils/getPbImageURL";
import S from "./Home.module.css";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import PropTypes from "prop-types";

export function MainList({ classTitle, listTitle, genre, genreId }) {
	const [contents, setContents] = useState([]);
	const [status, setStatus] = useState("pending");
	const [error, setError] = useState(null);

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
								nextEl: "#mainNextButton",
								prevEl: "#mainPrevButton",
								keyboard: true,
								onlyInViewport: false,
							}}
							pagination={{ clickable: true }}
							modules={[Navigation, Pagination]}
							tabIndex={0}
							className="overflow-y-visible mb-10 px-10"
						>
							{contentCategory.data
								.filter((movie) => movie.genre === genreId)
								.map((item) => (
									<SwiperSlide key={item.id} className={S.listContent}>
										<Link to={`contents/${item.id}`}>
											<img
												src={getPbImageURL(item, "poster")}
												alt={item.title}
											/>
											<p className={S.listName}>{item.title}</p>
										</Link>
									</SwiperSlide>
								))}
							<div
								className={`swiper-button-prev ${S.mainButtonPrev}`}
								id="mainPrevButton"
								onKeyDown={(e) => {
									if (e.key === "Enter") e.currentTarget.click();
								}}
								role="button"
								tabIndex={0}
							/>
							<div
								className={`swiper-button-next ${S.mainButtonNext}`}
								id="mainNextButton"
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
	);
}

MainList.propTypes = {
	classTitle: PropTypes.string.isRequired,
	listTitle: PropTypes.string.isRequired,
	genre: PropTypes.string.isRequired,
	genreId: PropTypes.string.isRequired,
};
