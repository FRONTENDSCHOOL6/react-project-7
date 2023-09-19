import MembershipTypes from "../components/membership/MembershipTypes";
import MembershipTable from "@/components/membership/MembershipTable";
import MembershipWarning from "@/components/membership/MembershipWarning";
import MembershipTitle from "../components/membership/MembershipTitle";
function Membership() {
	return (
		<section className="bg-black w-screen h-full flex items-center justify-center text-white my-auto relative pt-[2rem] lg:pt-[1.5rem] md:pt-[1rem]">
			<div className="p-12 w-full h-full">
				<MembershipTitle />
				<MembershipTypes />
				<MembershipTable />
				<MembershipWarning />
			</div>
		</section>
	);
}

export default Membership;
