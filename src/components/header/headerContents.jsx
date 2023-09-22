import S from "@/components/header/Header.module.css";
import { Link } from "react-router-dom";

function HeaderContents() {
	return (
		<>
			<ul className={S.content}>
				<li className={S.contentList}>
					<Link href="/" className={S.home}>
						홈
					</Link>
				</li>
				<li className={S.contentList}>
					<Link to="program">TV 프로그램</Link>
				</li>
				<li className={S.contentList}>
					<Link to="movie">영화</Link>
				</li>
				<li className={S.contentList}>
					<Link to="favorite">내가 찜한 콘텐츠</Link>
				</li>
			</ul>
		</>
	);
}

export default HeaderContents;
