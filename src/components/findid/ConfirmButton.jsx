import PropTypes from "prop-types";
import S from "./ConfirmButton.module.css";

function ConfirmButton({ type = "text", onClick, text }) {
	const className = type === "primary" ? S.primary : S.secondary;

	return (
		<button 
            type={type} 
            onClick={onClick} 
            className={S.confirmButton} 
            >
                {text}
        </button>
	);
}

ConfirmButton.propTypes = {
    onClick : PropTypes.func,
	type: PropTypes.oneOf(["submit", "button"]).isRequired, 
    text: PropTypes.string.isRequired,
};

export default ConfirmButton;
