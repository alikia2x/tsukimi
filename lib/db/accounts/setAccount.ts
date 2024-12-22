import appConfig from "lib/db/init";
import { StoredAccount } from "types/db/accounts";
import getAccounts from "./readAccounts";

export default async function setAccount(account: StoredAccount) {
	const accounts = await getAccounts();
	for (const a of accounts) {
		if (a.activated) {
			appConfig.accounts.update(a.id, {activated: false});
		}
	}
	appConfig.accounts.put(account);
}
