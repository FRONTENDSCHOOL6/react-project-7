import pb from "@/api/pocketbase";
import Spinner from "@/components/common/Spinner";
import ProfileEditButton from "@/components/profile/ProfileEditButton";
import ProfileList from "@/components/profile/ProfileList";
import ProfileTitle from "@/components/profile/ProfileTitle";
import useStorage from "@/hooks/useStorage";
import useProfileStore from "@/store/useProfileStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import S from "./../components/profile/Profile.module.css";
function Profile() {
	const navigate = useNavigate();
	const { setProfileData } = useProfileStore();
	const { storageData } = useStorage("pocketbase_auth");
	const [isLoading, setIsLoading] = useState(true); // 초기에는 로딩 중으로 설정합니다.
	const [profilesData, setProfilesData] = useState(null);

	const handleProfileSelect = (profile) => () => {
		localStorage.setItem("selectedProfile", JSON.stringify(profile));
		setProfileData(profile);
		navigate("/"); // 선택 후 이동할 라우트를 지정해주세요.
	};

	useEffect(() => {
		const fetchProfiles = async () => {
			try {
				const data = await pb
					.collection("users")
					.getOne(storageData.user.id, { expand: "profiles" });

				setProfilesData(data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false); // 데이터 로딩이 완료되면 로딩 상태를 false로 설정합니다.
			}
		};

		// authState가 없거나 초기값인 경우에는 데이터 로딩을 기다립니다.
		if (!storageData || !storageData.user) {
			setIsLoading(false); // authState가 없으면 로딩 상태를 바로 false로 설정합니다.
			return;
		}

		fetchProfiles(storageData.user.id);
	}, [storageData]);

	if (!storageData || !storageData.user) {
		return <Spinner />;
	}

	return (
		<section className={S.pageWrapper}>
			<div className={S.contentsWrapper}>
				<ProfileTitle />
				<ProfileList
					profiles={profilesData?.expand?.profiles}
					onSelect={handleProfileSelect}
				/>
				<ProfileEditButton />
			</div>
		</section>
	);
}

export default Profile;
