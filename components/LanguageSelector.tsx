import { useTranslation } from "react-i18next";
import NativeSelect from "components/NativeSelect";
import { useEffect, useState } from "react";
import langmap from "langmap";

interface LanguageSelectorProps {
	avaliableLanguages?: string[];
}

interface CodeToNameMapType {
	[key: string]: string;
}

export default function LanguageSelector(props: LanguageSelectorProps) {
	const { i18n } = useTranslation();
	const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
	const [languages] = useState(props.avaliableLanguages ?? i18n.languages);

	const codeToNameMap: CodeToNameMapType = {};
	for (const lng of languages) {
		codeToNameMap[lng] = langmap[lng].nativeName;
	}

	useEffect(() => {
		i18n.changeLanguage(currentLanguage);
	}, [i18n, currentLanguage]);

	return (
		<NativeSelect
			value={currentLanguage}
			onChange={(event) => setCurrentLanguage(event.currentTarget.value)}
			data={codeToNameMap}
		/>
	);
}
