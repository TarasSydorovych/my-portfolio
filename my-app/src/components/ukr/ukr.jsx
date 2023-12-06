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
