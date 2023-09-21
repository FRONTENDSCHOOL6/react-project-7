import { getPbImageURL } from "@/utils/getPbImageURL";
import { func, shape, string } from "prop-types";
import S from "./EditProfiles.module.css";
import DefaultProfile from "/assets/default-profile.png";

export default function ProfileItem({ profile, onClick }) {
	return (
		<li className="flex flex-col justify-center items-center w-full">
			<button type="button" className={`${S.editButton}`} onClick={onClick}>
				<img
					src={
						profile.poster ? getPbImageURL(profile, "poster") : DefaultProfile
					}
					alt={`유저 ${profile.username}의 프로필 이미지`}
					className="w-full h-full object-cover opacity-50"
				/>
			</button>
			<p className="text-lg text-neutral-400 my-2">{profile.username}</p>
		</li>
	);
}
ProfileItem.propTypes = {
	profile: shape({
		username: string,
	}),
	onClick: func,
};
