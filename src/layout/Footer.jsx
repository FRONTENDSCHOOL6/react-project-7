import S from "./../components/footer/Footer.module.css";
import Notice from "./../components/footer/Notice";
import Cs from "./../components/footer/Cs";
import Description from "./../components/footer/Description";
import FooterSns from "./../components/footer/FooterSns";

function Footer() {
	return (
		<footer className={S.footer}>
			<Notice />
			<hr className={S.horizontalBar} />
			<Cs />
			<Description />
			<FooterSns />
			<small className={S.copyright}>
				Copyright &copy; 주식회사 티빙 All right reserved.
			</small>
		</footer>
	);
}

export default Footer;
