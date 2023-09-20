import { create } from "zustand";
import pb from "@/api/pocketbase";

const idStore = {
	id: "",
	isIdFound: false,
};

const useIDStore = create((set) => ({
	idState: idStore,

	findId: async (email, id) => {
		try {
			const result = await pb.collection("users").getList(1, 20, {
				filter: `(email= "${email}")`,
			});
			const isIdFound = !!result;
			console.log(result);
			console.log(isIdFound);
			set({
				idState: {
					isIdFound: isIdFound,
					id: isIdFound ? result.id : "",
				},
			});
			return result;
		} catch (error) {
			console.error("Error during find ID :", error);
			const idData = {
				isIdFound: false,
				id: "",
			};

			set({
				idState: idData,
			});
		}
		return { isIdFound: false, id: "" };
	},
}));

export default useIDStore;