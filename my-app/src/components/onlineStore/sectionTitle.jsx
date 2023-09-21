import css from "./aboutLanding.module.css";
export default function SectionTitle({ t }) {
  return (
    <section className={css.sectionTitle}>
      <h1 className={css.serviceTitleH1}>
        {t("description.part1.store.title")}
      </h1>
    </section>
  );
}
