import css from "./aboutUs.module.css";
export default function SectionTitle({ t }) {
  return (
    <section className={css.sectionTitle}>
      <h1 className={css.serviceTitleH1}>
        {t("description.part1.aboutUs.title")}
      </h1>
      <p className="h2Wrl">{t("description.part1.aboutUs.mainDesc")}</p>
    </section>
  );
}
