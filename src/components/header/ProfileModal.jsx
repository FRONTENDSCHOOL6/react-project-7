import { useNavigate } from "react-router-dom";
import S from "./Header.module.css";
import profileIcon from "/assets/profile.png";
import useStorage from "./../../hooks/useStorage";
import { bool, func, string } from "prop-types";

export default function ProfileModal({
	setIsDivHovered,
	isImgHovered,
	isDivHovered,
	handleLogoutClick,
	profileImg,
	profileUsername,
}) {
	const navigate = useNavigate();
	const { storageData } = useStorage("pocketbase_auth");
	return (
		<div
			className={`${S.profileModal}
				${isImgHovered || isDivHovered ? "" : "invisible opacity-0"}`}
			onMouseEnter={() => setIsDivHovered(true)}
			onMouseLeave={() => setIsDivHovered(false)}
		>
			<div className="flex flex-col px-5">
				<div className="flex gap-3 items-center">
					<div className="w-10 h-10 object-cover">
						<img
							src={profileImg ? profileImg : profileIcon}
							alt="프로필"
							className={`${S.profileImg} `}
							onClick={() => navigate(`/profile/${storageData?.model?.id}`)}
						/>
					</div>
					<div className="flex flex-col">
						<span className="font-semibold text-left">
							{profileUsername ? profileUsername : "로그인 정보가 없습니다."}
						</span>

						<button
							type="button"
							className="pt-1 text-sm text-left"
							onClick={() => navigate(`/profile/${storageData?.model?.id}`)}
						>
							<span className="text-sm text-[#a3a3a3] hover:text-white">
								프로필 전환 &gt;
							</span>
						</button>
					</div>
				</div>
			</div>
			<hr className="border-[#2e2e2e] border-t h-[0.0625rem] bg-[#2e2e2e] my-4" />
			<ul className="py-2 flex flex-col justify-center gap-3">
				<li
					className={S.profileModalList}
					onClick={() => navigate("/membership")}
				>
					이용권
				</li>
				<li className={S.profileModalList} onClick={handleLogoutClick}>
					로그아웃
				</li>
			</ul>
		</div>
	);
}

ProfileModal.propTypes = {
	setIsDivHovered: func,
	isImgHovered: bool,
	isDivHovered: bool,
	handleLogoutClick: func,
	profileImg: string,
	profileUsername: string,
};
