import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import TwitterIcon from "/assets/twitter-logo.png";
import ShareIcon from "/assets/share-logo.png";
import FacebookIcon from "/assets/facebook-logo.png";
import CopyLink from "../../components/detail/ShareLink";
import S from "../detail/Contents.module.css";

export default function DetailArticle({
	state,
	setState,
	ratingText,
	versionText,
	handleHeart,
	isChanged,
	setIsShareOpen,
	isShareOpen,
}) {
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
	state: PropTypes.shape({
		showFullDescription: PropTypes.bool,
		title: PropTypes.string,
		producer: PropTypes.bool,
		poster: PropTypes.string,
		actor: PropTypes.string,
		creator: PropTypes.string,
		description: PropTypes.string,
		release: PropTypes.string,
		rating: PropTypes.string,
		version: PropTypes.string,
		season: PropTypes.bool,
		subtitle: PropTypes.bool,
		isDRM: PropTypes.bool,
		runningTime: PropTypes.bool,
	}).isRequired,
	ratingText: PropTypes.object.isRequired,
	versionText: PropTypes.object.isRequired,
	handleHeart: PropTypes.func.isRequired,
	isChanged: PropTypes.bool.isRequired,
	setIsShareOpen: PropTypes.func.isRequired,
	setState: PropTypes.func.isRequired,
	isShareOpen: PropTypes.bool.isRequired,
};
