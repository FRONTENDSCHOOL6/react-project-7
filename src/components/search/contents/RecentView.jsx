import XIcon from "/assets/x-icon.svg";
import useSearchStore from "../../../store/useSearchStore";
import { string } from "prop-types";
import S from "./../Search.module.css";
//@ 최근 검색어 컴포넌트
export default function RecentView({ searchTerm }) {
	const removeRecentSearch = useSearchStore(
		(state) => state.removeRecentSearch
	);

	const handleRemoveRecentSearch = () => {
		removeRecentSearch(searchTerm); // 해당 검색어만 삭제하도록 수정
	};
	return (
		<li key={searchTerm} className="mt-2">
			<button className={S.recentViewItem}>{searchTerm}</button>
			<button
				className={S.xButton}
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

RecentView.propTypes = {
	searchTerm: string.isRequired,
};
