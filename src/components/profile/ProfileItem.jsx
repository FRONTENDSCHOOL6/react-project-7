import { getPbImageURL } from "@/utils/getPbImageURL";

export function ProfileItem({ profile, onSelect }) {
	return (
		<li
			key={profile?.username}
			className="flex flex-col justify-center items-center w-full hover:-translate-y-3 duration-200 transition-all h-full object-cover"
		>
			<button
				type="button"
				className="border-solid border-white border-4 block overflow-hidden transition-all duration-[0.3s] p-0 rounded-[3px] w-[13.87rem] h-[13.875rem] object-cover"
				onClick={() => onSelect(profile)}
			>
				<img
					src={getPbImageURL(profile, "poster")}
					alt={`유저 ${profile?.username}의 프로필 이미지`}
					className="w-full h-full object-cover"
				/>
			</button>
			<p className="text-sm text-neutral-400 my-2">{profile?.username}</p>
		</li>
	);
}
export default ProfileItem;
