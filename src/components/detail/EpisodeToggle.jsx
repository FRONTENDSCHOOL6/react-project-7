import { bool, func } from "prop-types";
import S from "../detail/Contents.module.css";
export default function LoopBtn({ isToggled, onToggle }) {
	return (
		<button
			className={`text-white ${S.toggleBtn} ${
				isToggled ? `${S.on}` : `${S.off}`
			}`}
			type="submit"
			onClick={onToggle}
		>
			<div className={S.circle} />
		</button>
	);
}

LoopBtn.propTypes = {
	isToggled: bool.isRequired,
	onToggle: func.isRequired,
};
