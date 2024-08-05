import PlainProgress from 'components/progress/plain';
import randomNumberFromRange from 'lib/utils/randomRange';
import { useEffect, useState } from 'react';

export default function LoadingPage(props: { finished?: boolean; progress?: number; estTime?: number }) {
	const [currentProgress, setProgress] = useState(0);
	const estTime = props.estTime || 7;

	useEffect(() => {
		if (props.progress !== undefined) {
			setProgress(props.progress);
		} else if (props.finished === true) {
			setProgress(100);
		}
	}, [props]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (props.progress === undefined) {
				setProgress((prevProgress) => {
					const randomBase = (0.13 / estTime) * 100;
					const randomIncrement = Math.max(randomNumberFromRange(randomBase - 2, randomBase + 2), 0);
					const newProgress = prevProgress + randomIncrement;
					return newProgress > 99 ? 99 : newProgress;
				});
			}
		}, 150);

		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, [estTime, props.progress]);

	return (
		<div className="relative min-h-screen flex items-center">
			<div className="relative w-full flex flex-col justify-center items-center">
				<h1 className="text-3xl lg:text-4xl font-extralight uppercase" style={{ letterSpacing: '0.2rem' }}>
					Loading
				</h1>
				<br />
				<div className="w-3/4 md:w-[62.5%] lg:w-1/2 xl:w-1/3 mt-1 lg:mt-3 xl:mt-5">
					<PlainProgress current={currentProgress} />
				</div>
			</div>
		</div>
	);
}
