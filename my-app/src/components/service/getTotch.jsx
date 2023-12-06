import { Link } from "react-router-dom";
import css from "./service.module.css";
import { useTranslation } from "react-i18next";
export default function GetTotch({ t }) {
  const { i18n } = useTranslation();
  return (
    <section className={css.getWrap}>
      <p className={css.h5}>{t("description.part1.services.contactUs")}</p>
      <p className={css.paragraf}>{t("description.part1.services.pContact")}</p>
      <Link className={css.buttonContact} to={`/${i18n.language}/contact`}>
        {t("description.part1.services.buttonFor")}
      </Link>
    </section>
  );
}
