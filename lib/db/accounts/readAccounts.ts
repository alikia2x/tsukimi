import appConfig from "lib/db/init";

export default async function getAccounts() {
	const accounts = await appConfig.accounts.toArray();
	return accounts;
}
