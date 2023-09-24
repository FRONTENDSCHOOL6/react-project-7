import { arrayOf, bool, func, shape, string } from "prop-types";
import S from "./EditProfiles.module.css";
import ProfileList from "./ProfileList";
function ProfileListSection({ isLoading, profileData, handleProfileClick }) {
	console.log(profileData);
	return (
		<div className={S.profileListSection}>
			<ul className="flex items-center justify-center gap-7 w-2/3">
				{isLoading ? (
					<p>Loading...</p>
				) : (
					<ProfileList
						profiles={profileData}
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
