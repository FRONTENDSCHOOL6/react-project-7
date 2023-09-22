/* eslint-disable react/prop-types */
import { forwardRef } from "react";
function _SwiperButton({ className, type = "button" }, ref) {
	return (
		<>
			<button className={className} type={type} ref={ref} />
		</>
	);
}

const SwiperButton = forwardRef(_SwiperButton);
export default SwiperButton;
