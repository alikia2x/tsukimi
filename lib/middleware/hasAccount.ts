import { accountsStateAtom } from "../states/accounts.state"

export default function hasAccount() {
	const accounts = accountsStateAtom.read();
	if (hasAccount == null) {
		return false;
	}
	try {
		const accounts: StoredAccounts = JSON.parse(hasAccount);
		return accounts.length > 0;
	}
	catch (error) {
		localStorage.removeItem("accounts");
		return false
	}
}