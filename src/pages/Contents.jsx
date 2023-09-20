import S from "./Contents.module.css";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { getPbImageURL } from "@/utils/getPbImageURL";
import pb from "@/api/pocketbase";
import removeQuotes from "/react-project-7/src/utils/removeQuotes.js";
import separateComma from "/react-project-7/src/utils/separateComma.js";
import PocketBase from "pocketbase";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TwitterIcon from "/assets/twitter-logo.png";
import ShareIcon from "/assets/share-logo.png";
import FacebookIcon from "/assets/facebook-logo.png";
import ReviewItem from "../components/detail/EditReview";

function Contents() {
	//@ 포켓베이스 데이터 가져오기
	const [state, setState] = useState({
		showFullDescription: false,
		title: "",
		producer: false,
		poster: "",
		actor: "",
		creator: "",
		description: "",
		release: "",
		rating: "",
		version: "",
		season: false,
		subtitle: false,
		isDRM: false,
		runningTime: false,
		episodes: [],
		similar: [],
		related: [],
		episodeTitles: "",
		episodeThumbs: [],
		similarThumbs: [],
		relatedTitles: "",
	});

	const ratingText = {
		all: "전체 이용가",
		eighteen: "18세",
		twelve: "12세",
		fifteen: "15세",
		seven: "7세",
	};

	const versionText = {
		dubbed: "더빙판",
	};

	const { id } = useParams();
	const [comment, setComment] = useState([]);
	const [contentType, setContentType] = useState("");

	useEffect(() => {
		const handleData = async (type) => {
			try {
				const data = await pb
					.collection(type)
					.getOne(id, { expand: "reviews,reviews.writer" });
				setContentType(data.collectionName);
				console.log(data);
				const { expand } = data;
				if (expand) {
					setComment(expand.reviews);
				}

				let newState = {};

				//?포스터
				if (data.poster) {
					newState.poster = getPbImageURL(data, "poster");
				}

				//?에피소드
				if (data.episodeThumbs && data.episodeTitles && data.episodeInfos) {
					const episodeThumbs = data.episodeThumbs.map((imgName) =>
						getPbImageURL(
							{
								collectionId: data.collectionId,
								id: data.id,
								[imgName]: imgName,
							},
							imgName
						)
					);
					const episodeTitles = data.episodeTitles.split(",");
					const episodeInfos = data.episodeInfos.split(",");
					const episodes = [];

					for (let i = 0; i < episodeThumbs.length; i++) {
						if (episodeInfos[i]) {
							//?episodeInfos 있는 경우
							episodes.push({
								thumbUrl: episodeThumbs[i],
								title: episodeTitles[i],
								info: episodeInfos[i],
							});
						}
					}

					newState.episodes = episodes;
				}

				//? 비슷한 프로그램
				if (data.similarThumbs && data.similarInfos) {
					const similarThumbs = data.similarThumbs.map((imgName) =>
						getPbImageURL(
							{
								collectionId: data.collectionId,
								id: data.id,
								[imgName]: imgName,
							},
							imgName
						)
					);
					const similarInfos = data.similarInfos.split(",");

					const similar = [];

					for (let i = 0; i < similarThumbs.length; i++) {
						if (similarInfos[i]) {
							similar.push({
								thumbUrl: similarThumbs[i],
								info: similarInfos[i],
							});
						}
					}
					newState.similar = similar;
				}

				const keys = [
					"title",
					"actor",
					"creator",
					"description",
					"producer",
					"release",
					"season",
					"subtitle",
					"rating",
					"isDRM",
					"episodeTitles",
					"version",
				];
				for (let key of keys) {
					if (data[key]) {
						newState[key] = data[key];
					}
				}

				if (type === "movie" && data.runningTime) {
					newState.runningTime = data.runningTime;
				}
				if (type === "movie" && data.version) {
					newState.version = data.version;
				}

				return newState;
			} catch (error) {
				console.error(`Failed to fetch ${type} data`, error);
			}
		};

		Promise.all([handleData("program"), handleData("movie")])
			.then(([programState, movieState]) => {
				//? 최신 state 값 기반으로 새로운 state
				setState((prevState) => ({
					...prevState,
					...programState,
					...movieState,
				}));
			})
			.catch((error) => console.error(error));
	}, [id]);

	//@ 공유하기
	const handleShare = () => {
		navigator.clipboard.writeText(window.location.href);
		alert("링크가 복사되었습니다!");
	}; //? 공유 버튼 클릭시 현재 페이지 주소를 클립보드에 복사

	const shareToFacebook = () => {
		const currentUrl = window.location.href;
		const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
			currentUrl
		)}`;
		window.open(facebookShareUrl, "_blank");
	};

	const shareToTwitter = () => {
		const currentUrl = window.location.href;
		const text = "티빙! 오리지널을 만나보세요.";
		const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
			text
		)}&url=${encodeURIComponent(currentUrl)}`;
		window.open(twitterShareUrl, "_blank");
	};

	const [isShareOpen, setIsShareOpen] = useState(false);

	//@ review
	// review 기능 구현
	const [stars, setStars] = useState(0); //? 현재 별점
	const [hoverRating, setHoverRating] = useState(0); //? 마우스 호버시 별점
	const [reviewText, setReviewText] = useState(""); //? 현재 입력중인 리뷰
	const [reviews, setReviews] = useState([]); //? 저장된 리뷰
	const [editingReviewIndex, setEditingReviewIndex] = useState(null);
	const [editedComment, setEditedComment] = useState("");

	const formref = useRef(null);

	// 리뷰 입력
	const handleReviewChange = (e) => {
		if (editingReviewIndex !== null) {
			setEditedComment(e.target.value);
		} else {
			setReviewText(e.target.value);
		}
	};
	// 리뷰 전송
	const handleReviewSubmit = async (e) => {
		e.preventDefault();

		const userFromLocalStorage = JSON.parse(
			localStorage.getItem("pocketbase_auth") || "{}"
		);
		const userId = userFromLocalStorage?.user?.id;
		console.log(userId);

		if ((reviewText !== "" || editedComment !== "") && stars !== null) {
			const newReviews = [...reviews];
			if (editingReviewIndex !== null) {
				newReviews[editingReviewIndex].text = editedComment;
				newReviews[editingReviewIndex].stars = stars;
				setEditingReviewIndex(null);
				setEditedComment("");
			} else {
				newReviews.push({ text: reviewText, stars: stars });
				setStars(0);
				setHoverRating(0);
			}
			//? 새로운 리뷰 상태 설정
			setReviews(newReviews);

			//? 입력 필드 초기화
			setReviewText("");

			const reviewData =
				editingReviewIndex !== null
					? { text: editedComment, stars: stars }
					: { text: reviewText, stars: stars };

			try {
				const data = {
					star: reviewData.stars.toString(),
					writer: userId,
					contents: reviewData.text,
					programId: id,
				};
				const record = await pb.collection("review").create(data);
				console.log(record);
				if (record) {
					await pb.collection("users").update(userId, { "review+": record.id });
					console.log(contentType);
					await pb
						.collection(contentType)
						.update(data.programId, { "reviews+": record.id });
				}
				const newData = await pb
					.collection("review")
					.getOne(record.id, { expand: "writer" });

				setComment((prev) => [...prev, newData]);
			} catch (error) {
				console.error(error);
			}
		}
	};

	//@ 찜
	const [isChanged, setChanged] = useState(false); //? 찜 버튼 상태

	const handleHeart = () => {
		setChanged(!isChanged);
	}; //? 찜 버튼 클릭시 호출

	//@ 연속 재생
	const [isToggled, setIsToggled] = useState(false); //? 연속 재생 버튼 상태

	const handleClick = () => {
		setIsToggled(!isToggled);
	}; //? 연속 재생 토글 버튼 클릭시 호출

	//@ 에피소드 정렬 기능 구현
	const [sortKey, setSortKey] = useState(0); //? 에피소드 정렬 후 리렌터링
	const [isSorted, setIsSorted] = useState(true); //? 에피소드 정렬 방식, true:첫화부터

	const handleSortAsc = () => {
		const sortedEpisodes = [...state.episodes].sort((a, b) => {
			const titleA = parseInt(a.title.split(",")[0]);
			const titleB = parseInt(b.title.split(",")[0]);

			console.log(`titleA: ${titleA}, parsed: ${parseInt(titleA)}`);
			console.log(`titleB: ${titleB}, parsed: ${parseInt(titleB)}`);

			return titleA - titleB;
		});

		setState((prevState) => ({
			...prevState,
			episodes: sortedEpisodes,
		}));
		setIsSorted(true);
	};

	const handleSortDesc = () => {
		const sortedEpisodes = [...state.episodes].sort((a, b) => {
			const titleA = parseInt(a.title.split(",")[0]);
			const titleB = parseInt(b.title.split(",")[0]);

			console.log(`titleA: ${titleA}, parsed: ${parseInt(titleA)}`);
			console.log(`titleB: ${titleB}, parsed: ${parseInt(titleB)}`);

			return titleB - titleA;
		});

		setState((prevState) => ({
			...prevState,
			episodes: sortedEpisodes,
		}));
		setIsSorted(false);
	};

	return (
		<main className={`text-gray300 ${S.main} w-screen overflow-hidden`}>
			<article className={S.article}>
				<div className={`${S.gradation} -translate-x-1/2 -translate-y-1/2`}>
					<div
						className={S.poster}
						style={{ backgroundImage: `url(${state.poster})` }}
					/>
				</div>
				<div className={S.articleBg}>
					<div className="w-2/5">
						<h2 className={S.articleTitle}>{state.title}</h2>
						<div className="border-gray300 ">
							<span className={S.tag}>{state.release}</span>
							<span className={S.tag}>{ratingText[state.rating]}</span>
							{state.runningTime && (
								<span className={S.tag}>{state.runningTime}분</span>
							)}
							{state.version !== "X" && state.version && (
								<span className={S.tag}>{versionText[state.version]}</span>
							)}
							{state.producer && (
								<span className={S.tag}>{state.producer}</span>
							)}
							{state.season && (
								<span className={S.tag}>시즌{state.season}</span>
							)}
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
										<img
											className={S.shareImg}
											src={ShareIcon}
											onClick={handleShare}
										></img>
										<img
											className={S.shareImg}
											src={FacebookIcon}
											onClick={shareToFacebook}
										/>
										<img
											className={S.shareImg}
											src={TwitterIcon}
											onClick={shareToTwitter}
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
					<div className="w-[25%]">
						<img className="" src={state.poster} />
					</div>
				</div>
			</article>
			<div>
				<section className={S.section}>
					<hr className="border-gray400" />
					<div className={S.sectionDiv}>
						<button className={S.sectionTitle} type="submit">
							{state.title}
							<div>
								{state.episodeThumbs.map((imgUrl, index) => (
									<img
										key={index}
										src={imgUrl}
										alt={`Episode Thumbnail ${index}`}
									/>
								))}
							</div>
						</button>
						<div className={S.sortBtn}>
							<button
								className={`${isSorted ? `${S.asc}` : `${S.desc}`}`}
								type="submit"
								onClick={handleSortAsc}
							>
								첫화부터
							</button>
							<button
								className={`pl-[1.375rem] mr-[2.375rem] ${
									!isSorted ? `${S.asc}` : `${S.desc}`
								}`}
								type="submit"
								onClick={handleSortDesc}
							>
								최신화부터
							</button>
							<div className="flex items-center">
								<span
									className={` pr-[0.5rem] ${
										isToggled ? `${S.playOn}` : `${S.playOff}`
									}`}
								>
									연속재생
								</span>
								<button
									className={` text-white ${S.toggleBtn} ${
										isToggled ? `${S.on}` : `${S.off}`
									}`}
									type="submit"
									onClick={handleClick}
								>
									{" "}
									<div className={S.circle} />
								</button>
							</div>
						</div>
					</div>
					<div className=" w-full font-semibold">
						<Swiper
							className="px-[3rem] detailSwiper"
							key={sortKey}
							spaceBetween={10}
							modules={[Pagination, Navigation]}
							slidesPerView={4}
							tabIndex={0}
							breakpoints={{
								480: { slidesPerView: 2 },
								768: { slidesPerView: 3 },
								1024: { slidesPerView: 4 },
							}}
							navigation={{
								nextEl: "#nextButton",
								prevEl: "#prevButton",
								keyboard: {
									enabled: true,
									onlyInViewport: false,
								},
							}}
						>
							{state.episodes.map((episode, index) => (
								<SwiperSlide key={index}>
									<figure className={`pt-[0.5625rem] ${S.figureHoverEffect}`}>
										<img
											src={episode.thumbUrl}
											alt={`Episode Thumbnail ${index}`}
										></img>
										<figcaption className=" pt-[0.5625rem]">
											<h4 className="text-white text-lg">{episode.title}</h4>
											<p>{episode.info}</p>
										</figcaption>
									</figure>
								</SwiperSlide>
							))}
							<div
								className="swiper-button-prev"
								id="prevButton"
								role="button"
								tabIndex={0}
								onKeyDown={(e) => {
									if (e.key === "Enter") e.currentTarget.click();
								}}
							/>
							<div
								className="swiper-button-next"
								id="nextButton"
								role="button"
								tabIndex={0}
								onKeyDown={(e) => {
									if (e.key === "Enter") e.currentTarget.click();
								}}
							/>
						</Swiper>
					</div>
				</section>
				<section className={S.section}>
					<span className={S.sectionTitle}>비슷한 TV 프로그램</span>
					<div className={S.programFont}>
						<Swiper
							className="detailSwiper detailPagenation px-[3rem]  overflow-y-visible   "
							key={sortKey}
							modules={[Navigation, Pagination]}
							slidesPerView={7}
							spaceBetween={10}
							slidesPerGroup={7}
							tabIndex={0}
							freeMode={true}
							breakpoints={{
								480: { slidesPerView: 5 },
								768: { slidesPerView: 6 },
								1024: { slidesPerView: 7 },
							}}
							navigation={{
								nextEl: "#nextButton",
								prevEl: "#prevButton",
								keyboard: {
									enabled: true,
									onlyInViewport: false,
								},
							}}
							pagination={{
								clickable: true,
							}}
						>
							{state.similar.map((similar, index) => (
								<SwiperSlide key={index}>
									<figure className={`pt-[0.5625rem] ${S.figureHoverEffect}`}>
										<img
											src={similar.thumbUrl}
											alt={`Episode Thumbnail ${index}`}
										></img>
										<figcaption className=" pt-[0.5625rem]">
											<h4>{similar.info}</h4>
										</figcaption>
									</figure>
								</SwiperSlide>
							))}
							<div
								className="swiper-button-prev"
								id="prevButton"
								role="button"
								tabIndex={0}
								onKeyDown={(e) => {
									if (e.key === "Enter") e.currentTarget.click();
								}}
							/>
							<div
								className="swiper-button-next"
								id="nextButton"
								role="button"
								tabIndex={0}
								onKeyDown={(e) => {
									if (e.key === "Enter") e.currentTarget.click();
								}}
							/>
						</Swiper>
					</div>
				</section>
				<section className={S.reviewSection}>
					<span className={`mb-[0.9375rem]  ${S.sectionTitle}`}>Review</span>
					<div className={S.reviewBox}>
						<form onSubmit={handleReviewSubmit} className={S.reviewForm}>
							{[...Array(5)].map((star, i) => {
								const ratingValue = i + 1;
								return (
									<span
										key={i}
										className={`${S["starIcon"]} ${
											ratingValue <= (hoverRating || stars) ? S["active"] : ""
										}`}
										onMouseEnter={() => setHoverRating(ratingValue)}
										onMouseLeave={() => setHoverRating(stars)}
										onClick={() => setStars(ratingValue)}
									>
										★
									</span>
								);
							})}
							<input
								className={S.reviewInput}
								value={reviewText}
								ref={formref}
								onChange={handleReviewChange}
							></input>
							<button className={S.reviewButton} type="submit">
								리뷰 제출
							</button>
						</form>
					</div>
					<div>
						<ul className="">
							{comment?.map((item) => {
								console.log(item);
								return (
									<ReviewItem
										key={item.id}
										star={item.star}
										writer={item.expand.writer.username}
										comment={item.contents}
										commentId={item.id}
										onCommentChange={setComment}
									/>
								);
							})}
						</ul>
					</div>
				</section>
			</div>
		</main>
	);
}

export default Contents;
