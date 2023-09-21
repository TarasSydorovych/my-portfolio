import HeaderEng from "../header/headerEng";
import Partisipals from "../partisipals";
import { useRef } from "react";
import sendEmail from "../../function/sendMessage";
import HeaderUkr from "../header/headerUkr";
import Footer from "../footer/footer";
import Form from "./form";
import { useTranslation, Trans } from "react-i18next";
import keyWord from "../../function/keyWord";
export default function ContactUkr() {
  const form = useRef();
  const { t, i18n } = useTranslation();
  keyWord(
    `${t("description.seo.mainPage.title")}`,
    `${t("description.seo.mainPage.description")}`
  );
  return (
    <>
      <Partisipals />
      <div className="containerHeader">
        <HeaderUkr t={t} />
        <div className="contactDiv">
          <div className="contactFo">
            <h1>{t("description.part1.ab.title")}</h1>
            <h2>{t("description.part1.ab.adr")}</h2>
            <a href="tel:+380937246193">
              {t("description.part1.ab.tel")}: +380937246193
            </a>
            <a href="mailto:jakzadarom2@gmail.com">
              Email: webui.dev.studio@gmail.com
            </a>
          </div>
          <div className="wrapper">
            <Form />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
