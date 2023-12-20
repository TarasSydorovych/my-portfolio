import css from "./aboutLanding.module.css";
export default function ForWho({ t }) {
  return (
    <div className={css.whatOfferWrapWho}>
      <h3 className={css.titleOfferRes}>
        {t("description.part1.landing.fourTitle")}
      </h3>

      <div className={css.offerWrS}>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>01.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.landing.fourFirst")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>02.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.landing.fourSecond")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>03.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.landing.fourThre")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>04.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.landing.fourFour")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>05.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.landing.fourFive")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>06.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.landing.fourSix")}
          </p>
        </div>
      </div>
      <p className={css.titleOfferP}>
        {t("description.part1.landing.fourDesc")}
      </p>
    </div>
  );
}
