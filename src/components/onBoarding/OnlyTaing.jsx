import S from "@/components/OnBoarding/OnBoarding.module.css";
import hotel from "/assets/hotel.webp";
import afterschool from "/assets/after-school.webp";
import dessert from "/assets/dessert.webp";
import witch from "/assets/witch.jpeg";

function OnlyTaing() {
	const images = [
		{ image: hotel, alt: "더 타임 호텔" },
		{ image: afterschool, alt: "방과후 전쟁활동" },
		{ image: dessert, alt: "더 디저트" },
		{ image: witch, alt: "마녀사냥" },
	];

	// 배열을 복사하고 무작위로 섞습니다.
	const shuffledImages = [...images].sort(() => Math.random() - 0.5);

	return (
		<>
			<section className={S.onlyTaing}>
				<div className={S.onlyContentWrapper}>
					<p className={S.textBig}>타잉에만 있는 재미</p>
					<p className={S.textMedium}>오리지널 콘텐츠를 만나보세요!</p>
					<span className={S.textSmall}>차별화된 웰메이드 오리지널 콘텐츠</span>
				</div>

				<div aria-hidden className={S.onlyFig}>
					{shuffledImages.slice(0, 2).map((imgObj) => (
						<figure key={imgObj.alt} className={`${S.darkImg} left-[7%]`}>
							<img src={imgObj.image} alt="" />
						</figure>
					))}

					<figure className="w-1/2 z-10" aria-hidden>
						<img src={shuffledImages[2].image} className="w-full" />
					</figure>

					{shuffledImages.slice(3).map((imgObj) => (
						<figure
							key={imgObj.alt}
							className={`${S.darkImg} right-[7%]`}
							aria-hidden
						>
							<img src={imgObj.image} alt="" />
						</figure>
					))}
				</div>
			</section>
		</>
	);
}

export default OnlyTaing;
