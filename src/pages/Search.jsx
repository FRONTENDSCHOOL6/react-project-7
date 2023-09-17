import { Helmet } from "react-helmet-async";
import S from "./Search.module.css";
import SearchIcon from "/assets/search.png";
import XCircleIcon from "/assets/x-circle-icon.svg";
import { getPbImageURL } from "@/utils/getPbImageURL";
import useSearchStore from "../store/useSearchStore";
import debounce from "../utils/debounce";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { Link } from "react-router-dom";
import HighlightedText from "../components/search/util/HighlightedText";
import CurrentTime from "../components/search/util/CurrentTime";
import RecentView from "../components/search/contents/RecentView";
import RealtimeSearch from "../components/search/contents/RealtimeSearch";

//@ 검색창 부분 컴포넌트
function SearchSection() {
	const {
		searchData,
		setSearchData,
		fetchData,
		setHasSearched,
		hasSearched,
		addRecentSearch,
	} = useSearchStore();

	const handleInputChange = (e) => {
		const query = e.target.value;
		setSearchData(query);
		setHasSearched(false);
		debounce(async () => {
			if (!hasSearched) {
				fetchData(query);
			}
		}, 300)();
	};

	const handleSearch = async (e) => {
		e.preventDefault();
		setHasSearched(true);
		await fetchData(searchData);
		addRecentSearch(searchData);
	};

	return (
		<div className={`${S.searchWrapper}`}>
			<form onSubmit={handleSearch} className="flex justify-between  w-full">
				{" "}
				<label htmlFor="search" className="sr-only">
					컨텐츠 검색
				</label>
				<input
					type="text"
					id="search"
					placeholder="제목, 인물명을 입력해보세요."
					className={`${S.searchInput} flex-grow`}
					value={searchData}
					onChange={handleInputChange}
				/>
				<button
					type="submit"
					className="w-[2.375rem] h-[2.375rem] bg-cover self-center ml-2"
					style={{ backgroundImage: SearchIcon && `url(${SearchIcon})` }}
				></button>
			</form>
		</div>
	);
}
//@ 리스트 부분 컴포넌트
function ListSection() {
	const recentSearches = useSearchStore((state) => state.recentSearches);
	const clearRecentSearches = useSearchStore(
		(state) => state.clearRecentSearches
	);
	const realtimeSearch = [
		{ id: 1, title: "신병" },
		{ id: 2, title: "아스달 연대기" },
		{ id: 3, title: "스트릿 우먼 파이터 시즌2" },
		{ id: 4, title: "나는 SOLO" },
		{ id: 5, title: "남남" },
		{ id: 6, title: "아스달 여대기" },
		{ id: 7, title: "짱구는 못말려23" },
		{ id: 8, title: "아라문의 검" },
		{ id: 9, title: "뭉쳐야 찬다2" },
		{ id: 10, title: "힙하게" },
	];
	return (
		<div className={`${S.listWrapper}`}>
			<div className={`${S.recentViewWrapper} flex-grow`}>
				<div className="flex items-center">
					<h3 className="text-[#dedede] text-3xl">최근 검색어</h3>
					{recentSearches.length > 0 && (
						<button
							className="text-[1.175rem] font-normal text-[gray] leading-[normal] ml-[1.174rem] inline-flex pt-1"
							onClick={clearRecentSearches}
						>
							<span>모두 지우기</span>
							<span
								style={{
									backgroundImage: `url(${XCircleIcon})`,
									position: "relative",
								}}
								className="w-[1.175rem] h-[1.175rem] inline-block bg-no-repeat bg-[50%_50%] bg-contain ml-[0.5rem] pt-[0.5rem] leading-normal"
							></span>
						</button>
					)}
				</div>
				{recentSearches.length > 0 ? (
					<ul className="w-full mt-8">
						{recentSearches.map((searchTerm, index) => (
							<RecentView key={index} searchTerm={searchTerm} />
						))}
					</ul>
				) : (
					<div className="text-slate-300 mt-8 text-xl">
						검색 내역이 없습니다.
					</div>
				)}
			</div>
			<div className={`${S.popularViewWrapper} flex-grow`}>
				<h3 className="text-[#dedede] text-3xl">실시간 검색어</h3>
				<ul className="mt-8">
					{realtimeSearch &&
						realtimeSearch.map((item) => (
							<RealtimeSearch key={item.id} item={item} />
						))}
					<CurrentTime className="" />
				</ul>
			</div>
		</div>
	);
}

function SearchResult() {
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

	//@ 페이지네이션 페이징
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);

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
			<div className={`${S.searchResultWrapper}`}>
				<Swiper
					slidesPerView={6}
					spaceBetween={10}
					className="mySwiper w-full"
					breakpoints={{
						480: { slidesPerView: 5.1 },
						768: { slidesPerView: 6.1 },
					}}
				>
					{allContents.slice(0, 6).map((content) => (
						<SwiperSlide key={content.id} className="inline-block h-1/4">
							<Link to={`/contents/${content.id}`}>
								<img
									src={getPbImageURL(content, "poster")}
									alt={content.title}
									className="transition-opacity duration-100 ease-in-out inline-block"
								/>
								<p className="py-2 mt-1 text-[#dedede] opacity-70 text-base text-left whitespace-nowrap overflow-hidden text-ellipsis">
									<HighlightedText
										text={content.title}
										highlight={searchData}
									/>
								</p>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
				<ul className="w-6/12 pl-0 pt-[1rem] list-none">
					{allContents.slice(6, 9).map((content) => (
						<li
							key={content.id}
							className="text-base text-[#dedede] opacity-70 transition-[color] duration-[0.1s] leading-normal mx-0 my-3 p-0"
						>
							<button type="button" onClick={() => handleSearchData(content)}>
								{" "}
								<HighlightedText text={content.title} highlight={searchData} />
							</button>
						</li>
					))}
				</ul>
			</div>
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
									nextEl: "#nextButton",
									prevEl: "#prevButton",
									keyboard: {
										enabled: true,
										onlyInViewport: false,
									},
								}}
								pagination={{ clickable: true }}
								modules={[Navigation, Pagination]}
								onSlideChange={(swiper) => {
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
											<p className="py-2 mt-2 text-[#dedede] opacity-70 text-base text-left whitespace-nowrap overflow-hidden text-ellipsis">
												{content.title}
											</p>
										</Link>
									</SwiperSlide>
								))}
								{!isBeginning && (
									<div
										className="swiper-button-prev"
										id="prevButton"
										role="button"
										tabIndex={0}
										onKeyDown={(e) => {
											if (e.key === "Enter") e.currentTarget.click();
										}}
									/>
								)}
								{!isEnd && (
									<div
										className="swiper-button-next"
										id="nextButton"
										role="button"
										tabIndex={0}
										onKeyDown={(e) => {
											if (e.key === "Enter") e.currentTarget.click();
										}}
									/>
								)}
								<button
									type="button"
									className="seeAllContents"
									onClick={() => {
										if (
											isFullView &&
											currentCategory === contentCategory.title
										) {
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
						</div>
					) : null
				)}
			</div>
		);
	}
}

function Search() {
	const { searchData } = useSearchStore();
	return (
		<>
			<Helmet>
				<title>Search - Taing</title>
			</Helmet>
			<div className={`${S.container}`}>
				<div className={`${S.main} `}>
					<SearchSection />
					{searchData ? <SearchResult /> : <ListSection />}
				</div>
			</div>
		</>
	);
}

export default Search;
