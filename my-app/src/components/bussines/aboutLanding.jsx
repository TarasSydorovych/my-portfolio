import HeaderUkr from "../header/headerUkr";
import Partisipals from "../partisipals";
import css from "./aboutLanding.module.css";
import Footer from "../footer/footer";
import SectionTitle from "./sectionTitle";
import { useTranslation, Trans } from "react-i18next";
import keyWord from "../../function/keyWord";
import GetTotch from "../service/getTotch";
import Central from "./central";
import ForWho from "./forWho";
export default function Bussines() {
  const { t, i18n } = useTranslation();
  keyWord(
    `${t("description.seo.bussines.title")}`,
    `${t("description.seo.bussines.description")}`
  );
  return (
    <>
      <Partisipals />
      <div className={css.containerHeader}>
        <HeaderUkr t={t} />
        <SectionTitle t={t} />
        <Central t={t} />
        <GetTotch t={t} />
        <ForWho t={t} />
        <Footer />
      </div>
    </>
  );
}
