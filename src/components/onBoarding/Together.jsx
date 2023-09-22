import S from "./OnBoarding.module.css";
import devices from "/assets/devices.mp4";

function Together() {
	return (
		<section className={S.onlyTaing}>
			<div className={S.onlyContentWrapper}>
				<p className={S.textBig}>함께 즐기는 재미</p>
				<p className={S.textMedium}>다양한 기기로 즐겨보세요!</p>
				<span className={S.textSmall}>
					스마트폰, 태블릿, PC, TV, 크롬캐스트에서 시청
					<br />
					최대 4명의 지인들과 함께 구독
				</span>
			</div>
			<div>
				<video autoPlay loop muted className="mx-auto h-auto w-[60%]">
					<source src={devices}></source>
				</video>
			</div>
		</section>
	);
}

export default Together;
