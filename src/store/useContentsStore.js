import pb from "@/api/pocketbase";
import { useEffect, useState } from "react";

const useContentsStore = () => {
	const [contents, setContents] = useState([]);
	const [status, setStatus] = useState("pending");
	const [error, setError] = useState(null);

	useEffect(() => {
		setStatus("loading");

		Promise.all([
			pb.collection("program").getFullList(),
			pb.collection("movie").getFullList(),
		])
			.then(([programList, movieList]) => {
				setContents([
					{ title: "TV 프로그램", data: programList },
					{ title: "영화", data: movieList },
				]);
				setStatus("success");
			})
			.catch((error) => {
				setError(error);
				setStatus("error");
			});
	}, []);
	return {
		contents,
		status,
		error,
	};
};

export default useContentsStore;
