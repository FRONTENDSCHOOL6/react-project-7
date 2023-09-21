import { func } from "prop-types";

export default function ButtonSection({ handleSaveProfile, handleCancel }) {
	return (
		<div className="buttonWrapper w-1/2 flex justify-between gap-3">
			<button
				type="button"
				onClick={handleSaveProfile}
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
	);
}
ButtonSection.propTypes = {
	handleSaveProfile: func,
	handleCancel: func,
};
