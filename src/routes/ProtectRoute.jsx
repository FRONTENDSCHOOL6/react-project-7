import useAuthStore from "@/store/authStore";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "./../components/common/Spinner";

function ProtectRoute({ children }) {
	const { authState, initializeAuthState } = useAuthStore();
	const navigate = useNavigate();

	const { pathname, search, hash } = useLocation();

	const [isLoading, setIsLoading] = useState(true);

	const wishLocationPath = `${pathname}${search}${hash}`;

	useEffect(() => {
		const initializeAndCheckAuthState = async () => {
			try {
				// 애플리케이션 초기화 시 인증 상태 초기화
				await initializeAuthState();

				if (!authState?.isAuth) {
					import.meta.env.MODE === "development" && toast.dismiss();

					toast("로그인 된 사용자만 이용 가능한 페이지입니다.", {
						position: "top-center",
						icon: "🚨",
						ariaProps: {
							role: "alert",
							"aria-live": "polite",
						},
					});

					navigate("/onboarding", { state: { wishLocationPath } });
				}

				setIsLoading(false);
			} catch (error) {
				console.error("인증 상태 초기화 중 오류 발생:", error);
				setIsLoading(false);
			}
		};

		// 컴포넌트가 마운트될 때 로컬 스토리지에서 인증 정보 불러오기
		const storedAuthData = localStorage.getItem("pocketbase_auth");
		if (storedAuthData) {
			const parsedData = JSON.parse(storedAuthData);
			if (parsedData.isAuth && !authState.isAuth) {
				// 이 부분을 추가해 중복 업데이트 방지
				useAuthStore.setState({ authState: parsedData });
			}
		}

		// isLoading이 true일 때만 함수 호출
		if (isLoading) {
			initializeAndCheckAuthState();
		}
	}, [isLoading, authState, navigate, wishLocationPath, initializeAuthState]);

	if (isLoading) {
		return <Spinner size={200} />;
	}

	return children;
}

export default ProtectRoute;
