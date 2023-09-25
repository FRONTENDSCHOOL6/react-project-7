//@ 현재 시간 표시 컴포넌트
export default function CurrentTime() {
	const now = new Date();
	const year = now.getFullYear();
	const month = now.getMonth() + 1; // 월은 0부터 시작하므로 +1을 해줍니다.
	const date = now.getDate();

	let hours = now.getHours();
	let minutes = now.getMinutes();

	// AM/PM 표시를 위해 시간을 조정합니다.
	const ampm = hours >= 12 ? "오후" : "오전";

	//12시간제로 변경
	hours %= 12;
	hours = hours ? hours : 12; //0시는 보통 "12"로 표기하기 때문에

	// 분이 한 자리수일 경우 앞에 "0"을 붙여줍니다.
	minutes = minutes < 10 ? "0" + minutes : minutes;

	return (
		<span className="block mt-4 mb-4 font-[0.75rem] text-[#646464]">
			{`${year}.${month}.${date} ${ampm} ${hours}:${minutes} 기준`}
		</span>
	);
}
