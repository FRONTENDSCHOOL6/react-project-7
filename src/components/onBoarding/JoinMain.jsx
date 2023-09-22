import StartButton from "@/components/onBoarding/StartButton";
import mainImg from "/assets/main.webp";
import S from "@/components/OnBoarding/OnBoarding.module.css";

function JoinMain() {
	return (
		<>
			<section
				className={S.join}
				style={{
					background: `url(${mainImg})`,
					backgroundSize: "cover",
				}}
			>
				<div className={S.joinGradient}></div>
				<div className={S.joinContentWrapper}>
					<p className={S.joinContent}>
						타잉 오리지널 콘텐츠,
						<br></br>
						방송, 영화, 해외시리즈까지!
						<br></br>
						재미를 플레이해보세요.
					</p>
					<span className={S.joinSubContent}>
						간편하게 가입하고, 원하실 때 해지할 수 있어요.
					</span>
					<StartButton className={S.joinButton} />
				</div>
			</section>
		</>
	);
}

export default JoinMain;
