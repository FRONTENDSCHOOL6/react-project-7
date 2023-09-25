import PropTypes from "prop-types";
import S from "./LoginButton.module.css";

function LoginButton({ type = "text", onClick, text }) {
	const className = type === "primary" ? S.primary : S.secondary;

	return (
		<button 
            type={type} 
            onClick={onClick} 
            className={S.LoginButton}>
			{text}
		</button>
	);
}

LoginButton.propTypes = {
	onClick: PropTypes.func,
	type: PropTypes.oneOf(["submit", "button"]).isRequired,
	text: PropTypes.string.isRequired,
};

export default LoginButton;
