import S from "./Profile.module.css";
function ProfileTitle() {
	return (
		<div className="flex flex-col gap-3">
			<h2 className="text-4xl text-center font-bold">프로필 선택</h2>
			<p className={S.mainTitle}>시청할 프로필을 선택해주세요.</p>
		</div>
	);
}
export default ProfileTitle;
