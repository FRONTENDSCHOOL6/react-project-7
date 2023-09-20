import { create } from "zustand";

const useProfileStore = create((set) => ({
	profileData: null,
	setProfileData: (data) => set({ profileData: data }), // 프로필 데이터를 설정하는 함수
}));

export default useProfileStore;
