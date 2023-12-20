import css from "./aboutLanding.module.css";
export default function ForWho({ t }) {
  return (
    <div className={css.whatOfferWrapWho}>
      <h3 className={css.titleOfferRes}>
        {t("description.part1.bussines.fourTitle")}
      </h3>
      <p className="h2Wrl">{t("description.part1.bussines.fourDesc")}</p>
      <div className={css.offerWrS}>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>01.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.bussines.fourFirst")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>02.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.bussines.fourSecond")}
          </p>
        </div>
        <div className={css.offerSmallWr}>
          <p className={css.bigLabel}>03.</p>
          <p className={css.bigLabelText}>
            {t("description.part1.bussines.fourThre")}
          </p>
        </div>
      </div>
      <p className="h2Wrl">{t("description.part1.bussines.fourDescTwo")}</p>
    </div>
  );
}
