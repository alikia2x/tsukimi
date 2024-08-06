import { useTranslation } from "react-i18next";
import { animated, useSpring, useSprings } from "@react-spring/web";

const TITLE_ANIMATION_INTERVAL = 125;
const ANIMATION_START_DELAY = 600;
const TITLE_ANIMATION_CONFIG = {
	tension: 90,
	friction: 16
};

const WELCOME_ANIMATION_INTERVAL = 150;
const WELCOME_ANIMATION_CONFIG = {
	tension: 80,
	friction: 14
};

function WelcomeMessage() {
	const { t } = useTranslation();
	const titleWords = t("welcome.title").split(" ");
	const [springs] = useSprings(
		titleWords.length,
		(index) => ({
			from: { y: "1rem", opacity: 0 },
			to: { y: "0rem", opacity: 1 },
			delay: TITLE_ANIMATION_INTERVAL * index + ANIMATION_START_DELAY,
			config: TITLE_ANIMATION_CONFIG
		}),
		[]
	);

	return (
		<animated.h1 className="relative text-4xl">
			{springs.map(({ opacity, y }, index) => (
				<animated.span
					className="inline-block"
					style={{
						y,
						opacity
					}}
					key={index}
				>
					{titleWords[index]}&nbsp;
				</animated.span>
			))}
		</animated.h1>
	);
}

function Login() {
	return (
		<div>
			<h2 className="text-3xl my-2 font-semibold">Login to your account</h2>
			<p className="text-xl font-bold my-3">Instance URL:</p>
			<div className="relative h-12 w-96 duration-150 bg-zinc-400 flex dark:bg-[#1F2021] rounded-md px-2 outline-none">
				<span className="relative h-full flex items-center text-neutral-500 dark:text-neutral-400 font-mono">
					https://
				</span>
				<input className="relative h-full grow outline-none bg-transparent border-none font-mono ml-[1px]" />
			</div>
		</div>
	);
}

export default function WelcomePage() {
	const [titleAnimationProps] = useSpring(
		() => ({
			from: { y: "1rem", opacity: 0 },
			to: { y: "0rem", opacity: 1 },
			delay: 3 * WELCOME_ANIMATION_INTERVAL + ANIMATION_START_DELAY,
			config: WELCOME_ANIMATION_CONFIG
		}),
		[]
	);
	const [descriptionAnimationProps] = useSpring(
		() => ({
			from: { y: "0.7rem", opacity: 0 },
			to: { y: "0rem", opacity: 1 },
			delay: 3.5 * WELCOME_ANIMATION_INTERVAL + ANIMATION_START_DELAY,
			config: WELCOME_ANIMATION_CONFIG
		}),
		[]
	);
	const [LoginAnimationProps] = useSpring(
		() => ({
			from: { y: "0.7rem", opacity: 0 },
			to: { y: "0rem", opacity: 1 },
			delay: 6 * WELCOME_ANIMATION_INTERVAL + ANIMATION_START_DELAY,
			config: WELCOME_ANIMATION_CONFIG
		}),
		[]
	);
	return (
		<div className="relative flex justify-center">
			<div className="relative w-11/12 md:w-4/5 lg:w-3/4 xl:w-1/2 pt-20">
				<WelcomeMessage />
				<animated.h1 className="relative text-5xl font-light mt-6" style={{ ...titleAnimationProps }}>
					🌙 Tsukimi
				</animated.h1>
				<animated.p className="relative text-xl font-light mt-6" style={{ ...descriptionAnimationProps }}>
					Your all-in-one Fediverse client. Join this decentralized social network now!
				</animated.p>
				<animated.div className="relative mt-6 flex flex-col" style={{ ...LoginAnimationProps }}>
					<Login />
				</animated.div>
			</div>
		</div>
	);
}
