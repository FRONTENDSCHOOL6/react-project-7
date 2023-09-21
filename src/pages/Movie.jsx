import { Helmet } from "react-helmet-async";
import S from "./Movie.module.css";
import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import { CategoryNav, CategoryContent } from "./CategoryNav";

export default function Movie() {
	return (
		<>
			<Helmet>
				<title>Movies - TAING</title>
				<meta
					name="description"
					content="멋쟁이 사자처럼 6기 7조의 파이널 프로젝트 - 티빙 클론코딩 타잉 영화"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="타잉 카테고리별 영화" />
				<meta property="og:description" content="프로젝트 타잉 영화 페이지" />
				<meta property="og:image" content="@/assets/metaImgMovie.png" />
				<meta
					property="og:url"
					content="http://localhost:5173/react-project-7/#/movie"
				/>
			</Helmet>
			<div className="bg-black pt-32 px-[5%]">
				<h3 className="text-white text-4xl font-semibold mb-[2%] ml-[3%]">
					영화
				</h3>
				<MovieNav />
				<div className="contentWrapper w-full pt-[7%] flex flex-row gap-5 flex-wrap justify-between">
					<MovieContent />
				</div>
			</div>
		</>
	);
}
