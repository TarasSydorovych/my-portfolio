import css from "./aboutLanding.module.css";
import ListOfServ from "../landing/listOfServ";
import pic from "../img/businesSite.webp";
export default function Central({ t }) {
  return (
    <section className={css.centralWrap}>
      <div className={css.centralWrapSmall}>
        <div className={css.descriptionWrap}>
          <img src={pic} className={css.imgLand} />
          <h2 className={css.firstDescH}>
            {t("description.part1.bussines.firstTitle")}
          </h2>
          <p className={css.firstDescP}>
            {t("description.part1.bussines.firstDesc")}
          </p>
          <h2 className={css.firstDescH}>
            {t("description.part1.bussines.secondTitle")}
          </h2>
          <p className={css.firstDescP}>
            {t("description.part1.bussines.secondDesc")}
          </p>
        </div>
        <ListOfServ t={t} />
      </div>
      <div className={css.whatOfferWrap}>
        <h3 className={css.titleOffer}>
          {t("description.part1.bussines.threTitle")}
        </h3>
        <p className={css.titleOfferP}>
          {t("description.part1.bussines.threDesc")}
        </p>
        <div className={css.offerWrS}>
          <div className={css.offerSmallWr}>
            <p className={css.bigLabel}>01.</p>
            <p className={css.bigLabelText}>
              {t("description.part1.bussines.threFirst")}
            </p>
          </div>
          <div className={css.offerSmallWr}>
            <p className={css.bigLabel}>02.</p>
            <p className={css.bigLabelText}>
              {t("description.part1.bussines.threSecond")}
            </p>
          </div>
          <div className={css.offerSmallWr}>
            <p className={css.bigLabel}>03.</p>
            <p className={css.bigLabelText}>
              {t("description.part1.bussines.threThre")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
