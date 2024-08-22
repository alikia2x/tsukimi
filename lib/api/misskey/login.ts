import { t } from "i18next";
import { normalPermissions } from "./permission";
import "@alikia/random-uuid";

/**
 *
 * @param domain misskey instance domain
 * @returns The login URL that should be opened in a new tab.
 */
export default async function misskeyLogin(domain: string) {
	const uuid = crypto.randomUUID();
	const appBaseURL = new URL(import.meta.env.VITE_APP_BASE_URL);
	appBaseURL.pathname = "/welcome/auth/misskey";
	const url = new URL(`https://${domain}`);
	url.pathname = `/miauth/${uuid}/`;
	const params = new URLSearchParams(url.search);
	params.append("name", t("tsukimi"));
	params.append("permission", normalPermissions.join(","));
	params.append("callback", appBaseURL.href);
	url.search = params.toString();
	return url.href;
}
