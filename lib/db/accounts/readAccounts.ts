import appConfig from "lib/db/init";

export default async function listAccounts() {
    const accounts = await appConfig.accounts.toArray();
    return accounts;
}