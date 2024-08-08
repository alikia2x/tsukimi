import { useTranslation } from "react-i18next";
import Template from "./Template";
//@ts-expect-error: idk why
import markdownit from "markdown-it";
import anchor from "markdown-it-anchor";

import { useEffect, useState } from "react";
import LanguageSelector from "components/LanguageSelector";
import { Helmet } from "react-helmet";

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
			<div className="relative md:absolute max-w-full w-56 flex items-center self-end">
				<span className="text-3xl mr-3">🌍</span>
				<LanguageSelector avaliableLanguages={["zh-CN", "en-US", "zh-TW"].sort()} className="w-full"/>
			</div>

			{articleHTML && <article className="manual-article" dangerouslySetInnerHTML={{ __html: articleHTML }} />}
		</Template>
	);
}
