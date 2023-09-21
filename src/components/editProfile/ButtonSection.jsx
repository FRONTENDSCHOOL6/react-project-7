import { func } from "prop-types";
import Button from "./../common/Button/Buttons";

function ButtonSection({ handleSaveProfile, handleCancel }) {
	return (
		<div className="w-1/2 flex justify-between gap-3">
			<Button type="primary" onClick={handleSaveProfile} text="확인" />
			<Button type="secondary" onClick={handleCancel} text="취소" />
		</div>
	);
}

ButtonSection.propTypes = {
	handleSaveProfile: func.isRequired,
	handleCancel: func.isRequired,
};

export default ButtonSection;
