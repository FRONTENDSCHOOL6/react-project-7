import DefaultProfile from "/assets/default-profile.png";
import S from "./EditProfiles.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import useAuthStore from "@/store/authStore";
import { useState, useEffect } from "react";
import pb from "@/api/pocketbase";
import { getPbImageURL } from "@/utils/getPbImageURL";

function EditProfile() {
	const navigate = useNavigate();
	const location = useLocation();
	const pathSegments = location.pathname.split("/");
	const profileId = pathSegments.pop();

	const { authState } = useAuthStore();
	const [profileData, setProfileData] = useState({ username: "" });
	const [isLoading, setIsLoading] = useState(true);

	const [updatedUser, setUpdatedUser] = useState({
		username: "",
		poster: "",
		posterFile: null,
	});

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				setIsLoading(true);
				const data = await pb.collection("profile").getOne(profileId);
				setProfileData(data);

				const updatedPoster =
					updatedUser.poster ||
					(data.poster ? getPbImageURL(data, "poster") : DefaultProfile);

				setUpdatedUser({
					username: data.username,
					poster: updatedPoster,
					posterFile: null,
				});
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchProfile(authState?.user?.id);
	}, [authState, profileId]);

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

			const refreshedProfile = await pb.collection("profile").getOne(profileId);
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
			navigate(`/profile/${authState?.user?.id}`);
		} catch (error) {
			console.error(error);
		}
	};
	console.log(profileData);
	useEffect(() => {}, []);
	const handleCancel = () => {
		if (
			window.confirm(
				"이 페이지를 벗어나면 변경된 내용은 저장되지 않습니다. 그래도 진행하시겠습니까?"
			)
		) {
			navigate(`/editprofiles/${authState?.user?.id}`);
		} else {
			console.log("프로필 편집 취소");
		}
	};
	console.log(updatedUser);
	return (
		<section className="bg-black w-screen h-screen flex items-center justify-center text-white my-auto relative pt-[2rem] lg:pt-[1.5rem] md:pt-[1rem]">
			<div className="flex flex-col justify-center items-center min-h-full gap-10 w-2/3">
				<div className="flex flex-col gap-1">
					<h2 className="text-5xl text-center font-bold">프로필 편집</h2>
				</div>
				<div className="editPoster w-full flex flex-col items-center justify-center gap-1">
					<button
						type="button"
						className={`${S.editButton} border-solid block w-2/6 h-2/6 overflow-hidden transition-all duration-[0.3s] p-0 rounded-[3px] hover:-translate-y-3 relative object-cover`}
					>
						{isLoading ? (
							<div>Loading...</div>
						) : (
							<>
								<label htmlFor="poster" className="cursor-pointer">
									<img
										src={
											updatedUser?.poster
												? updatedUser?.poster
												: getPbImageURL(profileData, "poster")
										}
										alt="유저 프로필 이미지"
										onError={(e) => {
											e.target.onerror = null;
											e.target.src = DefaultProfile;
										}}
										className="w-[13.87rem] h-[13.875rem] object-cover opacity-50"
									/>
								</label>
								<input
									type="file"
									id="poster"
									accept=".jpg,.png,.svg,.webp"
									onChange={handlePosterChange}
									style={{ display: "none" }}
								/>
							</>
						)}
					</button>
				</div>
				<div className="editName w-1/2">
					<label htmlFor="username">
						<input
							type="text"
							name="username"
							id="username"
							value={updatedUser.username}
							onChange={handleNameChange}
							maxLength="10"
							className="w-full h-12 bg-[#191919] text-lg leading-normal text-[#4d4d4d] pl-4 py-4 rounded-[3px] border-[solid] border-[#191919] focus:border-[#808080] focus:text-white"
						/>
					</label>
					<p className="text-base text-neutral-400 my-2">
						* 2자 이상 10자 이내의 한글, 영문, 숫자 입력 가능합니다.
					</p>
				</div>
				<div className="buttonWrapper w-1/2 flex justify-between gap-3">
					<button
						type="button"
						onClick={handleSaveProfile}
						className="block w-1/2 box-border border font-bold text-center mt-2 px-0 py-3 border-solid rounded bg-[#dedede] text-black border-[#dedede] hover:border-white hover:bg-white flex-grow"
					>
						확인
					</button>
					<button
						type="button"
						onClick={handleCancel}
						className="block w-1/2 box-border border font-bold text-center mt-2 px-0 py-3 border-solid rounded bg-black text-neutral-400 border-[#4e4e4e] hover:border-[#a3a3a3] hover:text-[#dedede] flex-grow"
					>
						취소
					</button>
				</div>
			</div>
		</section>
	);
}

export default EditProfile;
