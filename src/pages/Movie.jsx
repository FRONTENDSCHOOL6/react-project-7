import S from "./Movie.module.css";
import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import { CategoryNav, CategoryContent } from "./CategoryNav";

export default function Movie() {
	return (
		<div className="bg-black pt-40 px-[5%]">
			<CategoryNav />
			<div className="contentWrapper w-full pt-10 flex flex-row gap-5 flex-wrap justify-between">
				<CategoryContent genreId={"p7sdcbmc28ktlpc"} />
			</div>
		</div>
	);
}
