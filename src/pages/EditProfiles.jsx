import pb from "@/api/pocketbase";
import ButtonSection from "@/components/editProfiles/ButtonSection";
import TitleSection from "@/components/editProfiles/TitleSection";
import useStorage from "@/hooks/useStorage";
import useAuthStore from "@/store/useAuthStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileListSection from "../components/editProfiles/ProfileListSection";
function EditProfiles() {
	const navigate = useNavigate();
	const { authState } = useAuthStore();
	console.log(authState);
	const { storageData } = useStorage("pocketbase_auth");
	const [isLoading, setIsLoading] = useState(true);
	const [profileData, setProfileData] = useState(null);
	const handleProfileClick = (profile) => {
		navigate(`/editprofile/${authState?.model?.id}/${profile.id}`);
	};
	useEffect(() => {
		const fetchProfiles = async () => {
			try {
				setIsLoading(true);
				const data = await pb
					.collection("users")
					.getOne(storageData.model.id, { expand: "profiles" });
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
	);
}

export default EditProfiles;
