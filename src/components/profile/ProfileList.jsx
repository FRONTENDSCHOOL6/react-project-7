import { arrayOf, func, shape, string } from "prop-types";
import ProfileItem from "./ProfileItem";

function ProfileList({ profiles, onSelect }) {
	console.log(profiles);
	return (
		<ul className="flex items-center justify-center gap-7 w-2/3">
			{profiles?.expand ? (
				profiles?.expand.profiles.map((profile) => (
					<ProfileItem
						key={profile?.username}
						profile={profile}
						onClick={onSelect(profile)}
					/>
				))
			) : (
				<ProfileItem
					key={profiles?.username}
					profile={profiles}
					onClick={onSelect(profiles)}
				/>
			)}
		</ul>
	);
}
export default ProfileList;

ProfileList.propTypes = {
	profiles: arrayOf(
		shape({
			username: string,
		})
	),
	onSelect: func,
};
