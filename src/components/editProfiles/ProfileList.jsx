import { arrayOf, func, shape, string } from "prop-types";
import S from "./EditProfiles.module.css";
import ProfileItem from "./ProfileItem";
export default function ProfileList({ profiles, onProfileClick }) {
	return (
		<ul className={S.profileListWrapper}>
			{profiles?.expand ? (
				profiles?.expand.profiles.map((profile) => (
					<ProfileItem
						key={profile?.username}
						profile={profile}
						onClick={() => onProfileClick(profile)}
					/>
				))
			) : (
				<ProfileItem
					key={profiles?.username}
					profile={profiles}
					onClick={() => onProfileClick(profiles)}
				/>
			)}
		</ul>
	);
}
ProfileList.propTypes = {
	profiles: arrayOf(
		shape({
			username: string,
		})
	),
	onProfileClick: func,
};
