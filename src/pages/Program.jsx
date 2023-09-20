import { Helmet } from "react-helmet-async";
import S from "./Program.module.css";
import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import { ProgramNav, ProgramContent } from "./ProgramNav";

export default function Movie() {
	return (
		<>
			<Helmet>
				<title>TV Programs - Taing</title>
			</Helmet>
			<div className="bg-black pt-32 px-[5%]">
				<h3 className="text-white text-4xl font-semibold mb-[2%] ml-[3%]">
					TV 프로그램
				</h3>
				<ProgramNav />
				<div className="contentWrapper w-full pt-10 flex flex-row gap-5 flex-wrap justify-between">
					<ProgramContent />
				</div>
			</div>
		</>
	);
}
