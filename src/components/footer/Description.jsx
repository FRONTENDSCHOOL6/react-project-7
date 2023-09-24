import { Link } from "react-router-dom";
import S from "./Footer.module.css";

function Description() {
	return (
		<div className={S.description}>
			<p className={S.descriptionItem}>
				<span>대표이사 : 노치현</span>
				<span className={S.descriptionVerticalBar}></span>
				<Link to="/" className={S.underline}>
					사업자정보확인
				</Link>
				<span className={S.descriptionVerticalBar}></span>
				<span>사업자등록번호 : 012-34-56789</span>
				<span className={S.descriptionVerticalBar}></span>
				<span>통신판매신고번호 : 2023-서울마포-1234호</span>
			</p>
			<p className={S.descriptionItem}>
				<span>사업장 : 서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층</span>
				<span className={S.descriptionVerticalBar}></span>
				<span>호스팅사업자 : 카카오(주)</span>
			</p>
			<p className={S.descriptionItem}>
				<Link to="/" className={S.line}>
					고객문의 바로가기
				</Link>
				<span className={S.descriptionVerticalBar}></span>
				<Link to="mailto:abcdefg98765@example.com" className={S.line}>
					대표메일 : taing@example.com
				</Link>
				<span className={S.descriptionVerticalBar}></span>
				<Link to="tel:+1234567890" target="_blank" className={S.line}>
					고객센터 : 1234-5678 (평일/주말 09시~18시, 공휴일 휴무)
				</Link>
			</p>
			<p className={S.descriptionItem}>
				<span>ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 012-345-6789</span>
				<span className={S.descriptionVerticalBar}></span>
				<span>Mnet 고객센터(반송편성문의) : 1855-1631</span>
			</p>
		</div>
	);
}

export default Description;
