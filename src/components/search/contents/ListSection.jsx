import { arrayOf, func, shape, string } from "prop-types";
import useSearchStore from "../../../store/useSearchStore";
import CurrentTime from "../util/CurrentTime";
import S from "./../Search.module.css";
import RealtimeSearch from "./RealtimeSearch";
import RecentView from "./RecentView";
import XCircleIcon from "/assets/x-circle-icon.svg";

export default function ListSection() {
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
						<button className={S.resetButton} onClick={clearRecentSearches}>
							<span>모두 지우기</span>
							<span
								style={{
									backgroundImage: `url(${XCircleIcon})`,
									position: "relative",
								}}
								className={S.xIcon}
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

ListSection.propTypes = {
	profiles: arrayOf(
		shape({
			username: string,
		})
	),
	onSelect: func,
};
