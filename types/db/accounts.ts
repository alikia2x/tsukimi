export interface StoredAccount {
	id: string;
	username: string;
	host: string;
	serverSoftware: "mastodon" | "misskey";
	token: string;
	activated: boolean;
}

export type StoredAccounts = StoredAccount[];
