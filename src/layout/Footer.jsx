import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full pt-[70px] px-10 pb-24 flex flex-col gap-6 bg-black text-xl text-gray500 md:max-lg:text-lg sm:max-md:gap-4">
      {/* 첫번째 줄 */}
      <div className="flex flex-row justify-between">
        <p className="inline-block">
          공지사항
          <Link to="/" className="ml-5 xl:hover:text-gray200 duration-200 md:max-lg:ml-2 sm:max-md:text-gray200">[안내] 합병보고 주주총회에 갈음하는 공고</Link>
        </p>
        <div className="flex flex-row gap-7 items-center md:max-lg:gap-2 max-md:hidden">
          <p>
            <Link to="/" className="flex flex-row gap-3 xl:hover:text-gray200 duration-200 md:max-lg:gap-2">
              브랜드 바로가기
              <span>+</span>
            </Link>
          </p>
          <span className="w-[1px] bg-gray500 h-3/4"></span>
          <p>
            <Link to="/" className="flex flex-row gap-3 xl:hover:text-gray200 duration-200 md:max-lg:gap-2">
              그룹 계열사 바로가기
              <span>+</span>
            </Link>
          </p>
        </div>
      </div>
      <hr className="border-[#212121] my-6" />
      {/* 두번째줄 */}
      <ul className="flex flex-row gap-9 text-gray400 md:max-lg:text-lg md:max-lg:gap-6 max-md:flex-col max-md:gap-1">
        <li className="xl:hover:text-gray200 duration-200 sm:max-md:text-gray200">
          <Link to="/">고객센터</Link>
        </li>
        <li className="xl:hover:text-gray200 duration-200 sm:max-md:text-gray200">
          <Link to="/">이용약관</Link>
        </li>
        <li className="font-extrabold xl:hover:text-gray200 duration-200 sm:max-md:text-gray200 max-md:font-normal">
          <Link to="/">개인정보처리방침</Link>
        </li>
        <li className="xl:hover:text-gray200 sm:max-md:text-gray200 duration-200">
          <Link to="/">청소년 보호정책</Link>
        </li>
        <li className="xl:hover:text-gray200 sm:max-md:text-gray200 duration-200">
          <Link to="/">법적고지</Link>
        </li>
        <li className="xl:hover:text-gray200 sm:max-md:text-gray200 duration-200">
          <Link to="/">이벤트</Link>
        </li>
        <li className="xl:hover:text-gray200 sm:max-md:text-gray200 duration-200">
          <Link to="/">인재채용</Link>
        </li>
      </ul>
      {/* 세번째줄 */}
      <div className="flex flex-col text-lg md:max-lg:text-sm max-md:hidden">
        <p className="flex flex-row gap-2 items-center">
          <span>대표이사 : 노치현</span>
          <span className="w-[1px] bg-gray700 h-[16px]"></span>
          <Link to="/" className="underline">사업자정보확인</Link>
          <span className="w-[1px] bg-gray700 h-[16px]"></span>
          <span>사업자등록번호 : 012-34-56789</span>
          <span className="w-[1px] bg-gray700 h-[16px]"></span>
          <span>통신판매신고번호 : 2023-서울마포-1234호</span>
        </p>
        <p className="flex flex-row gap-2 items-center">
          <span>사업장 : 서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층</span>
          <span className="w-[1px] bg-gray700 h-[16px]"></span>
          <span>호스팅사업자 : 카카오(주)</span>
        </p>
        <p className="flex flex-row gap-2 items-center">
          <Link to="/" className="underline">고객문의 바로가기</Link>
          <span className="w-[1px] bg-gray700 h-[16px]"></span>
          <Link to="mailto:abcdefg98765@example.com" className="underline">대표메일 : taing@example.com</Link>
          <span className="w-[1px] bg-gray700 h-[16px]"></span>
          <Link to="tel:+1234567890" target="_blank" className="underline">고객센터 : 1234-5678 (평일/주말 09시~18시, 공휴일 휴무)</Link>
        </p>
        <p className="flex flex-row gap-2 items-center">
          <span>ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 012-345-6789</span>
          <span className="w-[1px] bg-gray700 h-[16px]"></span>
          <span>Mnet 고객센터(반송편성문의) : 1855-1631</span>
        </p>
      </div>
      {/* sns 아이콘 */}
      <ul className="flex flex-row gap-5">
        <li className="youtube">
          <Link to="https://www.youtube.com/c/TVING_official">
            <img src="" alt="유튜브" />
          </Link>
        </li>
        <li className="instagram">
          <Link to="https://www.instagram.com/tving.official">
            <img src="" alt="인스타그램" />
          </Link>
        </li>
        <li className="twitter">
          <Link to="https://twitter.com/tvingdotcom">
            <img src="" alt="트위터" />
          </Link>
        </li>
        <li className="facebook">
          <Link to="https://www.facebook.com/CJTVING">
            <img src="" alt="페이스북" />
          </Link>
        </li>
      </ul>
      {/* 저작권 */}
      <small className="copyright text-lg md:max-lg:text-sm">Copyright &copy; 주식회사 티빙 All right reserved.</small>
    </footer>
  )
}
