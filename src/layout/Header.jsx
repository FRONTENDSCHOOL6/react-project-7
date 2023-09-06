export default function Header() {
  return (
    <header className="bg-black w-full h-[100px] px-[70px] text-gray200 flex flex-row justify-between items-center">
      <ul className="content__list flex flex-row gap-x-14 text-xl">
        <li className="logo">
          <a href="">
            <img src="/" alt="타잉" />
          </a>
        </li>
        <li className="home max-md:hidden">
          <a href="/">
            홈
          </a>
        </li>
        <li className="program max-md:hidden">
          <a href="program">
            TV 프로그램
          </a>
        </li>
        <li className="movie max-md:hidden">
          <a href="movie">
            영화
          </a>
        </li>
        <li className="live max-md:hidden">
          <a href="live">
            실시간 LIVE
          </a>
        </li>
      </ul>
      <ul className="profile__list flex flex-row gap-10">
        <li>
          <a href="">
            <img src="" alt="검색" />
          </a>
        </li>
        <li>
          <a href="profile">
            <img src="" alt="프로필" />
          </a>
        </li>
      </ul>
    </header>
  )
}