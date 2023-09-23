import { getPbImageURL } from "@/utils/getPbImageURL";
import { bool, func, shape, string } from "prop-types";
import S from "./EditProfile.module.css";
import DefaultProfile from "/assets/default-profile.png";

export default function EditProfileSection({
	isLoading,
	updatedUser,
	profileData,
	handlePosterChange,
	handleNameChange,
}) {
	console.log(profileData);
	return (
		<div className={S.editProfileSection}>
			<button type="button" className={`${S.editButton} `}>
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
						value={
							updatedUser.username ? updatedUser.username : profileData.username
						}
						onChange={handleNameChange}
						maxLength="10"
						className={S.editInput}
					/>
				</label>
				<p className="text-base text-neutral-400 my-2">
					* 2자 이상 10자 이내의 한글, 영문, 숫자 입력 가능합니다.
				</p>
			</div>
		</div>
	);
}
EditProfileSection.propTypes = {
	isLoading: bool,
	updatedUser: shape({
		username: string,
		poster: string,
		posterFile: string,
	}),
	profileData: shape({
		username: string,
		poster: string,
	}),
	handlePosterChange: func,
	handleNameChange: func,
};
