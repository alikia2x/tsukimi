import { useSearchParams } from "react-router-dom";
import readSession from "lib/db/login/readSession";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import consola from "consola";
import { StoredAccount } from "types/db/accounts";
import setAccount from "lib/db/accounts/setAccount";

export default function MiAuthPage() {
	const [searchParams] = useSearchParams();
	const session = searchParams.get("session");
	const domain = readSession();
	const [failed, setFailed] = useState<boolean>(false);
	useEffect(() => {
		if (session === null || domain === null) return;
		const url = `https://${domain}/api/miauth/${session}/check`;
		fetch(url, {
			method: "POST"
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.ok === false) {
					consola.error("MiAuth failed");
					setFailed(true);
					return;
				}
				const newAccount: StoredAccount = {
					id: `@${data.user.username}@${domain}`,
					username: data.user.username,
					host: domain,
					serverSoftware: "misskey",
					token: data.token
				};
				setAccount(newAccount);
				location.pathname = "/home";
			})
			.catch((e) => {
				consola.error(e);
			});
	}, [domain, session]);
	if (session === null) {
		return (
			<div className="flex flex-col gap-8 justify-center items-center h-screen">
				<h1 className="text-4xl font-bold">Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p className="text-slate-400">
					<i>Invalid session parameter</i>
				</p>
			</div>
		);
	} else if (domain === null) {
		return (
			<div className="flex flex-col gap-8 justify-center items-center h-screen">
				<h1 className="text-4xl font-bold">Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p className="text-slate-400">
					<i>No login session.</i>
				</p>
			</div>
		);
	} else if (failed) {
		return (
			<div className="flex flex-col gap-8 justify-center items-center h-screen">
				<h1 className="text-4xl font-bold">Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p className="text-slate-400">
					<i>Login failed.</i>
				</p>
			</div>
		);
	}
	return (
		<div className="flex flex-col gap-8 justify-center items-center h-screen">
			<div>
				<Icon icon="svg-spinners:ring-resize" className="text-4xl" />
			</div>
			<div>Loading your account...</div>
		</div>
	);
}
