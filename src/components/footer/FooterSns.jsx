import { Link } from "react-router-dom";
import S from "./Footer.module.css";
import youtubeIcon from "/assets/youtube.png";
import instagramIcon from "/assets/instagram.png";
import twitterIcon from "/assets/twitter.png";
import facebookIcon from "/assets/facebook.png";

function FooterSns() {
	return (
		<ul className={S.sns}>
			<li>
				<Link
					to="https://www.youtube.com/c/TVING_official"
					className={S.snsItem}
				>
					<img src={youtubeIcon} alt="유튜브" className={S.snsImg} />
				</Link>
			</li>
			<li>
				<Link
					to="https://www.instagram.com/tving.official"
					className={S.snsItem}
				>
					<img src={instagramIcon} alt="인스타그램" className={S.snsImg} />
				</Link>
			</li>
			<li>
				<Link to="https://twitter.com/tvingdotcom" className={S.snsItem}>
					<img src={twitterIcon} alt="트위터" className={S.snsImg} />
				</Link>
			</li>
			<li>
				<Link to="https://www.facebook.com/CJTVING" className={S.snsItem}>
					<img src={facebookIcon} alt="페이스북" className={S.facebookImg} />
				</Link>
			</li>
		</ul>
	);
}

export default FooterSns;
