import S from "./OnBoarding.module.css";

function YouTube() {
	return (
		<section className="bg-black w-full">
			<div className={S.videoWrapper}>
				<iframe
					title="replay video"
					className={S.videoItem}
					src={`https://www.youtube-nocookie.com/embed/Lr8lSxMlp9Q`}
					style={{ border: "none" }}
					allowFullScreen
				/>
			</div>
		</section>
	);
}

export default YouTube;
