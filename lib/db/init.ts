import Dexie, { type EntityTable } from 'dexie';
import { StoredAccount } from 'types/db/accounts';

const appConfig = new Dexie('appConfig') as Dexie & {
	accounts: EntityTable<StoredAccount, 'id'>;
};

appConfig.version(1).stores({
	accounts: 'id, username, host, serverSoftware, token'
})

export default appConfig;