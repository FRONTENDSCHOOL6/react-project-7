import React, { useState, useEffect } from "react";
import { shape, bool, string, number, object, func } from "prop-types";
import TwitterIcon from "/assets/twitter-logo.png";
import ShareIcon from "/assets/share-logo.png";
import FacebookIcon from "/assets/facebook-logo.png";
import CopyLink from "../../components/detail/ShareLink";
import pb from "@/api/pocketbase";
import S from "../detail/Contents.module.css";

export default function DetailArticle({
	state,
	setState,
	ratingText,
	versionText,
	setIsShareOpen,
	isShareOpen,
	contentType,
	id,
}) {
	const [isChanged, setChanged] = useState(false); //? 찜 버튼 상태
	const [userId, setUserId] = useState(null);

	useEffect(() => {
		const userFromLocalStorage = JSON.parse(
			localStorage.getItem("pocketbase_auth") || "{}"
		);
		const loggedInUserId = userFromLocalStorage?.model?.id;

		if (loggedInUserId) {
			setUserId(loggedInUserId);
		}
	}, []);

	const [favorites, setFavorites] = useState({
		favoriteProgram: [],
		favoriteMovie: [],
	});

	const handleHeart = async () => {
		let newFavorites;

		try {
			const userData = await pb.collection("users").getOne(userId);
			let updatedFavorites = {
				favoriteProgram: [...userData.favoriteProgram],
				favoriteMovie: [...userData.favoriteMovie],
			};

			//? 프로그램
			if (contentType === "program") {
				newFavorites = updatedFavorites.favoriteProgram
					? [...updatedFavorites.favoriteProgram]
					: [];

				if (!isChanged) {
					newFavorites.push(id);
				} else {
					newFavorites = newFavorites.filter((programId) => programId !== id);
				}

				updatedFavorites.favoriteProgram = newFavorites;

				//? 영화
			} else if (contentType === "movie") {
				newFavorites = updatedFavorites.favoriteMovie
					? [...updatedFavorites.favoriteMovie]
					: [];

				if (!isChanged) {
					newFavorites.push(id);
				} else {
					newFavorites = newFavorites.filter((movieId) => movieId !== id);
				}

				updatedFavorites.favoriteMovie = newFavorites;
			}

			await pb.collection("users").update(userId, updatedFavorites);

			setChanged(!isChanged);
			setFavorites(updatedFavorites);
		} catch (error) {
			console.error(`Failed to update favorites`, error);
		}
	};

	return (
		<article className={S.article}>
			<div className={`${S.gradation} -translate-x-1/2 -translate-y-1/2`}>
				<div
					className={S.poster}
					style={{ backgroundImage: `url(${state.poster})` }}
				/>
			</div>
			<div className={S.articleBg}>
				<div className="w-2/5 p-[1%]">
					<h2 className={S.articleTitle}>{state.title}</h2>
					<div className="border-gray300 ">
						<span className={S.tag}>{state.release}</span>
						<span className={S.tag}>{ratingText[state.rating]}</span>
						{state.runningTime && (
							<span className={S.tag}>{state.runningTime}분</span>
						)}
						{state.version !== "X" &&
							state.version &&
							state.version !== "x" && (
								<span className={S.tag}>{versionText[state.version]}</span>
							)}
						{state.producer && <span className={S.tag}>{state.producer}</span>}
						{state.season && <span className={S.tag}>시즌{state.season}</span>}
						{state.subtitle && <span className={S.tag}>자막</span>}
						{state.isDRM && <span className={S.tag}>DRM</span>}
					</div>
					<div className="flex">
						<button className={S.playBtn} type="submit">
							<span className="text-center">▶</span> 시청하기
						</button>
						<button className={S.likeBtn} type="submit" onClick={handleHeart}>
							<img
								className={S.imgBtn}
								src={isChanged ? "assets/full-heart.svg" : "assets/heart.svg"}
								alt="하트 버튼"
							/>
							<span className="text-white">찜</span>
						</button>
						<div className="relative">
							<button
								className={S.likeBtn}
								type="submit"
								onClick={() => setIsShareOpen(!isShareOpen)}
							>
								<img className={S.shareBtn} alt="공유 버튼" />
								<span className="text-white">공유</span>
							</button>
							{isShareOpen && (
								<div
									className={`${S.sharePopup} flex justify-around items-center`}
								>
									<CopyLink
										platform="Link"
										url={window.location.href}
										src={ShareIcon}
									/>
									<CopyLink
										platform="Facebook"
										url="https://www.facebook.com/sharer/sharer.php"
										src={FacebookIcon}
									/>
									<CopyLink
										platform="Twitter"
										url={window.location.href}
										src={TwitterIcon}
									/>
								</div>
							)}
						</div>
					</div>
					<dl className="flex mt-[1.5625rem] font-semibold">
						<dt className={S.titleInfo}>크리에이터</dt>
						<dd className={S.truncate}>{state.creator}</dd>
					</dl>
					<dl className="flex font-semibold">
						<dt className={S.titleInfo}>출연</dt>
						<p className={`${S.actor} ${S.truncate}`}>{state.actor}</p>
					</dl>

					<p
						className={`${S.moreInfo} ${
							state.showFullDescription ? "" : S.truncate
						}`}
					>
						{state.description}
					</p>
					<button
						onClick={() =>
							setState((prevState) => ({
								...prevState,
								showFullDescription: !prevState.showFullDescription,
							}))
						}
						type="button"
					>
						{state.showFullDescription ? "접기" : "더보기"}
					</button>
				</div>
				<div className="w-[23%]">
					<img className="" src={state.poster} />
				</div>
			</div>
		</article>
	);
}

DetailArticle.propTypes = {
	state: shape({
		showFullDescription: bool,
		title: string,
		producer: bool,
		poster: string,
		actor: string,
		creator: string,
		description: string,
		release: string,
		rating: number,
		version: string,
		season: bool,
		subtitle: bool,
		isDRM: bool,
		runningTime: number,
	}).isRequired,
	ratingText: object.isRequired,
	versionText: object.isRequired,
	handleHeart: func.isRequired,
	isChanged: bool.isRequired,
	setIsShareOpen: func.isRequired,
	setState: func.isRequired,
	isShareOpen: bool.isRequired,
	contentType: string.isRequired,
	id: string.isRequired,
};
