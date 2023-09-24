import { Helmet } from "react-helmet-async";
import MovieNav from "./../components/category/MovieNav";
import MovieContent from "./../components/category/MovieContent";

export default function Movie() {
	return (
		<>
			<Helmet>
				<title>Movies - TAING</title>
				<meta
					name="description"
					content="멋쟁이 사자처럼 6기 7조의 파이널 프로젝트 - 티빙 클론코딩 타잉 영화"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="타잉 카테고리별 영화" />
				<meta property="og:description" content="프로젝트 타잉 영화 페이지" />
				<meta
					property="og:image"
					content="https://user-images.githubusercontent.com/116864776/270171798-0906052e-fb4a-48d7-8722-9574d08c31eb.png"
				/>
				<meta
					property="og:url"
					content="https://frontendschool6.github.io/react-project-7/#/movie"
				/>
			</Helmet>
			<div className="bg-black pt-32 px-[5%]">
				<h3 className="text-white text-4xl font-semibold mb-[2%] ml-[3%]">
					영화
				</h3>
				<MovieNav />
				<div className="contentWrapper w-full pt-[7%] flex flex-row gap-5 flex-wrap justify-between">
					<MovieContent />
				</div>
			</div>
		</>
	);
}
