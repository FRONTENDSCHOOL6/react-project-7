import S from "./Program.module.css";
import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import { ProgramNav, ProgramContent } from "./ProgramNav";

export default function Movie() {
	return (
		<div className="bg-black pt-40 px-[5%]">
			<ProgramNav />
			<div className="contentWrapper w-full pt-10 flex flex-row gap-5 flex-wrap justify-between">
				<ProgramContent />
			</div>
		</div>
	);
}
