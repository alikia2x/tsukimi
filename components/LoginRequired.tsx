import hasAccount from "lib/middleware/hasAccount";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function LoginRequired({ children }: { children: React.ReactNode }) {
	const [accountState, setAccountState] = useState<null | boolean>(null);

	useEffect(() => {
		const getAccountState = async () => {
			const accountExists = await hasAccount();
			setAccountState(accountExists);
		};
		getAccountState();
	}, []);

	if (accountState === false) {
		return <Navigate to="/welcome" />;
	} else {
		return <>{children}</>;
	}
}
