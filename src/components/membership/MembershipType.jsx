import { Link } from "react-router-dom";
import RecommendImg from "/assets/recommend.svg";
import { arrayOf, string } from "prop-types";
function MembershipType({
	title,
	description,
	monthlyPrice,
	yearlyPrice,
	discount,
}) {
	return (
		<div className="flex flex-col gap-3 py-6 px-4 flex-grow bg-[#191919] rounded relative">
			<div
				className="absolute -top-1 right-0 w-[4rem] h-[4rem] block bg-no-repeat bg-[50%_50%] bg-contain"
				style={
					title === "프리미엄"
						? { backgroundImage: `url(${RecommendImg})` }
						: {}
				}
			></div>
			<h3 className="text-xl font-bold leading-4 text-white">{title}</h3>
			<ul className="text-[0.75rem] text-[#A3A3A3]">
				{description.map((item, index) => (
					<li key={index}>&middot; {item}</li>
				))}
			</ul>
			<div className="flex flex-col gap-2">
				<Link
					to="#"
					className="flex justify-between items-center p-2 px-4 border rounded transition-all duration-[0.05s] ease-[ease] delay-[0s] min-h-[3rem] border-solid border-[#5e5e5e]"
				>
					<span className="text-[0.875rem] font-extralight">월간 이용권</span>
					<div className="flex gap-3 items-center">
						<span className="font-semibold text-[0.9375rem] text-white text-right">
							{monthlyPrice}
						</span>
						<span className="text-[#dedede] text-base font-light inline-block pb-[0.125rem]">
							&gt;
						</span>
					</div>
				</Link>
				<Link
					to="#"
					className="flex justify-between relative items-center border rounded transition-all duration-[0.05s] ease-[ease] delay-[0s] min-h-[3.5rem] px-4 border-solid border-[#5e5e5e]"
				>
					<div className="relative">
						<span className="absolute bg-[#ff153c] rounded-ss-sm rounded-ee-sm font-bold text-[0.625rem] -top-4 -left-[1.0625rem] px-0.5">
							{discount}
						</span>
						<span className="text-[0.875rem] font-extralight">연간 이용권</span>
					</div>
					<div className="flex gap-3">
						<span>
							<div className="flex flex-col ">
								<span className="font-semibold text-[0.9375rem] text-white text-right">
									{yearlyPrice}
								</span>
								<span className="text-[#888888] text-[0.6875rem] inline-block">
									(월 {(parseFloat(yearlyPrice) / 12).toFixed(2)}에 이용)
								</span>
							</div>
						</span>
						<span className="inline-block pt-2 font-light">&gt;</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

MembershipType.propTypes = {
	title: string.isRequired,
	description: arrayOf([string]).isRequired,
	monthlyPrice: string.isRequired,
	yearlyPrice: string.isRequired,
	discount: string.isRequired,
};

export default MembershipType;
