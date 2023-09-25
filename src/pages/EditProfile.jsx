import pb from "@/api/pocketbase";
import useStorage from "@/hooks/useStorage";
import { getPbImageURL } from "@/utils/getPbImageURL";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonSection from "../components/editProfile/ButtonSection";
import EditProfileSection from "../components/editProfile/EditProfileSection";
import TitleSection from "../components/editProfile/TitleSection";
import DefaultProfile from "/assets/default-profile.png";
import { Helmet } from "react-helmet-async";

function EditProfile() {
	const navigate = useNavigate();
	const location = useLocation();
	const pathSegments = location.pathname.split("/");
	const profileId = pathSegments.pop();
	const { storageData } = useStorage("pocketbase_auth");
	const [profileData, setProfileData] = useState({ username: "" });
	const [isLoading, setIsLoading] = useState(true);

	const [updatedUser, setUpdatedUser] = useState({
		username: "",
		poster: "",
		posterFile: null,
	});
	console.log(profileId);
	useEffect(() => {
		const fetchProfile = async () => {
			try {
				setIsLoading(true);
				const data = await pb.collection("profile").getOne(profileId);
				setProfileData(data);
				console.log(profileData);
				const updatedPoster =
					updatedUser.poster ||
					(data?.poster ? getPbImageURL(data, "poster") : DefaultProfile);

				setUpdatedUser({
					username: data?.username,
					poster: updatedPoster,
					posterFile: null,
				});
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchProfile(storageData?.model?.id);
	}, [profileId, storageData]);
	console.log(profileData);
	console.log(updatedUser);
	//@ 프로필 업데이트 유틸 함수
	const updateProfile = async (recordId, updatedData) => {
		try {
			const updatedUser = await pb
				.collection("profile")
				.update(recordId, updatedData);
			return updatedUser;
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	//@ 이름 변경 상태 핸들러
	const handleNameChange = (e) => {
		setUpdatedUser({ ...updatedUser, username: e.target.value });
	};

	//@ 포스터 변경 상태 핸들러
	const handlePosterChange = (e) => {
		if (e.target.files[0]) {
			setUpdatedUser({
				...updatedUser,
				poster: URL.createObjectURL(e.target.files[0]),
				posterFile: e.target.files[0],
			});
		}
	};
	console.log(profileId);

	//@ 프로필 변경 저장 핸들러
	const handleSaveProfile = async () => {
		try {
			const formData = new FormData();
			formData.append("username", updatedUser.username);

			if (updatedUser.posterFile) {
				formData.append("poster", updatedUser.posterFile);
			}

			await updateProfile(profileData.id, formData);
			//const readUser = await pb.collection("users").getOne(profileId);
			//console.log(readUser);
			const refreshedProfile = await pb.collection("profile").getOne(profileId);
			console.log(refreshedProfile);
			//console.log(refreshedProfile);
			const posterUrl = pb.files.getUrl(
				refreshedProfile,
				refreshedProfile.poster
			);

			setUpdatedUser({
				username: refreshedProfile.username,
				poster: posterUrl || DefaultProfile,
				posterFile: null,
			});

			alert("저장 완료!");
			navigate(`/profile/${storageData?.model?.id}`);
		} catch (error) {
			console.error(error);
		}
	};
	console.log(profileData);
	const handleCancel = () => {
		if (
			window.confirm(
				"이 페이지를 벗어나면 변경된 내용은 저장되지 않습니다. 그래도 진행하시겠습니까?"
			)
		) {
			navigate(`/editprofiles/${storageData?.model?.id}`);
		} else {
			console.log("프로필 편집 취소");
		}
	};
	return (
		<>
			<Helmet>
				<title>타잉 7조 - 프로필 편집 페이지</title>
				<meta
					name="description"
					content="멋쟁이 사자처럼 6기 7조의 파이널 프로젝트 - 티빙 클론코딩 프로필 편집 페이지"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="타잉 프로필 편집 페이지" />
				<meta
					property="og:description"
					content="프로젝트 타잉 프로필 편집 페이지"
				/>
				<meta
					property="og:image"
					content="https://github.com/FRONTENDSCHOOL6/react-project-7/assets/101504272/1eb89fd9-eb47-4be6-be3d-a5746fb33abd"
				/>
				<meta
					property="og:url"
					content="https://frontendschool6.github.io/react-project-7/#/editprofile/:id/:id"
				/>
			</Helmet>
			<section className="bg-black w-screen h-screen flex items-center justify-center text-white my-auto relative pt-[2rem] lg:pt-[1.5rem] md:pt-[1rem]">
				<div className="flex flex-col justify-center items-center min-h-full gap-10 w-2/3">
					<TitleSection />
					<EditProfileSection
						isLoading={isLoading}
						updatedUser={updatedUser}
						profileData={profileData}
						handlePosterChange={handlePosterChange}
						handleNameChange={handleNameChange}
					/>
					<ButtonSection
						handleSaveProfile={handleSaveProfile}
						handleCancel={handleCancel}
					/>
				</div>
			</section>
		</>
	);
}

export default EditProfile;
