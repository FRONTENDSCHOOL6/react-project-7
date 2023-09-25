import pb from "@/api/pocketbase";
import ButtonSection from "@/components/editProfiles/ButtonSection";
import TitleSection from "@/components/editProfiles/TitleSection";
import useStorage from "@/hooks/useStorage";
import useAuthStore from "@/store/useAuthStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileListSection from "../components/editProfiles/ProfileListSection";
import { Helmet } from "react-helmet-async";
function EditProfiles() {
	const navigate = useNavigate();
	const { authState } = useAuthStore();
	console.log(authState);
	const { storageData } = useStorage("pocketbase_auth");
	const [isLoading, setIsLoading] = useState(true);
	const [profileData, setProfileData] = useState(null);
	const handleProfileClick = (profile) => {
		navigate(`/editprofile/${storageData?.model?.id}/${profile.id}`);
	};
	useEffect(() => {
		const fetchProfiles = async () => {
			try {
				setIsLoading(true);
				const data = await pb
					.collection("users")
					.getOne(storageData?.model?.id, { expand: "profiles" });
				setProfileData(data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchProfiles(storageData.model.id);
	}, [storageData.model.id]);
	return (
		<>
			<Helmet>
				<title>타잉 7조 - 프로필 편집 리스트 페이지</title>
				<meta
					name="description"
					content="멋쟁이 사자처럼 6기 7조의 파이널 프로젝트 - 티빙 클론코딩 프로필 편집 리스트 페이지"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="타잉 프로필 편집 리스트 페이지" />
				<meta
					property="og:description"
					content="프로젝트 타잉 프로필 편집 리스트 페이지"
				/>
				<meta
					property="og:image"
					content="https://github.com/FRONTENDSCHOOL6/react-project-7/assets/101504272/39002df3-6994-4ec9-8e08-86e6fb1c679f"
				/>
				<meta
					property="og:url"
					content="https://frontendschool6.github.io/react-project-7/#/editprofiles/:id"
				/>
			</Helmet>
			<section className="bg-black w-screen h-screen flex items-center justify-center text-white my-auto relative pt-[2rem] lg:pt-[1.5rem] md:pt-[1rem]">
				<div className="flex flex-col justify-center items-center min-h-full gap-6">
					<TitleSection />
					<ProfileListSection
						handleProfileClick={handleProfileClick}
						isLoading={isLoading}
						profileData={profileData}
					/>
					<ButtonSection />
				</div>
			</section>
		</>
	);
}

export default EditProfiles;
