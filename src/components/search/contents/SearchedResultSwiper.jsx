import { getPbImageURL } from "@/utils/getPbImageURL";
import { arrayOf, bool, func, number, shape, string } from "prop-types";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperButton from "./../../../components/common/SwiperButton";
import S from "./../Search.module.css";

export function SearchedResultSwiper({
	contentCategory,
	setIsFullView, // isFullView를 전달받음
	setCurrentCategory,
	isFullView,
	currentCategory,
}) {
	//@ 페이지네이션 페이징
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	return (
		<Swiper
			slidesPerView={7}
			slidesPerGroup={7}
			spaceBetween={10}
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
				setIsBeginning(swiper.isBeginning);
				setIsEnd(swiper.isEnd);
			}}
			className={`mySwiper w-full searchResult overflow-y-visible relative pr-7 ${
				isFullView ? "hide-pagination" : ""
			}`}
		>
			{contentCategory.data.slice(0, 20).map((content) => (
				<SwiperSlide key={content.id} className="inline-block h-1/4">
					<Link to={`/contents/${content.id}`}>
						<img
							src={getPbImageURL(content, "poster")}
							alt={content.title}
							className="transition-opacity duration-100 ease-in-out inline-block"
						/>
						<p className={S.swiperContentsTitle}>{content.title}</p>
					</Link>
				</SwiperSlide>
			))}
			<SwiperButton
				className={`swiper-button-prev ${
					!isBeginning ? "opacity-60" : "opacity-0"
				}`}
				ref={prevRef}
			/>
			<SwiperButton
				className={`swiper-button-next ${!isEnd ? "opacity-60" : "opacity-0"}`}
				ref={nextRef}
			/>
			<button
				type="button"
				className="seeAllContents"
				onClick={() => {
					if (isFullView && currentCategory === contentCategory.title) {
						setCurrentCategory(null);
						setIsFullView(false);
					} else {
						setCurrentCategory(contentCategory.title);
						setIsFullView(true);
					}
				}}
			>
				{isFullView && currentCategory === contentCategory.title
					? "전체검색결과 돌아가기"
					: "전체보기"}
			</button>
		</Swiper>
	);
}

SearchedResultSwiper.propTypes = {
	contentCategory: shape({
		title: string.isRequired,
		data: arrayOf(
			shape({
				id: string.isRequired,
				title: string.isRequired,
				poster: string.isRequired,
			})
		).isRequired,
	}).isRequired,
	searchData: string.isRequired,
	handleSearchData: func.isRequired,
	setIsFullView: func.isRequired,
	setCurrentCategory: func.isRequired,
	isFullView: bool.isRequired,
	currentCategory: string,
};
