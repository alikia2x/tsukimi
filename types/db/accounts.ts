export interface StoredAccount {
	username: string;
	host: string;
	id: string;
	serverSoftware: "mastodon" | "misskey";
	token: string;
}

export type StoredAccounts = StoredAccount[];