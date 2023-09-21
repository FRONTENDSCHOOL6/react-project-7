import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "./../components/common/Spinner";
import useAuthStore from "@/store/useAuthStore";

function ProtectRoute({ children }) {
	const navigate = useNavigate();
	const location = useLocation();
	const authState = useAuthStore((state) => state.authState); // Zustand 스토어에서 authState 가져오기

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const checkAuthState = async () => {
			try {
				// Zustand 스토어에서 가져온 authState를 이용하여 로그인 상태 확인
				const isAuthenticated = authState.isAuth;

				if (!isAuthenticated) {
					import.meta.env.MODE === "development" && toast.dismiss();

					toast("로그인 된 사용자만 이용 가능한 페이지입니다.", {
						position: "top-center",
						icon: "🚨",
						ariaProps: {
							role: "alert",
							"aria-live": "polite",
						},
					});

					// 로그인 상태가 아니라면 Onboarding 페이지로 이동합니다.
					navigate("/onboarding");
				}

				setIsLoading(false);
			} catch (error) {
				console.error("인증 상태 확인 중 오류 발생:", error);
				setIsLoading(false);
			}
		};

		// 컴포넌트가 마운트될 때 인증 상태 확인
		checkAuthState();
	}, [navigate, authState]);

	if (isLoading) {
		return <Spinner size={200} />;
	}

	// 인증 상태가 확인되면 자식 컴포넌트(허용된 라우트)를 렌더링합니다.
	return children;
}

export default ProtectRoute;
