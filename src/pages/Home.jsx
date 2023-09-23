import { Helmet } from "react-helmet-async";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MainList from "./../components/home/MainList";
import MainBanner from "./../components/home/MainBanner";
import PopularList from "./../components/home/PopularList";
import EventBanner from "./../components/home/EventBanner";
import kbo from "/assets/kbo.jpeg";
import ufc from "/assets/ufc.jpeg";

function Home() {
	return (
		<>
			<Helmet>
				<title>TAING</title>
				<meta
					name="description"
					content="멋쟁이 사자처럼 6기 7조의 파이널 프로젝트 - 티빙 클론코딩 타잉 메인페이지"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="타잉 메인페이지" />
				<meta property="og:description" content="프로젝트 타잉 메인페이지" />
				<meta property="og:image" content="@/assets/metaImg.png" />
				<meta
					property="og:url"
					content="https://frontendschool6.github.io/react-project-7/"
				/>
			</Helmet>
			<div className="mainPage bg-black w-screen overflow-hidden">
				<MainBanner />
				<PopularList heading="인기 영화" category="영화" />
				<PopularList heading="인기 TV 프로그램" category="TV 프로그램" />
				<MainList
					classTitle={"romance"}
					listTitle={"사랑에 빠지는 순간, 로맨스"}
					genre={"영화"}
					genreId={"n0ztxfbdj977ycx"}
				/>
				<MainList
					classTitle={"kids"}
					listTitle={"아이들과 함께! 키즈 프로그램"}
					genre={"TV 프로그램"}
					genreId={"jbrgnkddukg6sod"}
				/>
				<MainList
					classTitle={"tv"}
					listTitle={"가족끼리 즐기자! 예능 프로그램"}
					genre={"TV 프로그램"}
					genreId={"bk1642512y8h7u4"}
				/>
				<EventBanner imgSrc={kbo} imgAlt={"2023 KBO 리그 생중계"} />
				<MainList
					classTitle={"sf"}
					listTitle={"강력한 비주얼 ! SF 영화"}
					genre={"영화"}
					genreId={"i1cbm8l1n1opqh1"}
				/>
				<MainList
					classTitle={"horror"}
					listTitle={"불 끄면 생각날걸? 공포 영화"}
					genre={"영화"}
					genreId={"cpcr28a1nvppyow"}
				/>
				<MainList
					classTitle={"documentary"}
					listTitle={"다큐멘터리"}
					genre={"TV 프로그램"}
					genreId={"rpq7aiz0y08y0y8"}
				/>
				<EventBanner imgSrc={ufc} imgAlt={"타잉 스포츠"} />
			</div>
		</>
	);
}

export default Home;
