import { Helmet } from "react-helmet-async";
import ProgramNav from "./../components/category/ProgramNav";
import ProgramContent from "./../components/category/ProgramContent";

export default function Movie() {
	return (
		<>
			<Helmet>
				<title>TV Programs - TAING</title>
				<meta
					name="description"
					content="멋쟁이 사자처럼 6기 7조의 파이널 프로젝트 - 티빙 클론코딩 타잉 TV 프로그램"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="타잉 카테고리별 TV 프로그램" />
				<meta
					property="og:description"
					content="프로젝트 타잉 TV 프로그램 페이지"
				/>
				<meta
					property="og:image"
					content="https://user-images.githubusercontent.com/116864776/270171800-c41e18b6-a042-4d4e-b21a-d6661cf4eb0c.png"
				/>
				<meta
					property="og:url"
					content="https://frontendschool6.github.io/react-project-7/#/program"
				/>
			</Helmet>
			<div className="bg-black pt-32 px-[5%]">
				<h3 className="text-white text-4xl font-semibold mb-[2%] ml-[3%]">
					TV 프로그램
				</h3>
				<ProgramNav />
				<div className="contentWrapper w-full pt-10 flex flex-row gap-5 flex-wrap justify-between">
					<ProgramContent />
				</div>
			</div>
		</>
	);
}
