import { Link } from "react-router-dom"
import S from "./Footer.module.css"
import youtubeIcon from "/assets/youtube.png"
import instagramIcon from "/assets/instagram.png"
import twitterIcon from "/assets/twitter.png"
import facebookIcon from "/assets/facebook.png"

function Footer() {
	return (
		<footer className={S.footer}>
			{/* 첫번째 줄 */}
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
			<hr className={S.horizontalBar} />
			{/* 두번째줄 */}
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
			{/* 세번째줄 */}
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
					<span>
						사업장 : 서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층
					</span>
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
					<span>
						ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 012-345-6789
					</span>
					<span className={S.descriptionVerticalBar}></span>
					<span>Mnet 고객센터(반송편성문의) : 1855-1631</span>
				</p>
			</div>
			{/* sns 아이콘 */}
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
			{/* 저작권 */}
			<small className={S.copyright}>
				Copyright &copy; 주식회사 티빙 All right reserved.
			</small>
		</footer>
	)
}

export default Footer
