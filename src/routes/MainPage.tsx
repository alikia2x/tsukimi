import { Navigate } from 'react-router-dom';
import hasAccount from '../lib/middleware/hasAccount.ts';

export default function MainPage() {
	if (hasAccount()) {
		return <Navigate to="/home" />;
	} else {
		return (
			<Navigate to="/welcome" />
		);
	}
}