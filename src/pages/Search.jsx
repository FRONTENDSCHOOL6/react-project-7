import ListSection from "@/components/search/contents/ListSection";
import SearchResult from "@/components/search/contents/SearchResult";
import SearchSection from "@/components/search/contents/SearchSection";
import { Helmet } from "react-helmet-async";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useSearchStore from "../store/useSearchStore";
import S from "./Search.module.css";

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
