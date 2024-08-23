/*
A universal interface for all basic elements in a social media platform, 
including posts, comments, users, etc.
The goal is to provide a common interface, allowing developers
to easily support a new social media platform by 
writing adapters that conform to these interfaces.
*/

interface Post {
	id: string;
	uri: string;
	time: string;
	author: Account;
	content: string;
    contentType: "HTML" | "markdown" | "plaintext";
	// Whatever the content type is, this represents the plain text form of the post
	text: string | null;
	visibility: "public" | "unlisted" | "followers" | "direct";
	sensitive: boolean;
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
	repostCount: number;
	reactionCount?: number;
    likeCount: number;
	replyCount: number;
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
	
}