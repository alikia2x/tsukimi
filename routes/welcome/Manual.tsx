import { useTranslation } from "react-i18next";
import Template from "./Template";
//@ts-expect-error: idk why
import markdownit from "markdown-it";
import anchor from "markdown-it-anchor";

import { useEffect, useState } from "react";
import LanguageSelector from "components/LanguageSelector";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ManualPage() {
	const { t } = useTranslation();
	const [articleHTML, setArticleHTML] = useState<null | TrustedHTML>(null);

	useEffect(() => {
		const md = markdownit().use(anchor, {
			permalink: anchor.permalink.headerLink({ safariReaderFix: true })
		});
		setArticleHTML(md.render(t("welcome.manual.content")));
	}, [t]);

	useEffect(() => {
		import("./article.css");
	}, [articleHTML]);

	return (
		<Template>
			<Helmet>
				<title>{t("welcome.manual.title")}</title>
			</Helmet>
			<div className="relative flex items-center w-full">
				<div className="flex grow text-2xl items-center text-yellow-400">
					<Icon icon="material-symbols:arrow-back-ios-rounded" className="font-bold"/>
					<Link to="/welcome">{t("welcome.go-back")}</Link>
				</div>
				<div className="flex">
					<span className="text-3xl mr-3">🌍</span>
					<LanguageSelector avaliableLanguages={["zh-CN", "en-US", "zh-TW"].sort()} className="w-full" />
				</div>
			</div>

			{articleHTML && <article className="manual-article" dangerouslySetInnerHTML={{ __html: articleHTML }} />}
		</Template>
	);
}
