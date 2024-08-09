import getAccounts from "lib/db/accounts/readAccounts";

export default async function hasAccount() {
	return getAccounts().then((accounts) => {
		return accounts.length > 0;
	});
}
