import { create } from "zustand";

const buttonStore = (set) => ({
	buttonId: null,
	isButtonClicked: null,

	setButtonId: (buttonId) => set({ buttonId }),
	setIsButtonClicked: (isButtonClicked) => set({ isButtonClicked }),
});

const useButtonStore = create(buttonStore);

export default useButtonStore;
