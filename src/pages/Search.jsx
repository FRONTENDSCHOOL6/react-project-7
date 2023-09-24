import ListSection from "@/components/search/contents/ListSection";
import SearchResult from "@/components/search/contents/SearchResult";
import SearchSection from "@/components/search/contents/SearchSection";
import { Helmet } from "react-helmet-async";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useSearchStore from "../store/useSearchStore";
import S from "./../components/search/Search.module.css";
function Search() {
	const { searchData } = useSearchStore();
	return (
		<>
			<Helmet>
				<title>타잉 7조 - 검색 페이지</title>
				<meta
					name="description"
					content="멋쟁이 사자처럼 6기 7조의 파이널 프로젝트 - 티빙 클론코딩 검색 페이지"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="타잉 검색 페이지" />
				<meta property="og:description" content="프로젝트 타잉 검색 페이지" />
				<meta
					property="og:image"
					content="https://github.com/FRONTENDSCHOOL6/react-project-7/assets/101504272/f44b38e2-04e6-4828-9ce5-41c009b5dfca"
				/>
				<meta
					property="og:url"
					content="https://frontendschool6.github.io/react-project-7/#/search"
				/>
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
