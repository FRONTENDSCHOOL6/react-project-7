import S from "@/components/OnBoarding/OnBoarding.module.css";
import StartButton from "./StartButton";
import tvingLogoBig from "/assets/no1-tving.svg";

function StartNow() {
	return (
		<section className={S.num}>
			<div className={S.numWrapper}>
				<img className="inline-block w-[50%]" src={tvingLogoBig} alt="" />
				<p className={`${S.joinContent} px-20 max-sm:px-12`}>
					지금 시작해보세요
				</p>
				<StartButton className={S.numButton} />
			</div>
		</section>
	);
}

export default StartNow;
