import PropTypes from "prop-types";
import S from "./SnsLogin.module.css";

function SnsLogin({ type = "text", onClick, text,}) {
	// const className = type === "primary" ? S.primary : S.secondary;

	return (
		<button
			type={type}
			className={S.SnsLoginButton}
			// style={{
			// 	backgroundImage: `url(${bgImgSrc})`,
			// 	backgroundPosition: 30,
			// }}
			onClick={onClick}
		>
			<span>{text}</span>
		</button>
	);
}

SnsLogin.propTypes = {
	onClick: PropTypes.func,
	type: PropTypes.oneOf(["submit", "button"]).isRequired,
	text: PropTypes.string.isRequired,
	// bgImgSrc: PropTypes.any,
};

export default SnsLogin;
