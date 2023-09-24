import { getPbImageURL } from "./../../utils/getPbImageURL";
import S from "./Category.module.css";
import { Link } from "react-router-dom";
import useButtonStore from "./../../store/buttonStore";
import useProgramStore from "./../../store/useProgramStore";
import Spinner from "../common/Spinner";

function ProgramContent() {
	//? 버튼 클릭에 관련된 변수
	const { buttonId, setButtonId } = useButtonStore();
	const { isButtonClicked, setIsButtonClicked } = useButtonStore();

	//? pb에서 데이터를 가져오는 변수
	const { contents, status } = useProgramStore();
	useProgramStore();
	if (status === "loading") {
		return <Spinner />;
	}

	if (isButtonClicked === true) {
		return (
			<>
				{contents?.map((contentCategory) =>
					contentCategory.data.map((item) =>
						item
							.filter((item) => item.genre === buttonId)
							.map((item) => (
								<div key={item.id} className={S.listContent}>
									<Link to={`/contents/${item.id}`} className={S.listContent}>
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

export default ProgramContent;
