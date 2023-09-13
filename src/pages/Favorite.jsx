import S from "./Favorite.module.css";

function Favorite() {
	return (
		<main className={S.main}>
			<section className={S.section}>
				<p className="text-xl font-extrabold">내가 찜한 콘텐츠</p>
			</section>
		</main>
	);
}

export default Favorite;
