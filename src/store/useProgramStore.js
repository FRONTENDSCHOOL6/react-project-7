import pb from "@/api/pocketbase";
import { useEffect, useState } from "react";

const useProgramStore = () => {
	const [contents, setContents] = useState([]);
	const [status, setStatus] = useState("pending");
	const [error, setError] = useState(null);

	useEffect(() => {
		setStatus("loading");

		Promise.all([pb.collection("program").getFullList()])
			.then((programList) => {
				setContents([{ title: "TV 프로그램", data: programList }]);
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

export default useProgramStore;
