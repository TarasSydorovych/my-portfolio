import Partisipals from "../partisipals";
import UkrVersion from "./ukrVersion";
import keyWord from "../../function/keyWord";
import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Ukr() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Перевіряємо, чи містить поточний шлях "/en" або "/uk" і встановлюємо відповідну мову.
    if (location.pathname.includes("/en")) {
      i18n.changeLanguage("en");
    } else if (location.pathname.includes("/ua")) {
      i18n.changeLanguage("ua");
    } else {
      // Якщо шлях не містить "/en" або "/uk", залишаємо мову без змін.
      // Ви можете встановити вашу мову за замовчуванням тут, наприклад, "en" або "uk".
      // Наприклад: i18n.changeLanguage('en');
    }
  }, [location.pathname]);
  keyWord(
    `${t("description.seo.mainPage.title")}`,
    `${t("description.seo.mainPage.description")}`
  );

  return (
    <>
      <Partisipals />
      <UkrVersion t={t} />
    </>
  );
}
