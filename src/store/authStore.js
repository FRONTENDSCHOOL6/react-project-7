import { create } from "zustand";
import pb from "@/api/pocketbase";

//@ 초기 인증 상태
const initialAuthState = {
	isAuth: false,
	user: null,
	token: "",
};

//@ Zustand 스토어 생성
const useAuthStore = create((set) => ({
	authState: initialAuthState,
	setAuthState: (state) => set({ authState: state }),
	signUp: async (registerUser) => {
		return await pb.collection("users").create(registerUser);
	},
	signIn: async (usernameOrEmail, password) => {
		const response = await pb
			.collection("users")
			.authWithPassword(usernameOrEmail, password);
		set({
			authState: { isAuth: true, user: response.user, token: response.token },
		});
		return response;
	},
	signOut: async () => {
		set({ authState: initialAuthState });
		return await pb.authStore.clear();
	},
	cancelMembership: async (recordId) => {
		set({ authState: initialAuthState });
		return await pb.collection("users").delete(recordId);
	},
}));

export default useAuthStore;
