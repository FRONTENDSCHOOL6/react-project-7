import { number, string, arrayOf } from "prop-types";

function Spinner() {
	return (
		<div className="my-[5%] text-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				style={{
					margin: "auto",
					background: "transparent",
					display: "block",
				}}
				width="100px"
				height="100px"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid"
			>
				<g transform="translate(72,50)">
					<g transform="rotate(0)">
						<circle cx="0" cy="0" r="3" fill="#6a6a6a" fillOpacity="1">
							<animateTransform
								attributeName="transform"
								type="scale"
								begin="-1.098901098901099s"
								values="1.33 1.33;1 1"
								keyTimes="0;1"
								dur="1.282051282051282s"
								repeatCount="indefinite"
							></animateTransform>
							<animate
								attributeName="fill-opacity"
								keyTimes="0;1"
								dur="1.282051282051282s"
								repeatCount="indefinite"
								values="1;0"
								begin="-1.098901098901099s"
							></animate>
						</circle>
					</g>
				</g>
				<g transform="translate(63.71677564089214,67.20029261429666)">
					<g transform="rotate(51.42857142857143)">
						<circle
							cx="0"
							cy="0"
							r="3"
							fill="#6a6a6a"
							fillOpacity="0.8571428571428571"
						>
							<animateTransform
								attributeName="transform"
								type="scale"
								begin="-0.9157509157509157s"
								values="1.33 1.33;1 1"
								keyTimes="0;1"
								dur="1.282051282051282s"
								repeatCount="indefinite"
							></animateTransform>
							<animate
								attributeName="fill-opacity"
								keyTimes="0;1"
								dur="1.282051282051282s"
								repeatCount="indefinite"
								values="1;0"
								begin="-0.9157509157509157s"
							></animate>
						</circle>
					</g>
				</g>
				<g transform="translate(45.104539452961085,71.44841406800012)">
					<g transform="rotate(102.85714285714286)">
						<circle
							cx="0"
							cy="0"
							r="3"
							fill="#6a6a6a"
							fillOpacity="0.7142857142857143"
						>
							<animateTransform
								attributeName="transform"
								type="scale"
								begin="-0.7326007326007326s"
								values="1.33 1.33;1 1"
								keyTimes="0;1"
								dur="1.282051282051282s"
								repeatCount="indefinite"
							></animateTransform>
							<animate
								attributeName="fill-opacity"
								keyTimes="0;1"
								dur="1.282051282051282s"
								repeatCount="indefinite"
								values="1;0"
								begin="-0.7326007326007326s"
							></animate>
						</circle>
					</g>
				</g>
				<g transform="translate(30.17868490614678,59.545442260586285)">
					<g transform="rotate(154.2857142857143)">
						<circle
							cx="0"
							cy="0"
							r="3"
							fill="#6a6a6a"
							fillOpacity="0.5714285714285714"
						>
							<animateTransform
								attributeName="transform"
								type="scale"
								begin="-0.5494505494505495s"
								values="1.33 1.33;1 1"
								keyTimes="0;1"
								dur="1.282051282051282s"
								repeatCount="indefinite"
							></animateTransform>
							<animate
								attributeName="fill-opacity"
								keyTimes="0;1"
								dur="1.282051282051282s"
								repeatCount="indefinite"
								values="1;0"
								begin="-0.5494505494505495s"
							></animate>
						</circle>
					</g>
				</g>
				<g transform="translate(30.178684906146778,40.45455773941372)">
					<g transform="rotate(205.71428571428572)">
						<circle
							cx="0"
							cy="0"
							r="3"
							fill="#6a6a6a"
							fillOpacity="0.42857142857142855"
						>
							<animateTransform
								attributeName="transform"
								type="scale"
								begin="-0.3663003663003663s"
								values="1.33 1.33;1 1"
								keyTimes="0;1"
								dur="1.282051282051282s"
								repeatCount="indefinite"
							></animateTransform>
							<animate
								attributeName="fill-opacity"
								keyTimes="0;1"
								dur="1.282051282051282s"
								repeatCount="indefinite"
								values="1;0"
								begin="-0.3663003663003663s"
							></animate>
						</circle>
					</g>
				</g>
				<g transform="translate(45.10453945296108,28.55158593199988)">
					<g transform="rotate(257.1428571428571)">
						<circle
							cx="0"
							cy="0"
							r="3"
							fill="#6a6a6a"
							fillOpacity="0.2857142857142857"
						>
							<animateTransform
								attributeName="transform"
								type="scale"
								begin="-0.18315018315018314s"
								values="1.33 1.33;1 1"
								keyTimes="0;1"
								dur="1.282051282051282s"
								repeatCount="indefinite"
							></animateTransform>
							<animate
								attributeName="fill-opacity"
								keyTimes="0;1"
								dur="1.282051282051282s"
								repeatCount="indefinite"
								values="1;0"
								begin="-0.18315018315018314s"
							></animate>
						</circle>
					</g>
				</g>
				<g transform="translate(63.71677564089214,32.79970738570334)">
					<g transform="rotate(308.5714285714286)">
						<circle
							cx="0"
							cy="0"
							r="3"
							fill="#6a6a6a"
							fillOpacity="0.14285714285714285"
						>
							<animateTransform
								attributeName="transform"
								type="scale"
								begin="0s"
								values="1.33 1.33;1 1"
								keyTimes="0;1"
								dur="1.282051282051282s"
								repeatCount="indefinite"
							></animateTransform>
							<animate
								attributeName="fill-opacity"
								keyTimes="0;1"
								dur="1.282051282051282s"
								repeatCount="indefinite"
								values="1;0"
								begin="0s"
							></animate>
						</circle>
					</g>
				</g>
			</svg>
			<span className="text-gray-400 text-sm">로딩 중...</span>
		</div>
	);
}

Spinner.propTypes = {
	size: number,
	message: string,
	colors: arrayOf([string]),
};

export default Spinner;
