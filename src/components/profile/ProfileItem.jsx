import { getPbImageURL } from "@/utils/getPbImageURL";
import { func, shape, string } from "prop-types";
import S from "./Profile.module.css";
import DefaultProfile from "/assets/default-profile.png";
function ProfileItem({ profile, onClick }) {
	console.log(profile);
	return (
		<li key={profile?.username} className={S.listWrapper}>
			<button
				type="button"
				className={S.profileButton}
				onClick={onClick} // 여기서 받은 onClick 함수를 실행합니다.
			>
				<img
					src={
						profile?.poster ? getPbImageURL(profile, "poster") : DefaultProfile
					}
					alt={`유저 ${profile.username}의 프로필 이미지`}
					className="w-full h-full object-cover"
				/>
			</button>
			<p className="text-base text-neutral-400 my-2">{profile?.username}</p>
		</li>
	);
}
export default ProfileItem;

ProfileItem.propTypes = {
	profile: shape({
		username: string,
	}),
	onClick: func,
};
