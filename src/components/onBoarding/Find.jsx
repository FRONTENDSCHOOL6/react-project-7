import S from "@/components/OnBoarding/OnBoarding.module.css";
import LoopSlide from "@/components/onBoarding/LoopSlide";

function Find() {
	return (
		<section className={S.fun}>
			<div className={S.onlyContentWrapper}>
				<p className={S.textBig}>내가 찾던 재미</p>
				<p className={S.textMedium}>보고 싶은 콘텐츠를 발견하세요!</p>
				<span className={S.textSmall}>
					최신, 인기 TV프로그램, 영화, 해외시리즈, 파라마운트+ 오리지널 및 독점
				</span>
			</div>
			<div className="w-full">
				<LoopSlide />
			</div>
		</section>
	);
}

export default Find;
