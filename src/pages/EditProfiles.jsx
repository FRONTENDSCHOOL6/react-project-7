import DefaultProfile from "/assets/default-profile.png";
import S from "./EditProfiles.module.css";
import { Link } from "react-router-dom";
function EditProfiles() {
	return (
		<section className="bg-black w-screen h-screen flex items-center justify-center text-white my-auto relative pt-[2rem] lg:pt-[1.5rem] md:pt-[1rem]">
			<div className="flex flex-col justify-center items-center min-h-full gap-6">
				<div className="flex flex-col gap-1">
					<h2 className="text-2xl text-center font-bold">프로필 편집</h2>
				</div>
				<div className="w-full flex flex-col items-center justify-center gap-1">
					<Link
						to="/editprofile"
						className="border-solid block w-2/6 h-2/6 overflow-hidden transition-all duration-[0.3s] p-0 rounded-[3px] hover:-translate-y-3 relative"
					>
						<button type="button" className={`${S.editButton}`}>
							<img
								src={`${DefaultProfile}`}
								alt="유저 프로필 이미지"
								className="w-full h-full object-cover opacity-50"
							/>
						</button>
					</Link>
					<p className="text-xs text-neutral-400 my-2">shclgus2</p>
				</div>
				<Link
					to="/profile"
					className="block w-2/5 box-border border font-bold text-center mt-2 px-0 py-3 border-solid rounded bg-[#dedede] text-black border-[#dedede] hover:border-white hover:bg-white"
				>
					<button type="button">완료</button>
				</Link>
			</div>
		</section>
	);
}

export default EditProfiles;
