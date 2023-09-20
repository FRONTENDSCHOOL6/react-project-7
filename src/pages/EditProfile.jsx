import DefaultProfile from "/assets/default-profile.png";
import S from "./EditProfiles.module.css";
import { useNavigate } from "react-router-dom";
function EditProfile() {
	const navigate = useNavigate();
	const handleCancel = () => {
		if (
			window.confirm(
				"이 페이지를 벗어나면 변경된 내용은 저장되지 않습니다. 그래도 진행하시겠습니까?"
			)
		) {
			navigate("/editprofiles");
		} else {
			console.log("프로필 편집 취소");
		}
	};
	return (
		<section className="bg-black w-screen h-screen flex items-center justify-center text-white my-auto relative pt-[2rem] lg:pt-[1.5rem] md:pt-[1rem]">
			<div className="flex flex-col justify-center items-center min-h-full gap-6">
				<div className="flex flex-col gap-1">
					<h2 className="text-2xl text-center font-bold">프로필 편집</h2>
				</div>
				<div className="editPoster w-full flex flex-col items-center justify-center gap-1">
					<button
						type="button"
						className={`${S.editButton} border-solid block w-2/6 h-2/6 overflow-hidden transition-all duration-[0.3s] p-0 rounded-[3px] hover:-translate-y-3 relative`}
					>
						<img
							src={`${DefaultProfile}`}
							alt="유저 프로필 이미지"
							className="w-full h-full object-cover opacity-50"
						/>
					</button>
				</div>
				<div className="editName w-full">
					<label htmlFor="username">
						<input
							type="text"
							name="username"
							id="username"
							defaultValue="shclgus2"
							maxLength="10"
							className="w-full h-10 bg-[#191919] text-base leading-normal text-[#4d4d4d] pl-4 py-4 rounded-[3px] border-[solid] border-[#191919] focus:border-[#808080] focus:text-white"
						/>
					</label>
					<p className="text-xs text-neutral-400 my-2">
						* 2자 이상 10자 이내의 한글, 영문, 숫자 입력 가능합니다.
					</p>
				</div>
				<div className="buttonWrapper w-full flex justify-between gap-3">
					<button
						type="button"
						onClick={() => navigate("/profile")}
						className="block w-2/5 box-border border font-bold text-center mt-2 px-0 py-3 border-solid rounded bg-[#dedede] text-black border-[#dedede] hover:border-white hover:bg-white flex-grow"
					>
						확인
					</button>
					<button
						type="button"
						onClick={handleCancel}
						className="block w-2/5 box-border border font-bold text-center mt-2 px-0 py-3 border-solid rounded bg-black text-neutral-400 border-[#4e4e4e] hover:border-[#a3a3a3] hover:text-[#dedede] flex-grow"
					>
						취소
					</button>
				</div>
			</div>
		</section>
	);
}

export default EditProfile;
