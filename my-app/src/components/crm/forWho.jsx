import css from "./aboutLanding.module.css";
export default function ForWho({ t }) {
  return (
    <div className={css.whatOfferWrapWho}>
      <h3 className={css.titleOfferRes}>
        {t("description.part1.crm.fourTitle")}
      </h3>
      <p className={css.titleOfferP}>{t("description.part1.crm.fourDesc")}</p>
      <div className={css.offerWrS}>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>01.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.crm.fourFirst")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>02.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.crm.fourSecond")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>03.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.crm.fourThre")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>04.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.crm.fourFour")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>05.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.crm.fourFive")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>06.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.crm.fourSix")}
          </p>
        </div>
      </div>
      <p className={css.titleOfferP}>
        {t("description.part1.crm.fourDescTwo")}
      </p>
    </div>
  );
}
