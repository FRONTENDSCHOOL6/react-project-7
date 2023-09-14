import useSearchStore from "../../../store/useSearchStore";

//@ 인기 검색어 컴포넌트
export default function RealtimeSearch({ item }) {
	const { fetchData, setSearchData, setHasSearched } = useSearchStore();

	const handleTitleClick = async () => {
		setSearchData(item.title);
		setHasSearched(true);
		await fetchData(item.title);
	};
	return (
		<li
			key={item.id}
			className="list-none m-2 text-lg text-gray-300 transition-colors duration-100 leading-relaxed"
		>
			<button
				type="button"
				className="bg-transparent cursor-pointer flex items-center text-gray-400 transition-colors duration-100 ease-linear"
				onClick={handleTitleClick}
			>
				<span className="text-left font-normal text-lg inline-block text-red-500">
					{item.id}
				</span>
				<h3 className="p-0 ml-5 my-1.5 cursor-pointer text-xl text-[#a6a6a6]">
					{item.title}
				</h3>
			</button>
		</li>
	);
}
