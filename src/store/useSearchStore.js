import { create } from "zustand";
import pb from "@/api/pocketbase";
const useSearchStore = create((set) => ({
	searchData: "",
	contents: null,
	allContents: [],
	status: "pending",
	error: null,
	hasSearched: false,
	recentSearches: [],

	setSearchData: (data) => {
		//console.log("Setting search data:", data);
		set({ searchData: data });
	},
	setHasSearched: (hasSearched) => {
		//console.log("Setting hasSearched to", hasSearched);
		set({ hasSearched });
	},
	addRecentSearch: (searchTerm) => {
		set((state) => ({
			recentSearches: [searchTerm, ...state.recentSearches],
		}));
	},
	removeRecentSearch: (searchTerm) => {
		set((state) => ({
			recentSearches: state.recentSearches.filter(
				(term) => term !== searchTerm
			),
		}));
	},
	clearRecentSearches: () => {
		set({ recentSearches: [] });
	},

	fetchData: async (query) => {
		try {
			const [programList, movieList] = await Promise.all([
				pb.collection("program").getFullList({ filter: `title ~ "${query}"` }),
				pb.collection("movie").getFullList({ filter: `title ~ "${query}"` }),
			]);
			//console.log("Fetched program list:", programList);
			//console.log("Fetched movie list:", movieList);
			const filteredPrograms = programList.filter((program) =>
				program.title.includes(query)
			);
			const filteredMovies = movieList.filter((movie) =>
				movie.title.includes(query)
			);
			set((state) => ({
				contents: [
					{ title: "TV 프로그램", data: filteredPrograms },
					{ title: "영화", data: filteredMovies },
				],
				allContents: [...filteredPrograms, ...filteredMovies],
			}));
		} catch (error) {
			console.error("Error fetching data:", error);
			set({
				error,
				status: "error",
			});
		}
	},
}));

export default useSearchStore;
