import css from "./aboutLanding.module.css";
export default function SectionTitle({ t }) {
  return (
    <section className={css.sectionTitle}>
      <h1 className={css.serviceTitleH1}>{t("description.part1.web.title")}</h1>
      <p className="h2Wrl">{t("description.part1.web.desc")}</p>
    </section>
  );
}
