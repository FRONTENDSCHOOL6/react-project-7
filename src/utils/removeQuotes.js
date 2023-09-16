function removeQuotes(str) {
	if (!str) {
		return str;
	}

	// 큰따옴표(")를 정규 표현식을 사용하여 모두 제거
	return str.replace(/"/g, "");
}

export default removeQuotes;
