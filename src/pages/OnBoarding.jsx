import { Helmet } from "react-helmet-async";
import "swiper/css";
import JoinMain from "../components/onBoarding/JoinMain";
import OnlyTaing from "../components/onBoarding/OnlyTaing";
import YouTube from "../components/onBoarding/Youtube";
import Smart from "../components/onBoarding/Smart";
import Together from "../components/onBoarding/Together";
import Find from "../components/onBoarding/Find";
import StartNow from "../components/onBoarding/StartNow";
import QnA from "../components/onBoarding/QnA";

export default function OnBoarding() {
	return (
		<>
			<Helmet>
				<title>TAING</title>
				<meta
					name="description"
					content="멋쟁이 사자처럼 6기 7조의 파이널 프로젝트 - 티빙 클론코딩 타잉 랜딩페이지"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="타잉 랜딩페이지" />
				<meta property="og:description" content="프로젝트 타잉 랜딩페이지" />
				<meta property="og:image" content="/assets/metaImgOnBoarding.png" />
				<meta
					property="og:url"
					content="http://localhost:5173/react-project-7/#/onboarding"
				/>
			</Helmet>
			{/* 재미를 플레이해보세요 */}
			<JoinMain />
			{/* 티빙에만 있는 재미 */}
			<OnlyTaing />
			{/* 내가 찾던 재미 */}
			<Find />
			{/* 유튜브 섹션 */}
			<YouTube />
			{/* 똑똑하게 보는 재미 */}
			<Smart />
			{/* 함께 즐기는 재미 */}
			<Together />
			{/* 지금 시작해보세요 */}
			<StartNow />
			{/* 자주 찾는 질문 */}
			<QnA />
		</>
	);
}
