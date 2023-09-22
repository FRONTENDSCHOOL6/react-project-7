import useSearchStore from "../../../store/useSearchStore";
import debounce from "../../../utils/debounce";
import S from "./../Search.module.css";
import SearchIcon from "/assets/search.png";

//@ 검색창 부분 컴포넌트
export default function SearchSection() {
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
					className={`${S.searchInput}`}
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
