import { useNavigate } from "react-router-dom";
//import DefaultProfile from "/assets/default-profile.png";
import { useEffect } from "react";
import useAuthStore from "@/store/authStore";
import { useState } from "react";
import pb from "@/api/pocketbase";
import { getPbImageURL } from "@/utils/getPbImageURL";

function Profile() {
	const navigate = useNavigate();
	const { authState } = useAuthStore();
	console.log(authState);
	const [isLoading, setIsLoading] = useState(true);
	//const [avatarUrl, setAvatarUrl] = useState(null);
	const [profileData, setProfileData] = useState(null);

	const handleProfileSelect = (profile) => () => {
		localStorage.setItem("selectedProfile", JSON.stringify(profile));
		navigate("/"); // 선택 후 이동할 라우트를 지정해주세요.
	};
	useEffect(() => {
		const fetchProfiles = async () => {
			try {
				setIsLoading(true);
				const data = await pb
					.collection("users")
					.getOne(authState?.user?.id, { expand: "profiles" });
				setProfileData(data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchProfiles(authState?.user?.id);
	}, [authState]);
	console.log(profileData?.expand?.profiles);
	console.log(profileData?.expand?.profiles.map((v) => v.username));
	return (
		<section className="bg-black w-screen h-screen flex items-center justify-center text-white my-auto relative pt-[2rem] lg:pt-[1.5rem] md:pt-[1rem]">
			<div className="flex flex-col justify-center items-center min-h-full gap-12">
				<div className="flex flex-col gap-2">
					<h2 className="text-3xl text-center font-bold">프로필 선택</h2>
					<p className="box-border text-neutral-400 text-lg break-keep mt-2 px-8 py-0">
						시청할 프로필을 선택해주세요.
					</p>
				</div>
				<ul className="flex items-center justify-center gap-7 w-2/3">
					{profileData?.expand?.profiles.map((profile) => (
						<li
							key={profile.username}
							className="flex flex-col justify-center items-center w-full hover:-translate-y-3 duration-200 transition-all h-full object-cover"
						>
							<button
								type="button"
								className="border-solid border-white border-4 block overflow-hidden transition-all duration-[0.3s] p-0 rounded-[3px] w-[13.87rem] h-[13.875rem] object-cover"
								onClick={handleProfileSelect(profile)}
							>
								<img
									src={getPbImageURL(profile, "poster")}
									alt={`유저 ${profile.username}의 프로필 이미지`}
									className="w-full h-full object-cover"
								/>
							</button>
							<p className="text-sm text-neutral-400 my-2">
								{profile.username}
							</p>
						</li>
					))}
				</ul>
				<button
					type="button"
					className="block w-1/4 box-border border bg-black text-neutral-400 text-lg text-center px-0 py-3 border-solid border-[#4e4e4e] rounded"
					onClick={() => navigate(`/editprofiles/${authState?.user?.id}`)}
				>
					프로필 편집
				</button>
			</div>
		</section>
	);
}

export default Profile;
