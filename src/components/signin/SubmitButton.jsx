import PropTypes from "prop-types";
import S from "./SubmitButton.module.css";

function SubmitButton({ type = "text", onClick, text }) {
	const className = type === "primary" ? S.primary : S.secondary;

	return (
		<button type={type} onClick={onClick} className={S.SubmitButton}>
			{text}
		</button>
	);
}

SubmitButton.propTypes = {
	onClick: PropTypes.func,
	type: PropTypes.oneOf(["submit", "button"]).isRequired,
	text: PropTypes.string.isRequired,
};

export default SubmitButton;
