function separateComma(str) {
	if (!str) {
		return [];
	}

	// 쉼표로 문자열을 분리하여 배열로 반환
	const items = str.split(",").map((item) => item.trim());

	return items;
}

export default separateComma;
