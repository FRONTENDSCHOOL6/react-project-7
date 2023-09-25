import { useNavigate } from "react-router-dom";
import authStore from "./../../store/useAuthStore";
import { func } from "prop-types";
import S from "./Header.module.css";
export default function LogoutPopUp({
	setShowLogoutPopup,
	handleShowLogoutPopup,
}) {
	const navigate = useNavigate();
	const { signOut } = authStore();
	return (
		<div className="fixed inset-0 bg-black opacity-[100%]">
			<div className={S.logoutWrapper}>
				<h2 className="py-4 px-4 text-white text-xl inline-block">
					로그아웃 하시겠습니까?
				</h2>
				<div className="flex justify-between items-center w-full mt-4">
					<button
						type="button"
						className="text-[#a3a3a3] flex-grow hover:text-white"
						onClick={async () => {
							await signOut();
							localStorage.removeItem("pocketbase_auth");
							localStorage.removeItem("selectedProfile");
							setShowLogoutPopup(false);
							navigate("/onboarding");
						}}
					>
						확인
					</button>
					<span className="text-[#a3a3a3]">|</span>
					<button
						type="button"
						className="text-[#a3a3a3] flex-grow hover:text-white"
						onClick={handleShowLogoutPopup}
					>
						취소{" "}
					</button>
				</div>
			</div>
		</div>
	);
}

LogoutPopUp.propTypes = {
	setShowLogoutPopup: func,
	handleShowLogoutPopup: func,
};
