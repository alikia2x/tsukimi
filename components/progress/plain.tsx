import { useRef, useEffect } from 'react';

export default function PlainProgress(props: { min?: number; max?: number; current: number }) {
	const min = props.min || 0;
	const max = props.max || 100;
	const current = props.current;

	const progressBarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (progressBarRef.current) {
			progressBarRef.current.style.transition = 'width 780ms linear'; // 设置过渡动画
			progressBarRef.current.style.width = `${(current / (max - min)) * 100}%`;
		}
	}, [current, max, min]);

	return (
		<div
			className="flex w-full h-1.5 bg-neutral-300 rounded-full overflow-hidden dark:bg-neutral-600"
			role="progressbar"
			aria-valuenow={current}
			aria-valuemin={min}
			aria-valuemax={max}
		>
			<div
				ref={progressBarRef}
				className="flex flex-col justify-center rounded-full overflow-hidden bg-zinc-800 text-xs text-white 
                text-center whitespace-nowrap transition duration-150 dark:bg-zinc-200"
			></div>
		</div>
	);
}
