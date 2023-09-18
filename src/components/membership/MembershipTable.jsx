import XIcon from "/assets/x-icon.svg";
function MembershipTable() {
	return (
		<div className="my-3 w-full min-h-min">
			<table className="w-full border-t border-b border-[#464646] table-fixed">
				<tr className="text-[#ededed] text-sm text-center leading-4">
					<th className="h-10 align-middle"></th>
					<th className="h-10 align-middle border-l border-[#464646]">
						프리미엄
					</th>
					<th className="h-10 align-middle border-l border-[#464646]">
						스탠다드
					</th>
					<th className="h-10 align-middle border-l border-[#464646]">
						베이직
					</th>
				</tr>
				<tbody>
					<tr className="border-t  border-[#464646]">
						<th className="text-left pl-5 text-sm font-light ">프로필 개수</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							4
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							2
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							1
						</th>
					</tr>
					<tr className="border-t  border-[#464646]">
						<th className="text-left pl-5 text-sm font-light ">
							동시 시청이 가능한 수
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							4
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							2
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							1
						</th>
					</tr>
					<tr className="border-t  border-[#464646]">
						<th className="text-left pl-5 text-sm font-light ">
							지원하는 최대 화질
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							1080P FHD + 4K
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							1080P FHD
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							720P HD
						</th>
					</tr>
					<tr className="border-t  border-[#464646]">
						<th className="text-left pl-5 text-sm font-light ">
							PC, 스마트폰, 태블릿, 크롬캐스트
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							<div className="w-2 h-2 mx-auto bg-[#ff1f45] rounded-full"></div>
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							<div className="w-2 h-2 mx-auto bg-[#ff1f45] rounded-full"></div>
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							<div className="w-2 h-2 mx-auto bg-[#ff1f45] rounded-full"></div>
						</th>
					</tr>
					<tr className="border-t  border-[#464646]">
						<th className="text-left pl-5 text-sm font-light ">
							안드로이드 TV
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							<div className="w-2 h-2 mx-auto bg-[#ff1f45] rounded-full"></div>
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							<div className="w-2 h-2 mx-auto bg-[#ff1f45] rounded-full"></div>
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							<div
								className="w-2 h-2 mx-auto"
								style={{
									backgroundImage: `url(${XIcon})`,
									backgroundSize: "contain",
								}}
							></div>
						</th>
					</tr>
					<tr className="border-t  border-[#464646]">
						<th className="text-left pl-5 text-sm font-light ">
							스마트 TV <span className="text-[#6e6e6e]">(삼성, LG)</span>
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							<div className="w-2 h-2 mx-auto bg-[#ff1f45] rounded-full"></div>
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							<div className="w-2 h-2 mx-auto bg-[#ff1f45] rounded-full"></div>
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							<div
								className="w-2 h-2 mx-auto"
								style={{
									backgroundImage: `url(${XIcon})`,
									backgroundSize: "contain",
								}}
							></div>
						</th>
					</tr>
					<tr className="border-t  border-[#464646]">
						<th className="text-left pl-5 text-sm font-light ">애플 TV</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							<div className="w-2 h-2 mx-auto bg-[#ff1f45] rounded-full"></div>
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							<div className="w-2 h-2 mx-auto bg-[#ff1f45] rounded-full"></div>
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							<div
								className="w-2 h-2 mx-auto"
								style={{
									backgroundImage: `url(${XIcon})`,
									backgroundSize: "contain",
								}}
							></div>
						</th>
					</tr>
					<tr className="border-t  border-[#464646]">
						<th className="text-left pl-5 text-sm font-light ">월요금</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							월 13,900원
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							월 10,900원
						</th>
						<th className="h-10 align-middle border-l border-[#464646] text-sm font-light">
							월 7,900원
						</th>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default MembershipTable;
