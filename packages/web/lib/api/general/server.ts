import { getNodeInfo, getNodeInfoDocument } from "./nodeinfo";

export const softwareNameToAPI = {
	misskey: "misskey",
	sharkey: "misskey",
	firefish: "misskey",
	mastodon: "mastodon"
};

export type SupportAPIStyle = "misskey" | "mastodon";

export async function getServerSoftware(domain: string) {
	const nodeInfo = await getNodeInfo(domain);
	if (!nodeInfo) return null;
	const nodeInfoDocument = await getNodeInfoDocument(nodeInfo.link);
	if (!nodeInfoDocument) return null;
	return nodeInfoDocument.software.name;
}

export async function getServerAPIStyle(domain: string) {
	const software = await getServerSoftware(domain);
	if (!software) return null;
	const softwareName = software.toLowerCase();
	return softwareNameToAPI[softwareName as keyof typeof softwareNameToAPI] as SupportAPIStyle | null;
}
