import MembershipTypes from "../components/membership/MembershipTypes";
import MembershipTable from "@/components/membership/MembershipTable";
import MembershipWarning from "@/components/membership/MembershipWarning";
import MembershipTitle from "../components/membership/MembershipTitle";
import { Helmet } from "react-helmet-async";
function Membership() {
	return (
		<>
			<Helmet>
				<title>타잉 7조 - 이용권 페이지</title>
				<meta
					name="description"
					content="멋쟁이 사자처럼 6기 7조의 파이널 프로젝트 - 티빙 클론코딩 이용권 페이지"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="타잉 이용권 페이지" />
				<meta property="og:description" content="프로젝트 타잉 이용권 페이지" />
				<meta
					property="og:image"
					content="https://github.com/FRONTENDSCHOOL6/react-project-7/assets/101504272/a9f06ba5-f19c-4985-bb59-288bb2a69e76"
				/>
				<meta
					property="og:url"
					content="https://frontendschool6.github.io/react-project-7/#/membership"
				/>
			</Helmet>
			<section className="bg-black w-screen h-full flex items-center justify-center text-white my-auto relative pt-[2rem] lg:pt-[1.5rem] md:pt-[1rem]">
				<div className="p-12 w-full h-full">
					<MembershipTitle />
					<MembershipTypes />
					<MembershipTable />
					<MembershipWarning />
				</div>
			</section>
		</>
	);
}

export default Membership;
