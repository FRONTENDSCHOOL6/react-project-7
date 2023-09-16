function handleEnterKeyDown() {
	return (event) => {
		if (event.key === "Enter") {
			event.currentTarget.click();
		}
	};
}
export default handleEnterKeyDown;
