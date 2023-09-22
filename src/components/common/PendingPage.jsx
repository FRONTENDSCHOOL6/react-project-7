import Logo from "/assets/logo-dark.svg";

function PendingPage() {
	return (
		<div className="bg-black h-[100vh] py-[30%] w-full items-center flex flex-col">
			<div className="w-[30%] my-4" aria-hidden>
				<img className="w-full" src={Logo} alt="로딩 중" />
			</div>
			<span className="text-gray-300 text-3xl">잠시만 기다려주세요...</span>
		</div>
	);
}

export default PendingPage;
