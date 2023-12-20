import HeaderUkr from "../header/headerUkr";
import Partisipals from "../partisipals";
import css from "./aboutUs.module.css";
import Footer from "../footer/footer";
import SectionTitle from "./sectionTitle";
import { useTranslation, Trans } from "react-i18next";
import keyWord from "../../function/keyWord";
import FirstBlock from "./firstBlock";
import Goal from "./goal";
import OurMision from "./ourMision";
import BlockFirsInfo from "./blockFirsInfo";
import BlockSecondInfo from "./blockSecondInfo";

export default function AboutUs() {
  const { t, i18n } = useTranslation();
  keyWord(
    `${t("description.seo.aboutUs.title")}`,
    `${t("description.seo.aboutUs.description")}`
  );
  return (
    <>
      <Partisipals />
      <div className={css.containerHeader}>
        <HeaderUkr t={t} />
        <SectionTitle t={t} />
        <FirstBlock t={t} />
        <OurMision t={t} />
        <Goal t={t} />
        <BlockFirsInfo t={t} />
        <BlockSecondInfo t={t} />
        <Footer />
      </div>
    </>
  );
}
