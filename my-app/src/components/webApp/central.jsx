import css from "./aboutLanding.module.css";
import ListOfServ from "../landing/listOfServ";
import pic from "../img/webApp.webp";
export default function Central({ t }) {
  return (
    <section className={css.centralWrap}>
      <div className={css.centralWrapSmall}>
        <div className={css.descriptionWrap}>
          <img src={pic} className={css.imgLand} />
          <h2 className={css.firstDescH}>
            {t("description.part1.web.firstTitle")}
          </h2>
          <p className={css.firstDescP}>
            {t("description.part1.web.firstDesc")}
          </p>
        </div>
        <ListOfServ t={t} />
      </div>
      <div className={css.whatOfferWrap}>
        <h3 className={css.titleOffer}>
          {t("description.part1.web.threTitle")}
        </h3>

        <div className={css.offerWrS}>
          <div className={css.offerSmallWr}>
            <p className={css.bigLabel}>01.</p>
            <p className={css.bigLabelText}>
              {t("description.part1.web.threFirst")}
            </p>
          </div>
          <div className={css.offerSmallWr}>
            <p className={css.bigLabel}>02.</p>
            <p className={css.bigLabelText}>
              {t("description.part1.web.threSecond")}
            </p>
          </div>
          <div className={css.offerSmallWr}>
            <p className={css.bigLabel}>03.</p>
            <p className={css.bigLabelText}>
              {t("description.part1.web.threThre")}
            </p>
          </div>
          <div className={css.offerSmallWr}>
            <p className={css.bigLabel}>04.</p>
            <p className={css.bigLabelText}>
              {t("description.part1.web.threFour")}
            </p>
          </div>
          <div className={css.offerSmallWr}>
            <p className={css.bigLabel}>05.</p>
            <p className={css.bigLabelText}>
              {t("description.part1.web.threFive")}
            </p>
          </div>
        </div>
        <p className={css.titleOfferP}>{t("description.part1.web.threDesc")}</p>
      </div>
    </section>
  );
}
