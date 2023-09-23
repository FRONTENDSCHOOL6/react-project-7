import { arrayOf, func, shape, string } from "prop-types";
import HighlightedText from "../util/HighlightedText";
import S from "./../Search.module.css";

export default function SearchingResultList({
	contents,
	searchData,
	handleSearchData,
}) {
	return (
		<div className={`${S.searchResultWrapper}`}>
			<ul className="w-6/12 pl-0 pt-[1rem] list-none">
				{contents.slice(6, 9).map((content) => (
					<li key={content.id} className={S.swiperList}>
						<button type="button" onClick={() => handleSearchData(content)}>
							{" "}
							<HighlightedText text={content.title} highlight={searchData} />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

SearchingResultList.propTypes = {
	contents: arrayOf(
		shape({
			id: string.isRequired,
			title: string.isRequired,
			poster: string.isRequired,
		})
	).isRequired,
	searchData: string.isRequired,
	handleSearchData: func.isRequired,
};
