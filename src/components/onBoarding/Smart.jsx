import S from "@/components/OnBoarding/OnBoarding.module.css";
import mobile from "/assets/mobile.mp4";
import quickVod from "/assets/quick-vod.png";

function Smart() {
	return (
		<section className={S.onlyTaing}>
			<div className={S.onlyContentWrapper}>
				<p className={S.textBig}>똑똑하게 보는 재미</p>
				<p className={S.textMedium}>
					최신 방송을 가장 빠르고 간편하게 시청하세요!
				</p>
				<span className={S.textSmall}>
					실시간TV, 퀵VOD, 타임머신 기능으로 기다리지 말고 편하게 시청
				</span>
			</div>
			<div className="relative w-full">
				<video autoPlay loop muted className="mx-auto h-auto w-[30%]">
					<source src={mobile}></source>
				</video>
				<div className={S.vodImg}>
					<img src={quickVod} alt="" />
				</div>
			</div>
		</section>
	);
}

export default Smart;
