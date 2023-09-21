import { getPbImageURL } from "@/utils/getPbImageURL";
import S from "./../../pages/EditProfiles.module.css";
import DefaultProfile from "/assets/default-profile.png";

export default function EditProfileSection({
	isLoading,
	updatedUser,
	profileData,
	handlePosterChange,
	handleNameChange,
}) {
	return (
		<div className="editPoster w-full flex flex-col items-center justify-center gap-12">
			<button
				type="button"
				className={`${S.editButton} border-solid block w-2/6 h-2/6 overflow-hidden transition-all duration-[0.3s] p-0 rounded-[3px] hover:-translate-y-3 relative object-cover`}
			>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					<>
						<label htmlFor="poster" className="cursor-pointer">
							<img
								src={
									updatedUser?.poster
										? updatedUser?.poster
										: getPbImageURL(profileData, "poster")
								}
								alt="유저 프로필 이미지"
								onError={(e) => {
									e.target.onerror = null;
									e.target.src = DefaultProfile;
								}}
								className="w-[13.87rem] h-[13.875rem] object-cover opacity-50"
							/>
						</label>
						<input
							type="file"
							id="poster"
							accept=".jpg,.png,.svg,.webp"
							onChange={handlePosterChange}
							style={{ display: "none" }}
						/>
					</>
				)}
			</button>
			<div className="editName w-1/2">
				<label htmlFor="username">
					<input
						type="text"
						name="username"
						id="username"
						value={updatedUser.username}
						onChange={handleNameChange}
						maxLength="10"
						className="w-full h-12 bg-[#191919] text-base leading-normal text-[#4d4d4d] pl-4 py-4 rounded-[3px] border-[solid] border-[#191919] focus:border-[#808080] focus:text-white"
					/>
				</label>
				<p className="text-xs text-neutral-400 my-2">
					* 2자 이상 10자 이내의 한글, 영문, 숫자 입력 가능합니다.
				</p>
			</div>
		</div>
	);
}
