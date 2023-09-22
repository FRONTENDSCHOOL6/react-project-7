import S from "./Category.module.css";
import useButtonStore from "./../../store/buttonStore";
import propTypes, { number, string, func } from "prop-types";

function NavButton({ content, index, id, activeIndex, setActiveIndex }) {
	const { buttonId, setButtonId } = useButtonStore();
	const { isButtonClicked, setIsButtonClicked } = useButtonStore();

	const handleButtonClick = (e) => {
		if (activeIndex === index) {
			setActiveIndex(null);
		} else {
			setActiveIndex(index);
			setButtonId(e.target.id);
			setIsButtonClicked(true);
		}
	};

	return (
		<button
			type="button"
			onClick={handleButtonClick}
			id={id}
			className={activeIndex === index ? `${S.buttonActive}` : `${S.button}`}
		>
			{content}
		</button>
	);
}

NavButton.propTypes = {
	content: string.isRequired,
	index: number.isRequired,
	id: string.isRequired,
	activeIndex: propTypes.oneOfType([propTypes.string, propTypes.number])
		.isRequired,
	setActiveIndex: func.isRequired,
};

export default NavButton;
