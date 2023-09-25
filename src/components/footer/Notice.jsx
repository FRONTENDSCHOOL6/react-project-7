import { Link } from "react-router-dom";
import S from "./Footer.module.css";

function Notice() {
	return (
		<div className={S.notice}>
			<p>
				공지사항
				<Link to="/" className={S.noticeContent}>
					[안내] 합병보고 주주총회에 갈음하는 공고
				</Link>
			</p>
			<div className={S.buttons}>
				<p>
					<Link to="/" className={S.goToButton}>
						브랜드 바로가기
						<span>+</span>
					</Link>
				</p>
				<span className={S.noticeVerticalBar}></span>
				<p>
					<Link to="/" className={S.goToButton}>
						그룹 계열사 바로가기
						<span>+</span>
					</Link>
				</p>
			</div>
		</div>
	);
}

export default Notice;
