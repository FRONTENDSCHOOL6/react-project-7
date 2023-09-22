import { useNavigate } from "react-router-dom";

function NotFound() {
	const navigate = useNavigate();
	return (
		<div className="bg-black pt-[12%] pb-[8%] w-full items-center flex flex-col">
			<div className="text-center w-[5%] mb-10">
				<img
					className="inline-block w-full"
					src="/assets/not-found.svg"
					aria-hidden
				/>
			</div>
			<h2 className="text-white text-4xl font-semibold mb-[1%] tracking-wide">
				이런! 현재 해당 페이지를 찾을 수 없습니다.
			</h2>
			<div className="textBox text-center text-gray-400 text-2xl mb-[2%]  tracking-wider">
				<p>하지만 티빙에는 더 많은 티빙만의 오리지날 콘텐츠와</p>
				<p>실시간채널, TV프로그램, 영화 콘텐츠가 준비되어 있습니다.</p>
				<p>티빙에서 더 많은 콘텐츠를 즐겨보세요!</p>
			</div>
			<button
				className="bg-white w-[35%] h-20 font-medium text-2xl"
				type="button"
				onClick={() => navigate("/")}
			>
				티빙 홈으로 가기
			</button>
		</div>
	);
}

export default NotFound;
