import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black w-full h-[100px] px-[70px] text-gray200 flex flex-row justify-between items-center">
      <ul className="content__list flex flex-row gap-x-14 text-xl md:max-xl:gap-x-10">
        <li className="logo">
          <Link to="#">
            <img src="/" alt="타잉" />
          </Link>
        </li>
        <li className="home max-md:hidden">
          <Link href="#">
            홈
          </Link>
        </li>
        <li className="program max-md:hidden">
          <Link to="program">
            TV 프로그램
          </Link>
        </li>
        <li className="movie max-md:hidden">
          <Link to="movie">
            영화
          </Link>
        </li>
        <li className="live max-md:hidden">
          <Link to="live">
            실시간 LIVE
          </Link>
        </li>
      </ul>
      <ul className="profile__list flex flex-row gap-10">
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
  )
}