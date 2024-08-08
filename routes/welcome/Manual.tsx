import { useTranslation } from "react-i18next";
import Template from "./Template";
//@ts-expect-error: idk why
import markdownit from "markdown-it";
import anchor from "markdown-it-anchor";

import { useEffect, useState } from "react";
import styles from "./article.module.css";

export default function ManualPage() {
	const { t } = useTranslation();
	const [articleHTML, setArticleHTML] = useState<null | TrustedHTML>(null);

	useEffect(() => {
		const md = markdownit().use(anchor, {
			permalink: anchor.permalink.headerLink({ safariReaderFix: true })
		});
		setArticleHTML(md.render(t("welcome.manual.content")));
	}, [t]);

	return (
		<Template>
			{articleHTML && <article className={styles.className} dangerouslySetInnerHTML={{ __html: articleHTML }} />}
		</Template>
	);
}
