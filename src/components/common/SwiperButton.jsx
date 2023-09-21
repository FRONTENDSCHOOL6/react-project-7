import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { handleEnterKeyDown } from "@/utils/keyDown";

function SwiperButton({ className, id, onKeyDown, role, tabIndex }) {
	return (
		<>
			<div
				className={className}
				id={id}
				onKeyDown={handleEnterKeyDown}
				role="button"
				tabIndex={0}
			/>
		</>
	);
}

export default SwiperButton;
