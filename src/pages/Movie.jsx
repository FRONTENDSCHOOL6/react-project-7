import { Helmet } from "react-helmet-async";
import S from "./Movie.module.css";
import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import { MovieNav, MovieContent } from "./MovieNav";

export default function Movie() {
	return (
		<>
			<Helmet>
				<title>Movies - Taing</title>
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
