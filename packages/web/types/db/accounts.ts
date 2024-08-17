export interface StoredAccount {
	id: string;
	username: string;
	host: string;
	serverSoftware: "mastodon" | "misskey";
	token: string;
}

export type StoredAccounts = StoredAccount[];
