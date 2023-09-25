import pb from "@/api/pocketbase";
import { useEffect, useState } from "react";

const useMovieStore = () => {
	const [contents, setContents] = useState([]);
	const [status, setStatus] = useState("pending");
	const [error, setError] = useState(null);

	useEffect(() => {
		setStatus("loading");

		Promise.all([pb.collection("movie").getFullList()])
			.then((movieList) => {
				setContents([{ title: "영화", data: movieList }]);
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

export default useMovieStore;
