import keyWord from "../../function/keyWord";
import Footer from "../footer/footer";
import HeaderUkr from "../header/headerUkr";
import Partisipals from "../partisipals";
import SectionTitle from "./sectionTitle";
import css from "./service.module.css";
import { useTranslation, Trans } from "react-i18next";
import ServiceList from "./serviceList";
import Question from "./question";
import GetTotch from "./getTotch";
export default function Servise() {
  const { t, i18n } = useTranslation();
  keyWord(
    `${t("description.seo.services.title")}`,
    `${t("description.seo.services.description")}`
  );
  return (
    <>
      <Partisipals />
      <div className="containerHeader">
        <HeaderUkr t={t} />
        <SectionTitle t={t} />
        <ServiceList t={t} />
        <Question t={t} />
        <GetTotch t={t} />
        <Footer />
      </div>
    </>
  );
}
