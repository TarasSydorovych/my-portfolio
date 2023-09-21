import { Link } from "react-router-dom";
import css from "./service.module.css";
export default function GetTotch({ t }) {
  return (
    <section className={css.getWrap}>
      <h5 className={css.h5}>{t("description.part1.services.contactUs")}</h5>
      <p className={css.paragraf}>{t("description.part1.services.pContact")}</p>
      <Link className={css.buttonContact} to="/contact">
        {t("description.part1.services.buttonFor")}
      </Link>
    </section>
  );
}
