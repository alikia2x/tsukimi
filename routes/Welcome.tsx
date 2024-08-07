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
	tension: 160,
	friction: 18
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
	const { t } = useTranslation();
	return (
		<div className="mb-10">
			<h2 className="text-3xl my-2 font-medium">{t("welcome.login")}</h2>
			<p className="text-lg font-bold mt-4 mb-1 uppercase">{t("welcome.instance-url")}</p>
			<div className="relative h-12 xl:w-[32rem] duration-150 bg-[#F1F2F3] flex dark:bg-[#1F2021] rounded-md px-4 outline-none">
				<span className="relative h-full flex items-center text-zinc-500 dark:text-neutral-400 font-mono">
					https://
				</span>
				<input
					className="relative h-full grow outline-none bg-transparent border-none font-mono ml-[1px]"
					placeholder="example.com"
				/>
			</div>
			<p className="mt-2 text-[15px] font-semibold text-zinc-600 dark:text-zinc-300">
				{t("welcome.what-is-instance-url")}
			</p>
		</div>
	);
}

function Join() {
	const { t } = useTranslation();
	return (
		<div>
			<h2 className="text-3xl my-2">{t("welcome.no-account")}</h2>
			<p className="text-xl my-3">{t("welcome.quick-manual-for-you")}</p>
		</div>
	);
}

function Tsukimi() {
	const { t } = useTranslation();
	const [titleAnimationProps] = useSpring(
		() => ({
			from: { y: "1rem", opacity: 0 },
			to: { y: "0rem", opacity: 1 },
			delay: 3 * WELCOME_ANIMATION_INTERVAL + ANIMATION_START_DELAY,
			config: WELCOME_ANIMATION_CONFIG
		}),
		[]
	);
	return (
		<animated.h1 className="relative flex items-center text-5xl font-light mt-6" style={{ ...titleAnimationProps }}>
			<img src="/android-chrome-192x192.png" className="inline-block h-12 mr-3" />
			<span>{t("tsukimi")}</span>
		</animated.h1>
	);
}

export default function WelcomePage() {
	const { t } = useTranslation();

	const [descriptionAnimationProps] = useSpring(
		() => ({
			from: { y: "0.85rem", opacity: 0 },
			to: { y: "0rem", opacity: 1 },
			delay: 3 * WELCOME_ANIMATION_INTERVAL + ANIMATION_START_DELAY,
			config: WELCOME_ANIMATION_CONFIG
		}),
		[]
	);
	const [LoginAnimationProps] = useSpring(
		() => ({
			from: { y: "0.7rem", opacity: 0 },
			to: { y: "0rem", opacity: 1 },
			delay: 5 * WELCOME_ANIMATION_INTERVAL + ANIMATION_START_DELAY,
			config: WELCOME_ANIMATION_CONFIG
		}),
		[]
	);
	return (
		<div className="relative flex justify-center">
			<div className="relative w-11/12 md:w-4/5 lg:w-3/4 xl:w-1/2 pt-12 xl:pt-20">
				<WelcomeMessage />
				<Tsukimi />
				<animated.p className="relative text-xl mt-6" style={{ ...descriptionAnimationProps }}>
					{t("welcome.desc")}
				</animated.p>
				<animated.div className="relative mt-6 flex flex-col" style={{ ...LoginAnimationProps }}>
					<Login />
					<Join />
				</animated.div>
			</div>
		</div>
	);
}
