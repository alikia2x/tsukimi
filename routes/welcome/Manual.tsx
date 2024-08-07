import { useTranslation } from "react-i18next";
import Template from "./Template";

export default function ManualPage() {
    const { t } = useTranslation();
    return (
        <Template>
            <h1>{t('')}</h1>
        </Template>
    );
}