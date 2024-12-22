import Dexie, { type EntityTable } from "dexie";
import { StoredAccount } from "types/db/accounts";

const appConfig = new Dexie("appConfig") as Dexie & {
	accounts: EntityTable<StoredAccount, "id">;
};

appConfig.version(2).stores({
	accounts: "id, username, host, serverSoftware, token, activated"
});

export default appConfig;
