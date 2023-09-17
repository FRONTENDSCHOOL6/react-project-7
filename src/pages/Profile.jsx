import { useNavigate } from "react-router-dom";
import DefaultProfile from "/assets/default-profile.png";

function Profile() {
	const navigate = useNavigate();
	const profiles = [
		{ name: "gamzzi1", imgSrc: `${DefaultProfile}` },
		{ name: "gamzzi2", imgSrc: `${DefaultProfile}` },
		{ name: "gamzzi3", imgSrc: `${DefaultProfile}` },
		{ name: "gamzzi4", imgSrc: `${DefaultProfile}` },
	];
	return (
		<section className="bg-black w-screen h-screen flex items-center justify-center text-white my-auto relative pt-[2rem] lg:pt-[1.5rem] md:pt-[1rem]">
			<div className="flex flex-col justify-center items-center min-h-full gap-12">
				<div className="flex flex-col gap-1">
					<h2 className="text-2xl text-center font-bold">프로필 선택</h2>
					<p className="box-border text-neutral-400 text-base break-keep mt-2 px-8 py-0">
						시청할 프로필을 선택해주세요.
					</p>
				</div>
				<ul className="w-full flex items-center justify-center gap-1">
					{profiles.map((profile) => (
						<li
							key={profile.name}
							className="flex flex-col justify-center items-center"
						>
							<button
								type="button"
								className="border-solid border-white border-4 block w-2/6 h-2/6 overflow-hidden transition-all duration-[0.3s] p-0 rounded-[3px]"
							>
								<img
									src={profile.imgSrc}
									alt={`유저 ${profile.name}의 프로필 이미지`}
									className="w-full h-full object-cover"
								/>
							</button>
							<p className="text-xs text-neutral-400 my-2">{profile.name}</p>
						</li>
					))}
				</ul>
				<button
					type="button"
					className="block w-1/3 box-border border bg-black text-neutral-400 text-base text-center px-0 py-3 border-solid border-[#4e4e4e] rounded"
					onClick={() => navigate("/editprofiles")}
				>
					프로필 편집
				</button>
			</div>
		</section>
	);
}

export default Profile;
