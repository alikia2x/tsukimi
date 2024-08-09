import appConfig from "lib/db/init";
import { StoredAccount } from "types/db/accounts";

export default async function setAccount(account: StoredAccount) {
	return appConfig.accounts.put(account);
}
