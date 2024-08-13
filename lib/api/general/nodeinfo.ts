import consola from "consola";
import _ from "lodash";

interface NodeInfoResponse {
	links: {
		rel: string;
		href: string;
	}[];
}

type NodeInfoResult = {
	version: string;
	link: string;
	schema: string;
} | null;

export interface NodeInfo_2_1 {
	version: "2.1";
	software: {
		name: string;
		version: string;
		repository?: string;
		homepage?: string;
	};
	protocols: string[];
	services: {
		inbound: string[];
		outbound: string[];
	};
	openRegistrations: boolean;
	usage: {
		users: {
			total: number;
			activeHalfyear: number | null;
			activeMonth: number | null;
		};
		localPosts: number;
		localComments: number;
	};
	metadata: {
		[key: string]: unknown;
	};
}

export interface NodeInfo_2_0 {
	version: "2.0";
	software: {
		name: string;
		version: string;
	};
	protocols: string[];
	services: {
		inbound: string[];
		outbound: string[];
	};
	openRegistrations: boolean;
	usage: {
		users: {
			total: number;
			activeHalfyear: number | null;
			activeMonth: number | null;
		};
		localPosts: number;
		localComments: number;
	};
	metadata: {
		[key: string]: unknown;
	};
}

export async function getNodeInfo(domain: string, useProxy = true): Promise<NodeInfoResult> {
	const nodeInfoPath =
		(useProxy ? `${import.meta.env.VITE_CORS_PROXY_BASE_URL}` : "") +
		`https://${domain}/.well-known/nodeinfo`;

	try {
		const response = await fetch(nodeInfoPath);

		if (!response.ok) {
			if (response.status === 404 || response.status === 400) {
				return null;
			}
			throw new Error(`HTTP error. Status: ${response.status}`);
		}

		const nodeInfoDocument: NodeInfoResponse = await response.json();
		const links = nodeInfoDocument.links;

		if (!links || links.length === 0) {
			return null;
		}

		const supportedVersions = {
			"2.1": "http://nodeinfo.diaspora.software/ns/schema/2.1",
			"2.0": "http://nodeinfo.diaspora.software/ns/schema/2.0"
		};

		let result: NodeInfoResult = null;
		for (const version of _.keys(supportedVersions)) {
			const link = links.find((l) => l.rel === supportedVersions[version as keyof typeof supportedVersions]);
			if (!link) continue;
			result = {
				version: version,
				link: link.href,
				schema: link.rel
			};
			break;
		}

		return result;
	} catch (error) {
		consola.error(`Error fetching NodeInfo for ${domain}: `, error);
		return null;
	}
}

export async function getNodeInfoDocument(link: string, useProxy = true): Promise<NodeInfo_2_1 | NodeInfo_2_0 | null> {
	try {
		const url = (useProxy ? `${import.meta.env.VITE_CORS_PROXY_BASE_URL}` : "") + link;
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error. Status: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		consola.error(`Error fetching NodeInfo document: `, error);
		return null;
	}
}
