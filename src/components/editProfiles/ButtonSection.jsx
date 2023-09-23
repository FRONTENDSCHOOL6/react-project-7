import useStorage from "@/hooks/useStorage";
import { useNavigate } from "react-router-dom";

function ButtonSection() {
	const navigate = useNavigate();
	const { storageData } = useStorage("pocketbase_auth");
	return (
		<button
			type="button"
			className="block w-2/5 box-border border font-bold text-center mt-2 px-0 py-3 border-solid rounded bg-[#dedede] text-black border-[#dedede] hover:border-white hover:bg-white"
			onClick={() => navigate(`/profile/${storageData?.model?.id}`)}
		>
			{" "}
			완료
		</button>
	);
}
export default ButtonSection;
