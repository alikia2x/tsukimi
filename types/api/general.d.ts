/*
A universal interface for all basic elements in a social media platform, 
including posts, comments, users, etc.
The goal is to provide a common interface, allowing developers
to easily support a new social media platform by 
writing adapters that conform to these interfaces.
*/

interface Post {
	id: string;
	// URI of the status used for federation.
	uri?: string;
	createTime: string;
	author: Account;
	content: string | null;
	contentType: "HTML" | "markdown" | "plaintext";
	// Whatever the content type is, this represents the plain text form of the post
	text: string | null;
	visibility: "public" | "unlisted" | "followers" | "direct";
	sensitive: boolean | null;
	warningText: string | null; // Used for CW(NSFW)
	files: FileAttachment[];
	application?: {
		name: string;
		website: string | null;
	};
	mentions: Account[];
	tags: HashTag[];
	emojis: CustomEmoji[];
	reactions?: Reaction[];
	repostCount: number | null;
	reactionCount?: number | null;
	likeCount: number | null;
	replyCount: number | null;
	url: string | null;
	replyTo?: string;
	repostFrom?: string;
	poll?: Poll;
	linkCard?: LinkCard;
	language: string | null; // ISO 639 Part 1 two-letter language code
	editTime?: string; // ISO 8601 Datetime
	favourited?: boolean;
	reposted?: boolean;
	muted?: boolean;
	bookmarked?: boolean;
	pinned?: boolean;
	filtered?: FilterResult[];
}

interface FileAttachment {
	id: string;
	createTime: string;
	url: string;
	name?: string;
	typeStyle: "mime" | "mastodon";
	type: string;
	md5?: string;
	size?: number;
	isSensitive?: boolean;
	blurhash?: boolean;
	thumbnailUrl: string | null;
	remoteUrl?: string | null;
	comment?: string | null;
	folderId?: string | null;
	folder?: string | null;
	userId?: string | null;
	meta?: FileMetaInfo
}

interface FileMetaInfo {
	width?: number;
	height?: number;
	// [x,y]
	focus?: [number, number];
	orientation?: number;
	avgColor?: string;
	duration?: number;
	fps?: number;
}

interface Account {
	
}

export { type Post } from 'types/api/general';