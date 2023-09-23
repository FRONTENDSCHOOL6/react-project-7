import S from "../components/detail/Contents.module.css";
import { Helmet } from "react-helmet-async";
import React, { useRef, useState, useEffect } from "react";
import { getPbImageURL } from "@/utils/getPbImageURL";
import pb from "@/api/pocketbase";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SimilarSection from "../components/detail/SimilarVideo";
import EpisodeSection from "../components/detail/RelatedVideo";
import DetailArticle from "../components/detail/DetailData";
import ReviewSection from "../components/detail/Review";

function Contents() {
	//@ 변수 초기화
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
		nineteen: "19세",
	};

	const versionText = {
		dubbed: "더빙판",
		subtitle: "자막판",
	};

	//@ ID 값
	const { id } = useParams();
	const [comment, setComment] = useState([]);
	const [contentType, setContentType] = useState("");

	//@ 포켓베이스 데이터
	useEffect(() => {
		const handleData = async (type) => {
			try {
				const data = await pb
					.collection(type)
					.getOne(id, { expand: "reviews,reviews.writer" });
				setContentType(data.collectionName);
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
				setState((prevState) => ({
					...prevState,
					...programState,
					...movieState,
				}));
			})
			.catch((error) => console.error(error));
	}, [id]);

	const [sortKey, setSortKey] = useState(0); //? 에피소드 정렬 후 리렌터링
	const [isShareOpen, setIsShareOpen] = useState(false);

	//@ 찜

	return (
		<main className={`text-gray300 ${S.main} w-screen overflow-hidden px-[3%]`}>
			<Helmet>
				<title>타잉 7조 - 상세 페이지</title>
				<meta
					name="description"
					content="멋쟁이 사자처럼 6기 7조의 파이널 프로젝트 - 티빙 클론코딩 상세 페이지"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="타잉 상세 페이지" />
				<meta property="og:description" content="프로젝트 타잉 상세 페이지" />
				<meta property="og:image" content="@/assets/metaImgDetail.png" />
				<meta
					property="og:url"
					content="https://frontendschool6.github.io/react-project-7/#/contents/:id"
				/>
			</Helmet>
			<DetailArticle
				setState={setState}
				state={state}
				ratingText={ratingText}
				versionText={versionText}
				setIsShareOpen={setIsShareOpen}
				isShareOpen={isShareOpen}
				contentType={contentType}
				id={id}
			/>
			<div>
				{contentType !== "movie" && (
					<>
						<EpisodeSection
							state={state}
							setState={setState}
							title={state.title}
							episodeThumbs={state.episodeThumbs}
							sortKey={sortKey}
						/>
						<SimilarSection similar={state.similar} />
					</>
				)}

				<ReviewSection id={id} contentType={contentType} />
			</div>
		</main>
	);
}

export default Contents;
