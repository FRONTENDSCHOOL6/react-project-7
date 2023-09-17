import RecommendImg from "/assets/recommend.svg";
import MembershipType from "./MembershipType"; // MembershipType 컴포넌트를 import합니다.

function MembershipTypes() {
	return (
		<div className="flex w-full justify-between gap-2 py-3 min-h-min">
			{/* 첫 번째 MembershipType 컴포넌트 */}
			<MembershipType
				title="프리미엄"
				description={[
					"실시간 + TV프로그램 + 영화",
					"1080p + 4K 화질(일부 콘텐츠)",
					"동시 시청 4명",
					"모든 디바이스",
				]}
				monthlyPrice="월 13,900원"
				yearlyPrice="연 125,000원"
				discount="25%"
				backgroundImage={RecommendImg}
			/>

			{/* 두 번째 MembershipType 컴포넌트 */}
			<MembershipType
				title="스탠다드"
				description={[
					"실시간 + TV프로그램 + 영화",
					"1080p 화질",
					"동시 시청 2명",
					"모든 디바이스",
				]}
				monthlyPrice="월 10,900원"
				yearlyPrice="연 98,000원"
				discount="25%"
				backgroundImage={RecommendImg}
			/>

			{/* 세 번째 MembershipType 컴포넌트 */}
			<MembershipType
				title="베이직"
				description={[
					"실시간 + TV프로그램 + 영화",
					"720p 화질",
					"동시 시청 1명",
					"모바일 + PC",
				]}
				monthlyPrice="월 7,900원"
				yearlyPrice="연 71,000원"
				discount="25%"
				backgroundImage={RecommendImg}
			/>
		</div>
	);
}

export default MembershipTypes;
