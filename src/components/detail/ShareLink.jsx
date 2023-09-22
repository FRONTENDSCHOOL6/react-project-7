import React, { useRef, useState, useEffect } from "react";
import pb from "@/api/pocketbase";
import { string } from "prop-types";
import S from "../detail/Contents.module.css";

export default function CopyLink({ platform, url, src }) {
	const handleShare = () => {
		if (platform === "Facebook") {
			const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
				url
			)}`;
			window.open(shareUrl, "_blank");
		} else if (platform === "Twitter") {
			const text = "티빙! 오리지널을 만나보세요.";
			const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
				text
			)}&url=${encodeURIComponent(url)}`;
			window.open(shareUrl, "_blank");
		} else if (platform === "Link") {
			navigator.clipboard.writeText(url);
			alert("링크가 복사되었습니다!");
		}
	};

	return (
		<button onClick={handleShare}>
			<img
				className={S[`${platform.toLowerCase()}Icon`]}
				src={src}
				alt={`${platform} 공유 아이콘`}
			/>
		</button>
	);
}

CopyLink.propTypes = {
	platform: string.isRequired,
	url: string.isRequired,
	src: string.isRequired,
};
