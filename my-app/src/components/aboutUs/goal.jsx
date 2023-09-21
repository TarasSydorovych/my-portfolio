import css from "./aboutUs.module.css";

export default function Goal({ t }) {
  return (
    <section className={css.goalWrap}>
      <h3 className={css.goalH3}>
        {t("description.part1.aboutUs.secondTitle")}
      </h3>
      <p className={css.goalP}> {t("description.part1.aboutUs.secondDesc")}</p>
    </section>
  );
}
