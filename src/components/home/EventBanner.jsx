import { Link } from "react-router-dom";

export default function EventBanner({ imgSrc, imgAlt }) {
	return (
		<section className="px-[5%] mb-[4%]">
			<div className="w-full">
				<Link to="/">
					<img className="w-full" src={imgSrc} alt={imgAlt} />
				</Link>
			</div>
		</section>
	);
}
