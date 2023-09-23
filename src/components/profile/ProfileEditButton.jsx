import useStorage from "@/hooks/useStorage";
import { useNavigate } from "react-router-dom";
import S from "./Profile.module.css";
function ProfileEditButton() {
	const navigate = useNavigate();
	const { storageData } = useStorage("pocketbase_auth");
	return (
		<button
			type="button"
			className={S.profileEditButton}
			onClick={() => navigate(`/editprofiles/${storageData?.model?.id}`)}
		>
			프로필 편집
		</button>
	);
}
export default ProfileEditButton;
