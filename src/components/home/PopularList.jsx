import SwiperButton from "@/components/common/SwiperButton";
import useContentsStore from "@/store/useContentsStore";
import { getPbImageURL } from "@/utils/getPbImageURL";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import S from "./Home.module.css";
import Spinner from "@/components/common/Spinner";
import { string } from "prop-types";

function PopularList({ heading, category }) {
	const { contents, status } = useContentsStore();

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
									nextEl: "#popularTvNextButton",
									prevEl: "#popularTvPrevButton",
									keyboard: true,
									onlyInViewport: false,
								}}
								pagination={{ clickable: true }}
								modules={[Navigation, Pagination]}
								tabIndex={0}
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
									className={`swiper-button-prev ${S.mainButtonPrev}`}
									id="popularTvPrevButton"
								/>
								<SwiperButton
									className={`swiper-button-next ${S.mainButtonNext}`}
									id="popularTvNextButton"
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
