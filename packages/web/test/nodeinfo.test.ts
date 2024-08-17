import { expect, test } from "vitest";
import { getNodeInfo } from "lib/api/general/nodeinfo";

test("Node Info test for mastodon.social", async () => {
	const result = await getNodeInfo("mastodon.social");
	expect(result?.link).toBe("https://mastodon.social/nodeinfo/2.0");
});

test("Node Info test for nya.one", async () => {
	const result = await getNodeInfo("nya.one");
	expect(result?.version).toBe("2.1");
	expect(result?.link).toBe("https://nya.one/nodeinfo/2.1");
});
