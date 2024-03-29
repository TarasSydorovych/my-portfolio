import css from "./aboutLanding.module.css";
export default function ForWho({ t }) {
  return (
    <div className={css.whatOfferWrapWho}>
      <h3 className={css.titleOfferRes}>
        {t("description.part1.store.fourTitle")}
      </h3>
      <p className="h2Wrl">{t("description.part1.store.descTwo")}</p>
      <div className={css.offerWrS}>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>01.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.store.fourFirst")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>02.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.store.fourSecond")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>03.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.store.fourThre")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>04.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.store.fourFour")}
          </p>
        </div>
      </div>
      <p className="h2Wrl">{t("description.part1.store.descThre")}</p>
    </div>
  );
}
