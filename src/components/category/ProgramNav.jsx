import { useEffect, useState } from "react";
import pb from "@/api/pocketbase";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import NavButton from "./NavButton";
import SwiperButton from "../common/SwiperButton";

function ProgramNav() {
	const [activeIndex, setActiveIndex] = useState(null);

	const [contents, setContents] = useState([]);
	const [status, setStatus] = useState("pending");
	const [error, setError] = useState(null);
	useEffect(() => {
		setStatus("loading");

		Promise.all([pb.collection("genre").getFullList()])
			.then(([genreList]) => {
				setContents([{ title: "프로그램 장르명", data: genreList }]);
				setStatus("success");
			})
			.catch((error) => {
				setError(error);
				setStatus("error");
			});
	}, []);

	return (
		<nav>
			<Swiper
				className="programNav px-[3.5%]"
				slidesPerView={7}
				breakpoints={{
					480: {
						slidesPerView: 4,
					},
					768: {
						slidesPerView: 5,
					},
					1024: {
						slidesPerView: 6,
					},
				}}
				slidesPerGroup={4}
				navigation={{
					nextEl: "#categoryNextButton",
					prevEl: "#categoryPrevButton",
					keyboard: true,
					onlyInViewport: false,
				}}
				modules={[Navigation]}
			>
				{contents?.map((contentCategory) =>
					contentCategory.data
						.filter(
							(item) => item.programCode && item.programCode.trim() !== ""
						)
						.map((item, index) => (
							<>
								<SwiperSlide key={item.id}>
									<div>
										<NavButton
											content={item.genreKR}
											index={index}
											id={item.id}
											activeIndex={activeIndex}
											setActiveIndex={setActiveIndex}
										/>
									</div>
								</SwiperSlide>
							</>
						))
				)}
				<SwiperButton className="swiper-button-prev" id="categoryPrevButton" />
				<SwiperButton className="swiper-button-next" id="categoryNextButton" />
			</Swiper>
		</nav>
	);
}

export default ProgramNav;
