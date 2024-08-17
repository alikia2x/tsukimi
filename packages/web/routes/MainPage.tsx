import { Navigate } from "react-router-dom";
import hasAccount from "lib/middleware/hasAccount.ts";
import { useEffect, useState } from "react";
import consola from "consola";

export default function MainPage() {
	const [accountState, setAccountState] = useState<null | boolean>(null);

	useEffect(() => {
		const getAccountState = async () => {
			const accountExists = await hasAccount();
			consola.trace(accountExists);
			setAccountState(accountExists);
		};
		getAccountState();
	}, []);

	if (accountState === true) {
		return <Navigate to="/home" />;
	} else if (accountState === false) {
		return <Navigate to="/welcome" />;
	}
}
