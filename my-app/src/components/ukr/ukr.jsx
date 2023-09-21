import Partisipals from "../partisipals";
import UkrVersion from "./ukrVersion";
import keyWord from "../../function/keyWord";
import { useTranslation, Trans } from "react-i18next";

export default function Ukr() {
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
