import { Link } from "react-router-dom";
import pb from "@/api/pocketbase";
import { getPbImageURL } from "@/utils/getPbImageURL";
import S from "./Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import PropTypes from "prop-types";
import SwiperButton from "@/components/common/SwiperButton";
import useContentsStore from "@/store/useContentsStore";
import Spinner from "@/components/common/Spinner";

export default function MainList({ classTitle, listTitle, genre, genreId }) {
	const { contents, status } = useContentsStore();

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
								nextEl: "#mainNextButton",
								prevEl: "#mainPrevButton",
								keyboard: true,
								onlyInViewport: false,
							}}
							pagination={{ clickable: true }}
							modules={[Navigation, Pagination]}
							tabIndex={0}
							className="overflow-y-visible mb-[4%] px-10"
						>
							{contentCategory.data
								.filter((movie) => movie.genre === genreId)
								.map((item) => (
									<SwiperSlide key={item.id} className={S.listContent}>
										<Link to={`contents/${item.id}`}>
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
								className="swiper-button-prev ${S.mainButtonPrev}"
								id="mainPrevButton"
							></SwiperButton>
							<SwiperButton
								className={`swiper-button-next ${S.mainButtonNext}`}
								id="mainNextButton"
							></SwiperButton>
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
