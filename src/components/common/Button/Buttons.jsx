import PropTypes from "prop-types";
import S from "./Button.module.css";

function Button({ onClick, type, text }) {
	const className = type === "primary" ? S.primary : S.secondary;

	return (
		<button
			type="button"
			onClick={onClick}
			className={`${S.button} ${className}`}
		>
			{text}
		</button>
	);
}

Button.propTypes = {
	onClick: PropTypes.func,
	type: PropTypes.oneOf(["primary", "secondary"]).isRequired,
	text: PropTypes.string.isRequired,
};

export default Button;
