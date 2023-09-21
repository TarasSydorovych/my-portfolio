import css from "./aboutUs.module.css";
import earth from "../img/earth.png";
export default function OurMision({ t }) {
  return (
    <section className={css.misionWrap}>
      <div className={css.smallMisionWrap}>
        <div className={css.misionDesctWrap}>
          <h3 className={css.masionH3}>
            {t("description.part1.aboutUs.misionTitle")}
          </h3>
          <p className={css.misionP}>
            {" "}
            {t("description.part1.aboutUs.misionDesc")}
          </p>
        </div>
        <img src={earth} className={css.earth} />
      </div>
    </section>
  );
}
