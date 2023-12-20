import css from "./aboutLanding.module.css";
export default function ForWho({ t }) {
  return (
    <div className={css.whatOfferWrapWho}>
      <h3 className={css.titleOfferRes}>
        {t("description.part1.web.fourTitle")}
      </h3>
      <p className={css.titleOfferP}>{t("description.part1.web.fourDesc")}</p>
      <div className={css.offerWrS}>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>01.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.web.fourFirst")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>02.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.web.fourSecond")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>03.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.web.fourThre")}
          </p>
        </div>
      </div>
      <p className={css.titleOfferP}>{t("description.part1.web.descPoT")}</p>
    </div>
  );
}
