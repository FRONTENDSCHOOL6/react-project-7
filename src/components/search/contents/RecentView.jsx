import XIcon from "/assets/search/x-icon.svg";
import useSearchStore from "../../../store/useSearchStore";

//@ 최근 검색어 컴포넌트
export default function RecentView({ searchTerm }) {
	const removeRecentSearch = useSearchStore(
		(state) => state.removeRecentSearch
	);
	const handleRemoveRecentSearch = () => {
		removeRecentSearch(searchTerm);
	};
	return (
		<li key={searchTerm} className="mt-2">
			<button className="whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer text-[#a6a6a6] text-[1.25rem]">
				{searchTerm}
			</button>
			<button
				className="min-w-[1rem] min-h-[1rem] bg-no-repeat bg-[50%_50%] opacity-70 leading-[normal] text-base cursor-pointer align-middle ml-4 pb-2"
				style={{
					backgroundImage: `url(${XIcon})`,
					position: "relative",
					bottom: "2px",
				}}
				onClick={handleRemoveRecentSearch}
			></button>
		</li>
	);
}
