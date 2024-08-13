import { t } from "i18next";

export default async function login(domain: string) {
	const uuid = crypto.randomUUID();
	const url = new URL(`https://${domain}`);
	url.pathname = `/miauth/${uuid}/`;
	const params = new URLSearchParams(url.search);
	params.append("name", t('tsukimi'));
    url.search = params.toString();
    return url.href;
}
