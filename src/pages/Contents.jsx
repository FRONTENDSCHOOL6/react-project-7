import S from "./Contents.module.css";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PocketBase from "pocketbase";

function Contents() {
	// review 기능 구현
	const [rating, setRating] = useState(0); //? 현재 별점
	const [hoverRating, setHoverRating] = useState(0); //? 마우스 호버시 별점
	const [reviewText, setReviewText] = useState(""); //? 현재 입력중인 리뷰
	const [reviews, setReviews] = useState([]); //? 저장된 리뷰

	const handleReviewChange = (e) => {
		setReviewText(e.target.value);
	}; //@ e.target.value를 reviewText에 저장

	const handleReviewSubmit = (e) => {
		e.preventDefault();
		if (reviewText !== "" && rating !== null) {
			setReviews([...reviews, { text: reviewText, star: rating }]);
			setReviewText("");
			setRating(null);
		}
	}; //@ 리뷰 제출 클릭시 호출

	// 찜 기능 구현
	const [isChanged, setChanged] = useState(false); //? 찜 버튼 상태

	const handleHeart = () => {
		setChanged(!isChanged);
	}; //@ 찜 버튼 클릭시 호출

	// 연속 재생 토글 기능 구현
	const [isToggled, setIsToggled] = useState(false); //? 연속 재생 버튼 상태

	const handleClick = () => {
		setIsToggled(!isToggled);
	}; //@ 연속 재생 토글 버튼 클릭시 호출

	// 에피소드 정렬 기능 구현
	const [sortKey, setSortKey] = useState(0); //? 에피소드 정렬 후 리렌터링
	const [isSorted, setIsSorted] = useState(true); //? 에피소드 정렬 방식, true:첫화부터

	const handleSortAsc = () => {
		const sortedEpisodes = [...episodes].sort((a, b) => {
			const titleA = parseInt(a.title.match(/^\d+/)); //? 에피소드 번호 추출
			const titleB = parseInt(b.title.match(/^\d+/));

			return titleA - titleB; //? 오름차순 정렬
		}); //@ 첫화부터 정렬 버튼 클릭시 호출

		setEpisodes(sortedEpisodes);
		setIsSorted(true); //? 첫화부터 버튼
		setSortKey((prevKey) => prevKey + 1); //? 정렬 후 key 값 변경하여 리렌더링 trigger
	};

	const handleSortDesc = () => {
		const sortedEpisodes = [...episodes].sort((a, b) => {
			const titleA = parseInt(a.title.match(/^\d+/));
			const titleB = parseInt(b.title.match(/^\d+/));

			return titleB - titleA; //? 내림차순 정렬
		}); //@ 최신화부터 정렬 버튼 클릭시 호출

		setEpisodes(sortedEpisodes);
		setIsSorted(false); //? 최신화부터 버튼
		setSortKey((prevKey) => prevKey + 1);
	};

	// 공유 기능 구현
	const handleShare = () => {
		navigator.clipboard.writeText(window.location.href);
		alert("링크가 복사되었습니다!");
	}; //@ 공유 버튼 클릭시 현재 페이지 주소를 클립보드에 복사

	// 에피소드 정보 저장
	const [episodes, setEpisodes] = useState([
		{
			title: "1. 알쓸별잡 1화",
			detail: "상세 정보",
			date: "2023.08.03",
			duration: "98분",
			imgSrc: "/contents/ep1.png",
		},
		{
			title: "2. 알쓸별잡 2화",
			detail: "상세 정보",
			date: "2023.08.10",
			duration: "92분",
			imgSrc: "/contents/ep2.png",
		},
		{
			title: "3. 알쓸별잡 3화",
			detail: "상세 정보",
			date: "2023.08.17",
			duration: "101분",
			imgSrc: "/contents/ep3.png",
		},
		{
			title: "4. 알쓸별잡 4화",
			detail: "상세 정보",
			date: "2023.08.24",
			duration: "95분",
			imgSrc: "/contents/ep4.png",
		},
		{
			title: "5. 알쓸별잡 5화",
			detail: "상세 정보",
			date: "2023.08.31",
			duration: "96분",
			imgSrc: "/contents/ep2.png",
		},
	]);

	// 관련 컨텐츠 정보 배열

	const related = [
		{ title: "알쓸신잡", imgSrc: "/contents/relate1.png" },
		{ title: "동네의 사생활", imgSrc: "/contents/relate2.png" },
		{ title: "차이나피디아", imgSrc: "/contents/relate3.png" },
		{
			title: "잡학다식한 남자들의 히든카드 M16",
			imgSrc: "/contents/relate4.png",
		},
		{ title: "만국견문록", imgSrc: "/contents/relate5.png" },
		{ title: "렛츠고", imgSrc: "/contents/relate6.png" },
		{ title: "동네의 사생활", imgSrc: "/contents/relate2.png" },
		{ title: "알쓸신잡", imgSrc: "/contents/relate1.png" },
		{ title: "동네의 사생활", imgSrc: "/contents/relate2.png" },
		{ title: "차이나피디아", imgSrc: "/contents/relate3.png" },
		{
			title: "잡학다식한 남자들의 히든카드 M16",
			imgSrc: "/contents/relate4.png",
		},
		{ title: "만국견문록", imgSrc: "/contents/relate5.png" },
		{ title: "렛츠고", imgSrc: "/contents/relate6.png" },
		{ title: "동네의 사생활", imgSrc: "/contents/relate2.png" },
		{ title: "만국견문록", imgSrc: "/contents/relate5.png" },
		{ title: "렛츠고", imgSrc: "/contents/relate6.png" },
		{ title: "동네의 사생활", imgSrc: "/contents/relate2.png" },
		{ title: "만국견문록", imgSrc: "/contents/relate5.png" },
		{ title: "렛츠고", imgSrc: "/contents/relate6.png" },
		{ title: "동네의 사생활", imgSrc: "/contents/relate2.png" },
		{ title: "만국견문록", imgSrc: "/contents/relate5.png" },
		{ title: "렛츠고", imgSrc: "/contents/relate6.png" },
		{ title: "동네의 사생활", imgSrc: "/contents/relate2.png" },
	];

	const tags = ["12+", "목 오후10:30", "예능", "tvN", "시즌 1개"];

	return (
		<main className={`text-gray300 ${S.main}`}>
			<article className={S.article}>
				<div className={`${S.gradation} -translate-x-1/2 -translate-y-1/2`}>
					<div className={S.poster} />
				</div>
				<div className="relative z-10 flex flex-row justify-between h-full">
					<div className="w-2/5">
						<h2 className="mb-[1.25rem]">
							<img
								className="w-[23.25rem] h-[5.4375rem]"
								src={"/contents/logo.png"}
								alt="알쓸별잡"
							/>
						</h2>
						<div className="border-gray300 ">
							{tags.map((tag, index) => (
								<span key={index} className={S.tag}>
									{tag}
								</span>
							))}
						</div>
						<div className="flex">
							<button className={S.playBtn} type="submit">
								<span className="text-center">▶</span> 1화 시청하기
							</button>
							<button className={S.likeBtn} type="submit" onClick={handleHeart}>
								<img
									className="m-auto w-[2rem] h-[2rem] mt-[0.5625rem] mb-[0.3125rem] "
									src={
										isChanged ? "/assets/full-heart.svg" : "/assets/heart.svg"
									}
									alt="하트 버튼"
								/>
								<span className="text-white">찜</span>
							</button>
							<button className={S.likeBtn} type="submit" onClick={handleShare}>
								<img className={S.shareBtn} alt="공유 버튼" />
								<span className="text-white">공유</span>
							</button>
						</div>
						<dl className="flex mt-[1.5625rem] font-semibold">
							<dt className="mr-[0.9375rem] font-semibold">크리에이터</dt>
							<dd>양정우, 양슬기, 전혜림</dd>
						</dl>
						<dl className="flex font-semibold">
							<dt className="mr-[0.9375rem]">출연</dt>
							<dd>장항준, 김민하, 이동진, 유현준, 김상욱, 심채경</dd>
						</dl>
						<p className={S.moreInfo}>
							별난 지구, 별난 도시에서 펼쳐지는 지적 수다의 향연!
							건축X역사X문학X물리학X영화의 여러 박사들과 함께 떠나는 지구별
							수다여행! 알아두면 쓸데없는 지구별 잡학사전
						</p>
						<button className="hidden" type="submit">
							더보기
						</button>
					</div>
					<div className=" ">
						<img
							src={"/contents/poster.png"}
							alt="알아두면 쓸데없는 지구별 잡학사전"
						/>
					</div>
				</div>
			</article>
			<div>
				<section className={S.section}>
					<hr className="border-gray400" />
					<div className="flex justify-between overflow-hidden mt-[1.9375rem] mb-[1.125rem]">
						<button className={S.sectionTitle} type="submit">
							알쓸별잡{" "}
							<span className="text-base font-semibold text-gray500">
								{" "}
								&#40;총 5화&#41;{" "}
							</span>{" "}
						</button>
						<div className="flex justify-end font-semibold">
							<button
								className={`${isSorted ? `${S.asc}` : `${S.desc}`}`}
								type="submit"
								onClick={handleSortAsc}
							>
								첫화부터
							</button>
							<button
								className={`ml-[1.375rem] mr-[2.375rem] ${
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
					<div className="overflow-hidden  w-[100%] font-semibold">
						<Swiper
							key={sortKey}
							spaceBetween={10}
							breakpoints={{
								640: {
									slidesPerView: 2.1,
								},

								768: {
									slidesPerView: 3.1,
								},

								1024: {
									slidesPerView: 4.1,
								},
							}}
						>
							{episodes.map((episode, index) => (
								<SwiperSlide key={index}>
									<figure className={`pt-[0.5625rem]  ${S.figureHoverEffect}`}>
										<img
											className="w-[18.125rem] h-auto "
											src={episode.imgSrc}
										/>
										<figcaption className="pr-[0.9375rem] pt-[0.5625rem]">
											<h4 className="text-white text-lg">{episode.title}</h4>
											<p>{episode.detail}</p>
											<span className="text-gray500">
												{episode.date} | {episode.duration}
											</span>
										</figcaption>
									</figure>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</section>
				<section className={S.section}>
					<span className={S.sectionTitle}>비슷한 TV 프로그램</span>
					<div className="flex justify-between w-[100%] overflow-hidden font-semibold ">
						<Swiper
							spaceBetween={1}
							slidesPerView={3}
							breakpoints={{
								640: {
									slidesPerView: 3.1,
								},

								768: {
									slidesPerView: 5.1,
								},

								1024: {
									slidesPerView: 7.1,
								},
							}}
						>
							{related.map((program, index) => (
								<SwiperSlide key={index}>
									<figure
										className={`pt-[0.5625rem] pr-[0.875rem] ${S.figureHoverEffect}`}
									>
										<img
											className="w-[9.625rem] h-auto "
											src={program.imgSrc}
										/>
										<figcaption className="pr-[0.9375rem] pt-[0.5625rem]">
											<h4 className="text-lg w-[9.625rem] break-words">
												{program.title}
											</h4>
										</figcaption>
									</figure>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</section>
				<section className={S.reviewSection}>
					<span className={`mb-[0.9375rem]  ${S.sectionTitle}`}>Review</span>

					<span className="text-5xl ">
						4.7
						<span className="text-base ml-[0.3125rem]">
							평균 평점 &#40;51234개 &#41;
						</span>
					</span>
					<div className="flex flex-row justify-between">
						<form
							onSubmit={handleReviewSubmit}
							className=" flex justify-between mt-[0.625rem] w-[92%]"
						>
							{[...Array(5)].map((star, i) => {
								const ratingValue = i + 1;
								return (
									<span
										key={i}
										className={`${S["starIcon"]} ${
											ratingValue <= (hoverRating || rating) ? S["active"] : ""
										}`}
										onMouseEnter={() => setHoverRating(ratingValue)}
										onMouseLeave={() => setHoverRating(rating)}
										onClick={() => setRating(ratingValue)}
									>
										★
									</span>
								);
							})}
							<input
								className={S.reviewInput}
								value={reviewText}
								onChange={handleReviewChange}
							></input>
							<button className={S.reviewButton} type="submit">
								리뷰 제출
							</button>
						</form>
					</div>
					<div>
						<ul className="w-[50%]">
							{reviews.map((review, index) => (
								<li key={index} className={S.reviewBox}>
									{`${review.text} - ${"⭐".repeat(review.star)}`}
								</li>
							))}
						</ul>
					</div>
				</section>
			</div>
		</main>
	);
}

export default Contents;
