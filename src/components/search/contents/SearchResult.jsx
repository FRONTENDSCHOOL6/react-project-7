import { useState } from "react";
import useSearchStore from "../../../store/useSearchStore";
import HighlightedText from "../util/HighlightedText";
import S from "./../Search.module.css";
import { SearchedResultSwiper } from "./SearchedResultSwiper";
import { SearchingResultSwiper } from "./SearchingResultSwiper";

//@ 검색 결과 컴포넌트
export default function SearchResult() {
	const {
		contents,
		allContents,
		searchData,
		hasSearched,
		setSearchData,
		setHasSearched,
		fetchData,
		addRecentSearch,
	} = useSearchStore();

	//@ 현재 카테고리
	const [currentCategory, setCurrentCategory] = useState(null);
	//@ 전체보기 여부
	const [isFullView, setIsFullView] = useState(false);
	const handleSearchData = async (content) => {
		if (!content.title) return;
		setSearchData(content.title);
		setHasSearched(true);
		await fetchData(content.title);
		addRecentSearch(content.title);
	};
	if (searchData && !hasSearched) {
		return (
			<>
				<SearchingResultSwiper contents={allContents} searchData={searchData} />
				<div className={`${S.searchResultWrapper}`}>
					<ul className="w-6/12 pl-0 pt-[1rem] list-none">
						{allContents.slice(6, 9).map((content) => (
							<li key={content.id} className={S.swiperList}>
								<button type="button" onClick={() => handleSearchData(content)}>
									{" "}
									<HighlightedText
										text={content.title}
										highlight={searchData}
									/>
								</button>
							</li>
						))}
					</ul>
				</div>
			</>
		);
	} else if (searchData && hasSearched) {
		return (
			<div className={`${S.searchResultWrapper}`}>
				{contents?.map((contentCategory) =>
					(!isFullView || currentCategory === contentCategory.title) &&
					contentCategory.data.length > 0 ? (
						<div
							key={contentCategory.title}
							className={`${S.searchResult} my-5 w-full h-full`}
						>
							<h3 className={`${S.resultTitle}`}>{contentCategory.title}</h3>
							<SearchedResultSwiper
								contentCategory={contentCategory}
								searchData={searchData}
								handleSearchData={handleSearchData}
								setIsFullView={setIsFullView}
								setCurrentCategory={setCurrentCategory}
								isFullView={isFullView}
								currentCategory={currentCategory}
							/>
						</div>
					) : null
				)}
			</div>
		);
	}
}
