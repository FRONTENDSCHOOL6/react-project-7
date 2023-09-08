import { useState, useEffect }  from 'react';
import { Link } from "react-router-dom";
import S from "./Header.module.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  //@ 스크롤 이벤트
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`
      ${
        isScrolled ? "bg-gray800/80" : "to-transparent"
      }
      ${
        isScrolled ? "saturate-100 backdrop-blur-md" : ""
      }
      ${S.header}`}
    >
      <h1>
          <Link to="/">
            <img src="/assets/logo.svg" alt="타잉" />
          </Link>
      </h1>
      <ul className={S.content}>
        <li>
          <Link href="/">
            홈
          </Link>
        </li>
        <li>
          <Link to="program">
            TV 프로그램
          </Link>
        </li>
        <li>
          <Link to="movie">
            영화
          </Link>
        </li>
        <li>
          <Link to="live">
            실시간 LIVE
          </Link>
        </li>
      </ul>
      <ul className={S.profile}>
        <li>
          <Link to="/">
            <img src="/assets/search.png" alt="검색" className={S.profileImg} />
          </Link>
        </li>
        <li>
          <Link to="profile">
            <img src="/assets/profile.png" alt="프로필" className={S.profileImg} />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;