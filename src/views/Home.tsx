import Link from "next/link";
import { useTranslation } from "next-i18next";

export function HomeView() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div>
        <Link href="/" locale="en">
          next/link: {t("changeLanguageToEnglish")}
        </Link>
      </div>
      <div>
        <Link href="/" locale="es">
          next/link: {t("changeLanguageToSpanish")}
        </Link>
      </div>
      <p>{t("mission")}</p>
    </div>
  );
}
