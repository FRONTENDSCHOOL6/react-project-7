import { create } from "zustand";
import pb from "@/api/pocketbase";

const initialAuthState = {
	isAuth: false,
	user: null,
	token: "",
};

const useAuthStore = create((set) => ({
	authState: initialAuthState,

	signIn: async (id, password) => {
		try {
			const response = await pb
				.collection("users")
				.authWithPassword(id, password);
			const isAuth = !!response;
			console.log(response);
			console.log(isAuth);
			// Zustand 상태를 업데이트합니다.
			set({
				authState: {
					isAuth: isAuth,
					user: isAuth ? response.record : null,
					token: isAuth ? response.token : "",
				},
			});

			// 여기에서 로컬 스토리지를 업데이트하는 코드를 추가할 수 있습니다.
			// 예를 들어, localStorage.setItem을 사용하여 업데이트합니다.

			// 응답이 성공적으로 왔을 때 반환합니다.
			return response;
		} catch (error) {
			console.error("Error during authentication:", error);
			const authData = {
				isAuth: false,
				user: null,
				token: "",
			};

			// Zustand 상태를 업데이트합니다.
			set({
				authState: authData,
			});

			// 여기에서 로컬 스토리지를 업데이트하는 코드를 추가할 수 있습니다.

			// 응답이 실패한 경우 반환합니다.
			return { isAuth: false, user: null, token: "" };
		}
	},

	signOut: async () => {
		const authData = {
			isAuth: false,
			user: null,
			token: "",
		};

		// Zustand 상태를 업데이트합니다.
		set({
			authState: authData,
		});

		// 여기에서 로컬 스토리지를 업데이트하는 코드를 추가할 수 있습니다.

		// AuthStore에서도 clear를 호출합니다.
		return await pb.authStore.clear();
	},

	cancelMembership: async (recordId) => {
		const authData = {
			isAuth: false,
			user: null,
			token: "",
		};

		// Zustand 상태를 업데이트합니다.
		set({
			authState: authData,
		});

		// 여기에서 로컬 스토리지를 업데이트하는 코드를 추가할 수 있습니다.

		// 해당 사용자 레코드를 삭제합니다.
		return await pb.collection("users").delete(recordId);
	},
}));

export default useAuthStore;

//? SignIn 페이지 - Zustand Version

//function SignIn() {
//	// ... 이전 코드 ...

//	const { authState, signIn } = authStore();

//	// useStorage 훅을 사용하여 users 정보 스토리지 생성
//	const { storageData: users, update: updateUsers } = useStorage("users", []);

//	const handleSignIn = async (e) => {
//		e.preventDefault();

//		const { id, password } = formState;

//		// pb.collection("users").authWithPassword(id, password) 함수를 사용하여 사용자 인증을 시도합니다.
//		const response = await pb
//			.collection("users")
//			.authWithPassword(id, password);

//		// 로그인에 성공하면 사용자 정보를 스토리지에 저장합니다.
//		const user = {
//			id: response.user.id, // 사용자 아이디 또는 다른 필요한 정보를 포함
//			token: response.token, // 토큰 또는 다른 필요한 정보를 포함
//		};

//		// 저장된 사용자 정보를 가져옵니다.
//		const storedUsers = users || [];

//		// 중복된 사용자 정보가 없는 경우에만 추가합니다.
//		const isDuplicate = storedUsers.some(
//			(storedUser) => storedUser.id === user.id
//		);
//		if (!isDuplicate) {
//			const updatedUsers = [...storedUsers, user];
//			// 스토리지의 users 정보를 업데이트합니다.
//			updateUsers(updatedUsers);
//		}

//		// 다른 로그인 관련 로직 및 화면 리다이렉트 코드...
//	};

//	// ... 나머지 코드 ...
//}

//! 로컬스토리지에 저장된 사용자 정보와 동기화(인증상태 유지)

//useEffect(() => {
//	if (storageData) {
//		const { token, model } = storageData;
//		setAuthState({
//			isAuth: !!model,
//			user: model,
//			token,
//		});
//	}
//}, [storageData]);

//! 사용자 인증상태 변경시

//useEffect(() => {
//  // 업데이트 될 때만 상태 변경
//  const unsub = pb.authStore.onChange((token, model) => {
//    setAuthState((state) => ({
//      ...state,
//      isAuth: !!model,
//      user: model,
//      token,
//    }));
//  });

//  return () => {
//    unsub?.();
//  };
//}, []);

//! 로그아웃 로직

//import React from "react";
//import { useAuthStore } from "./useAuthStore"; // useAuthStore를 가져옵니다.

//function LogoutButton() {
//	const { signOut } = useAuthStore(); // useAuthStore 훅에서 signOut 함수를 가져옵니다.

//	const handleLogout = async () => {
//		try {
//			// 로그아웃 요청을 보냅니다.
//			await signOut();

//			// 로그아웃에 성공하면 홈페이지로 리다이렉트 또는 다른 작업을 수행합니다.
//			// 예: 리다이렉트
//			window.location.href = "/"; // 홈페이지로 리다이렉트합니다.
//		} catch (error) {
//			console.error("로그아웃 중 오류 발생:", error);
//			// 로그아웃에 실패한 경우 오류 처리 로직을 추가할 수 있습니다.
//		}
//	};

//	return <button onClick={handleLogout}>로그아웃</button>;
//}

//export default LogoutButton;
