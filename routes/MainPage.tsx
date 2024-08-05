import { Navigate } from 'react-router-dom';
import hasAccount from 'lib/middleware/hasAccount.ts';
import { useEffect, useState } from 'react';
import LoadingPage from './LoadingPage';

export default function MainPage() {
	const [accountState, setAccountState] = useState<null | boolean>(null);

	useEffect(() => {
		const getAccountState = async () => {
			const accountExists = await hasAccount();
			setAccountState(accountExists);
		};
		getAccountState();
	}, []);

	if (accountState === null) {
		return <LoadingPage />;
	} else if (accountState === true) {
		return <Navigate to="/home" />;
	} else {
		return <Navigate to="/welcome" />;
	}
}
