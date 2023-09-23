import { getPbImageURL } from "@/utils/getPbImageURL";
import { arrayOf, func, number, shape, string } from "prop-types";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import HighlightedText from "../util/HighlightedText";
import S from "./../Search.module.css";

function SearchingResultSwiper({ contents, searchData }) {
	return (
		<Swiper
			slidesPerView={6}
			spaceBetween={10}
			className="mySwiper w-full mt-8"
			breakpoints={{
				480: { slidesPerView: 5.1 },
				768: { slidesPerView: 6.1 },
			}}
		>
			{contents.slice(0, 6).map((content) => (
				<SwiperSlide key={content.id} className="inline-block h-1/4">
					<Link to={`/contents/${content.id}`}>
						<img
							src={getPbImageURL(content, "poster")}
							alt={content.title}
							className="transition-opacity duration-100 ease-in-out inline-block"
						/>
						<p className={S.swiperIncludeText}>
							<HighlightedText text={content.title} highlight={searchData} />
						</p>
					</Link>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
export default SearchingResultSwiper;

SearchingResultSwiper.propTypes = {
	contents: arrayOf(
		shape({
			id: number,
			title: string,
			poster: string,
		})
	),
	searchData: string,
	handleSearchData: func,
};
