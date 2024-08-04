import Dexie, { type EntityTable } from 'dexie';
import { StoredAccount } from 'types/db/accounts';

const appConfig = new Dexie('appConfig') as Dexie & {
	accounts: EntityTable<StoredAccount, 'id'>;
};

export default appConfig;