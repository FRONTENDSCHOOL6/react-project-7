import { arrayOf, func, shape, string } from "prop-types";
import ProfileItem from "./ProfileItem";

export default function ProfileList({ profiles, onProfileClick }) {
	return (
		<ul className="flex items-center justify-center gap-7 w-2/3">
			{profiles?.map((profile) => (
				<ProfileItem
					key={profile.username}
					profile={profile}
					onClick={() => onProfileClick(profile)}
				/>
			))}
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
