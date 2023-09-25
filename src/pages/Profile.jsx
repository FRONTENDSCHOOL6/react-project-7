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
import { Helmet } from "react-helmet-async";
function Profile() {
	const navigate = useNavigate();
	const { setProfileData } = useProfileStore();
	const { storageData } = useStorage("pocketbase_auth");
	const [isLoading, setIsLoading] = useState(true); // 초기에는 로딩 중으로 설정합니다.
	const [profilesData, setProfilesData] = useState(null);
	console.log(storageData);
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
					.getOne(storageData?.model?.id, { expand: "profiles" });
				console.log(data);
				setProfilesData(data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false); // 데이터 로딩이 완료되면 로딩 상태를 false로 설정합니다.
			}
		};

		// authState가 없거나 초기값인 경우에는 데이터 로딩을 기다립니다.
		if (!storageData || !storageData?.model) {
			setIsLoading(false); // authState가 없으면 로딩 상태를 바로 false로 설정합니다.
			return;
		}
		fetchProfiles(storageData?.model?.id);
	}, [storageData]);

	if (!storageData || !storageData?.model) {
		return <Spinner />;
	}

	return (
		<>
			<Helmet>
				<title>타잉 7조 - 프로필 페이지</title>
				<meta
					name="description"
					content="멋쟁이 사자처럼 6기 7조의 파이널 프로젝트 - 티빙 클론코딩 프로필 페이지"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="타잉 프로필 페이지" />
				<meta property="og:description" content="프로젝트 타잉 프로필 페이지" />
				<meta
					property="og:image"
					content="https://github.com/FRONTENDSCHOOL6/react-project-7/assets/101504272/b7f4b1cf-2d2a-42fd-a44d-0e3cbf06ef46"
				/>
				<meta
					property="og:url"
					content="https://frontendschool6.github.io/react-project-7/#/profile/:id"
				/>
			</Helmet>
			<section className={S.pageWrapper}>
				<div className={S.contentsWrapper}>
					<ProfileTitle />
					<ProfileList
						profiles={profilesData ? profilesData : storageData}
						onSelect={handleProfileSelect}
					/>
					<ProfileEditButton />
				</div>
			</section>
		</>
	);
}

export default Profile;
