import css from "./aboutLanding.module.css";
import ListOfServ from "./listOfServ";
import pic from "../img/landing.webp";
export default function Central({ t }) {
  return (
    <section className={css.centralWrap}>
      <div className={css.centralWrapSmall}>
        <div className={css.descriptionWrap}>
          <img src={pic} className={css.imgLand} />
          <h2 className={css.firstDescH}>
            {t("description.part1.landing.firstTitle")}
          </h2>
          <p className={css.firstDescP}>
            {t("description.part1.landing.firstDesc")}
          </p>
        </div>
        <ListOfServ t={t} />
      </div>
      <div className={css.whatOfferWrap}>
        <h3 className={css.titleOffer}>
          {t("description.part1.landing.threTitle")}
        </h3>

        <div className={css.offerWrSCentral}>
          <div className={css.offerSmallWr}>
            <p className={css.bigLabel}>01.</p>
            <p className={css.bigLabelText}>
              {t("description.part1.landing.threFirst")}
            </p>
          </div>
          <div className={css.offerSmallWr}>
            <p className={css.bigLabel}>02.</p>
            <p className={css.bigLabelText}>
              {t("description.part1.landing.threSecond")}
            </p>
          </div>
          <div className={css.offerSmallWr}>
            <p className={css.bigLabel}>03.</p>
            <p className={css.bigLabelText}>
              {t("description.part1.landing.threThre")}
            </p>
          </div>
        </div>
        <p className={css.titleOfferP}>
          {t("description.part1.landing.threDesc")}
        </p>
      </div>
    </section>
  );
}
