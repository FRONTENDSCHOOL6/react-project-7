import ProfileList from "@/components/editProfiles/ProfileList";
import { arrayOf, bool, func, shape, string } from "prop-types";

function ProfileListSection({ isLoading, profileData, handleProfileClick }) {
	return (
		<div className="w-full flex flex-col items-center justify-center gap-10">
			<ul className="flex items-center justify-center gap-7 w-2/3">
				{isLoading ? (
					<p>Loading...</p> // You can replace this with your loading indicator
				) : (
					<ProfileList
						profiles={profileData?.expand?.profiles}
						onProfileClick={handleProfileClick}
					/>
				)}
			</ul>
		</div>
	);
}
export default ProfileListSection;

ProfileListSection.propTypes = {
	isLoading: bool,
	profileData: shape({
		expand: shape({
			profiles: arrayOf(
				shape({
					username: string,
				})
			),
		}),
	}),
	handleProfileClick: func,
};
