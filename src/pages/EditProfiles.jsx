import DefaultProfile from "/assets/default-profile.png";
import S from "./EditProfiles.module.css";
import { getPbImageURL } from "@/utils/getPbImageURL";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/store/authStore";
import { useState, useEffect } from "react";
import pb from "@/api/pocketbase";
function EditProfiles() {
	const navigate = useNavigate();
	const { authState } = useAuthStore();
	console.log(authState);
	const [isLoading, setIsLoading] = useState(true);
	//const [avatarUrl, setAvatarUrl] = useState(null);
	const [profileData, setProfileData] = useState(null);

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
	return (
		<section className="bg-black w-screen h-screen flex items-center justify-center text-white my-auto relative pt-[2rem] lg:pt-[1.5rem] md:pt-[1rem]">
			<div className="flex flex-col justify-center items-center min-h-full gap-6">
				<div className="flex flex-col gap-1">
					<h2 className="text-4xl text-center font-bold">프로필 편집</h2>
				</div>
				<div className="w-full flex flex-col items-center justify-center gap-10">
					<ul className="flex items-center justify-center gap-7 w-2/3">
						{isLoading ? (
							<p>Loading...</p> // You can replace this with your loading indicator
						) : (
							profileData?.expand?.profiles.map((profile) => (
								<li
									key={profile.username}
									className="flex flex-col justify-center items-center w-full "
								>
									<button
										type="button"
										className={`${S.editButton}`}
										onClick={() =>
											navigate(
												`/editprofile/${authState?.user?.id}/${profile.id}`
											)
										}
									>
										<img
											src={getPbImageURL(profile, "poster") || DefaultProfile}
											alt={`유저 ${profile.username}의 프로필 이미지`}
											className="w-full h-full object-cover opacity-50"
										/>
									</button>
									<p className="text-lg text-neutral-400 my-2">
										{profile.username}
									</p>
								</li>
							))
						)}
					</ul>
				</div>
				<button
					type="button"
					className="block w-2/5 box-border border font-bold text-center mt-2 px-0 py-3 border-solid rounded bg-[#dedede] text-black border-[#dedede] hover:border-white hover:bg-white"
					onClick={() => navigate(`/profile/${authState?.user?.id}`)}
				>
					{" "}
					완료
				</button>
			</div>
		</section>
	);
}

export default EditProfiles;
