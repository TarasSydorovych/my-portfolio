import css from "./aboutLanding.module.css";
export default function ForWho({ t }) {
  return (
    <div className={css.whatOfferWrapWho}>
      <h3 className={css.titleOfferRes}>
        {t("description.part1.design.fourTitle")}
      </h3>
      <p className={css.titleOfferP}>
        {t("description.part1.design.fourDesc")}
      </p>
      <div className={css.offerWrS}>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>01.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.design.fourFirst")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>02.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.design.fourSecond")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>03.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.design.fourThre")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>04.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.design.fourFour")}
          </p>
        </div>
      </div>
      <p className={css.titleOfferP}>
        {t("description.part1.design.fourDescTwo")}
      </p>
    </div>
  );
}
