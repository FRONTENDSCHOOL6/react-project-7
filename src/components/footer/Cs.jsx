import { Link } from "react-router-dom";
import S from "./Footer.module.css";

function Cs() {
	return (
		<ul className={S.service}>
			<li className={S.serviceItem}>
				<Link to="/">고객센터</Link>
			</li>
			<li className={S.serviceItem}>
				<Link to="/">이용약관</Link>
			</li>
			<li className={S.serviceItemBold}>
				<Link to="/">개인정보처리방침</Link>
			</li>
			<li className={S.serviceItem}>
				<Link to="/">청소년 보호정책</Link>
			</li>
			<li className={S.serviceItem}>
				<Link to="/">법적고지</Link>
			</li>
			<li className={S.serviceItem}>
				<Link to="/">이벤트</Link>
			</li>
			<li className={S.serviceItem}>
				<Link to="/">인재채용</Link>
			</li>
		</ul>
	);
}

export default Cs;
