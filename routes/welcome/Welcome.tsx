import { useTranslation } from "react-i18next";
import { animated, useSpring, useSprings } from "@react-spring/web";
import { Link } from "react-router-dom";
import Template from "./Template";
import Login from "components/welcome/login"

const TITLE_ANIMATION_INTERVAL = 150;
const ANIMATION_START_DELAY = 250;
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
					className="inline-block whitespace-pre"
					style={{
						y,
						opacity
					}}
					key={index}
				>
					{titleWords[index]}
					{index !== springs.length - 1 && " "}
				</animated.span>
			))}
		</animated.h1>
	);
}

function Join() {
	const { t } = useTranslation();
	return (
		<div className="flex flex-col mb-24">
			<h2 className="text-3xl my-2 font-semibold">{t("welcome.no-account")}</h2>
			<div className="relative mt-4 text-xl text-yellow-500 decoration-dotted underline">
				<Link to="/welcome/manual">{t("welcome.quick-manual-for-you")}</Link>
			</div>
		</div>
	);
}

function Tsukimi() {
	const { t } = useTranslation();
	const [titleAnimationProps] = useSpring(
		() => ({
			from: { y: "1rem", opacity: 0 },
			to: { y: "0rem", opacity: 1 },
			delay: 2 * WELCOME_ANIMATION_INTERVAL + ANIMATION_START_DELAY,
			config: WELCOME_ANIMATION_CONFIG
		}),
		[]
	);
	return (
		<animated.h1 className="relative flex  text-5xl font-light mt-6" style={{ ...titleAnimationProps }}>
			<img src="/android-chrome-192x192.png" className="inline-block h-12 w-12 mr-3" />
			{/* A small margin-right is added to keep visual balance */}
			<span className="mr-3 ">{t("tsukimi")}</span>
		</animated.h1>
	);
}

export default function WelcomePage() {
	const { t } = useTranslation();

	const [descriptionAnimationProps] = useSpring(
		() => ({
			from: { y: "0.85rem", opacity: 0 },
			to: { y: "0rem", opacity: 1 },
			delay: 2 * WELCOME_ANIMATION_INTERVAL + ANIMATION_START_DELAY,
			config: WELCOME_ANIMATION_CONFIG
		}),
		[]
	);
	const [LoginAnimationProps] = useSpring(
		() => ({
			from: { y: "0.7rem", opacity: 0 },
			to: { y: "0rem", opacity: 1 },
			delay: 3.5 * WELCOME_ANIMATION_INTERVAL + ANIMATION_START_DELAY,
			config: WELCOME_ANIMATION_CONFIG
		}),
		[]
	);
	return (
		<Template>
			<WelcomeMessage />
			<Tsukimi />
			<animated.p className="relative text-xl mt-6" style={{ ...descriptionAnimationProps }}>
				{t("welcome.desc")}
			</animated.p>
			<animated.div className="relative mt-8 flex flex-col " style={{ ...LoginAnimationProps }}>
				<Login />
				<Join />
			</animated.div>
		</Template>
	);
}
