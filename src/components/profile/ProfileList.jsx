import ProfileItem from "./ProfileItem";

function ProfileList({ profiles, onSelect }) {
	return (
		<ul className="flex items-center justify-center gap-7 w-2/3">
			{profiles?.map((profile) => (
				<ProfileItem
					key={profile?.username}
					profile={profile}
					onSelect={onSelect}
				/>
			))}
		</ul>
	);
}
export default ProfileList;
