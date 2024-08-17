import { useTranslation } from "react-i18next";
import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { getServerAPIStyle } from "lib/api/general/server";
import misskeyLogin from "lib/api/misskey/login";
import createSession from "lib/db/login/createSession";

export default function Login() {
	const { t } = useTranslation();
	const [failed, setFailedState] = useState(false);
	const [connecting, setConnectingState] = useState(false);
	const [inputBoxData, setInputBoxData] = useState("");
	const { transform } = useSpring({
		transform: `translateX(${failed ? "-0.01rem" : "0.01rem"})`,
		config: {
			tension: 600,
			friction: 14,
			velocity: 3,
			restVelocity: 0.2
		}
	});
	async function startLogin() {
		const APIStyle = await getServerAPIStyle(inputBoxData);
		if (APIStyle == null) setFailedState(true);
		if (APIStyle == "misskey") {
			try {
				const loginURL = await misskeyLogin(inputBoxData);
				createSession(inputBoxData);
				location.href = loginURL;
			} catch (err) {
				setFailedState(true);
				setConnectingState(false);
			}
		}
	}
	return (
		<div className="mb-10 flex flex-col ">
			<h2 className="text-3xl my-2 font-semibold">{t("welcome.login")}</h2>
			<p className="text-lg font-bold mt-4 mb-1 uppercase">{t("welcome.instance-url")}</p>
			<div className="flex items-center gap-3 flex-wrap">
				<animated.div style={failed ? { transform } : {}} className="grow max-w-[32rem]">
					<div
						className={`relative h-12 w-full duration-150 bg-[#f0f1f2] flex dark:bg-zinc-800
						 rounded-md px-4 outline-none ${failed ? "border-solid border-2 border-red-400" : ""} `}
					>
						<span className="relative h-full flex items-center text-zinc-600 dark:text-zinc-300 font-mono">
							https://
						</span>
						<input
							className="relative h-full grow outline-none bg-transparent border-none font-mono ml-[1px]
									placeholder-zinc-400 dark:placeholder-zinc-500"
							placeholder="example.com"
							value={inputBoxData}
							onInput={(event) => {
								const element = event.currentTarget as HTMLInputElement;
								const value = element.value;
								setFailedState(false);
								setInputBoxData(value);
							}}
						/>
					</div>
				</animated.div>

				<button
					className="bg-[#f0f1f2] dark:bg-zinc-800 hover:bg-neutral-200 dark:hover:bg-[#2f2f33]
					 text-yellow-500 cursor-default
						rounded-md px-3 h-12 text-lg flex justify-center items-center w-fit min-w-28 gap-1"
					onClick={async () => {
						setFailedState(false);
						setConnectingState(true);
						await startLogin();
						setConnectingState(false);
					}}
				>
					{connecting ? (
						<Icon icon="svg-spinners:ring-resize" className="text-xl mr-1" />
					) : (
						<Icon icon="la:sign-in-alt" className="text-2xl" />
					)}
					<span>{t("welcome.log-in")}</span>
				</button>
			</div>

			<p
				className={`mt-2 text-[15px] font-semibold text-zinc-600 dark:text-zinc-300 ${failed && "text-red-500"}`}
			>
				{failed ? t("welcome.connection-failed") : t("welcome.what-is-instance-url")}
			</p>
		</div>
	);
}
