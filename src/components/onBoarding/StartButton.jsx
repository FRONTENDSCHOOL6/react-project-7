import { useNavigate } from "react-router-dom";
import { string } from "prop-types";

function StartButton({ className }) {
	//@ 버튼 클릭 시 로그인 페이지로 이동
	const navigate = useNavigate();
	const navigateToLogin = () => {
		navigate("/signinlist");
	};
	return (
		<>
			<button type="button" onClick={navigateToLogin} className={className}>
				지금 바로, 타잉을 플레이 하세요!
			</button>
		</>
	);
}

StartButton.propTypes = {
	className: string.isRequired,
};

export default StartButton;
