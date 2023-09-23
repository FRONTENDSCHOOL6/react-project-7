import React, { useRef, useState, useEffect } from "react";
import { string } from "prop-types";
import S from "../detail/Contents.module.css";

export default function CopyLink({ platform, url, src }) {
	//@ 공유 버튼 핸들러
	const handleShare = () => {
		if (platform === "Facebook") {
			//? 페이스북
			const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
				url
			)}`;
			window.open(shareUrl, "_blank");
		} else if (platform === "Twitter") {
			//? 트위터
			const text = "티빙! 오리지널을 만나보세요.";
			const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
				text
			)}&url=${encodeURIComponent(url)}`;
			window.open(shareUrl, "_blank");
		} else if (platform === "Link") {
			//? 링크 복사
			navigator.clipboard.writeText(url);
			alert("링크가 복사되었습니다!");
		}
	};

	return (
		<button type="button" onClick={handleShare}>
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
