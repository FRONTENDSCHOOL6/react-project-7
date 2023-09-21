import { useNavigate } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";

function ProfileEditButton() {
	const navigate = useNavigate();
	const { authState } = useAuthStore();
	return (
		<button
			type="button"
			className="block w-1/4 box-border border bg-black text-neutral-400 text-lg text-center px-0 py-3 border-solid border-[#4e4e4e] rounded"
			onClick={() => navigate(`/editprofiles/${authState?.user?.id}`)}
		>
			프로필 편집
		</button>
	);
}
export default ProfileEditButton;
