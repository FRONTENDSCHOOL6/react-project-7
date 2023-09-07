import { useState, useEffect }  from 'react';
import { Link } from "react-router-dom";
import S from "./Header.module.css";

// export default function Header() {

//   return (
//     <header className="bg-gradient-to-b from-gray700 to-transparent w-full h-[100px] px-[70px] text-gray200 flex flex-row items-center max-md:px-5 max-lg:px-7 max-lg:text-lg">
//       <h1 className="logo">
//           <Link to="#">
//             <img src="/" alt="타잉" />
//           </Link>
//       </h1>
//       <ul className="content flex flex-row justify-between gap-x-14 text-xl md:max-xl:gap-x-10 max-lg:ml-7 max-md:ml-4 ml-11 max-md:gap-x-4">
//         <li className="home max-md:text-base">
//           <Link href="#">
//             홈
//           </Link>
//         </li>
//         <li className="program max-md:text-base">
//           <Link to="program">
//             TV 프로그램
//           </Link>
//         </li>
//         <li className="movie max-md:text-base">
//           <Link to="movie">
//             영화
//           </Link>
//         </li>
//         <li className="live max-md:text-base">
//           <Link to="live">
//             실시간 LIVE
//           </Link>
//         </li>
//       </ul>
//       <ul className="profile flex flex-row gap-10 ml-auto max-md:gap-x-4">
//         <li>
//           <Link to="/">
//             <img src="" alt="검색" />
//           </Link>
//         </li>
//         <li>
//           <Link to="profile">
//             <img src="" alt="프로필" />
//           </Link>
//         </li>
//       </ul>
//     </header>
//   )
// }

export default function Header() {
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
      <h1 className="logo">
          <Link to="/">
            <img src="/" alt="타잉" />
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
            <img src="" alt="검색" />
          </Link>
        </li>
        <li>
          <Link to="profile">
            <img src="" alt="프로필" />
          </Link>
        </li>
      </ul>
    </header>
  );
}