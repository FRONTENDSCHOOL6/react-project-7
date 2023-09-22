import { useEffect, useState } from "react";
import pb from "@/api/pocketbase";
import { getPbImageURL } from "@/utils/getPbImageURL";
import S from "./Category.module.css";
import { Link } from "react-router-dom";
import useButtonStore from "@/store/buttonStore";

function MovieContent() {
	//? 버튼 클릭에 관련된 변수
	const { buttonId, setButtonId } = useButtonStore();
	const { isButtonClicked, setIsButtonClicked } = useButtonStore();

	//? pb에서 데이터를 가져오는 변수
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
	if (isButtonClicked === true) {
		return (
			<>
				{contents?.map((contentCategory) =>
					contentCategory.data.map((item) =>
						item
							.filter((item) => item.genre === buttonId)
							.map((item) => (
								<div key={item.id} className={S.listContent}>
									<Link to={`/contents/${item.id}`}>
										<img src={getPbImageURL(item, "poster")} alt={item.title} />
										<p className="text-xl mt-2  whitespace-nowrap overflow-hidden text-ellipsis">
											{item.title}
										</p>
									</Link>
								</div>
							))
					)
				)}
			</>
		);
	} else {
		return (
			<>
				{contents?.map((contentCategory) =>
					contentCategory.data.map((item) =>
						item.map((item) => (
							<div key={item.id} className={S.listContent}>
								<Link to={`/contents/${item.id}`}>
									<img src={getPbImageURL(item, "poster")} alt={item.title} />
									<p className="text-xl mt-2  whitespace-nowrap overflow-hidden text-ellipsis">
										{item.title}
									</p>
								</Link>
							</div>
						))
					)
				)}
			</>
		);
	}
}

export default MovieContent;
