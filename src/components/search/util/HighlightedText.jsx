//@ 텍스트 강조 컴포넌트
export default function HighlightedText({ text, highlight }) {
	// 정규식을 이용해 텍스트를 분리합니다.
	const parts = text.split(new RegExp(`(${highlight})`, "gi"));
	return (
		<span className="whitespace-nowrap overflow-hidden text-ellipsis">
			{parts.map((part, i) =>
				part.toLowerCase() === highlight.toLowerCase() ? (
					<span key={i} className="text-red-400">
						{part}
					</span>
				) : (
					part
				)
			)}
		</span>
	);
}
