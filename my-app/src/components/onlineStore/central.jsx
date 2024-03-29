import css from "./aboutLanding.module.css";
import ListOfServ from "../landing/listOfServ";
import pic from "../img/online-Store.webp";
export default function Central({ t }) {
  return (
    <section className={css.centralWrap}>
      <div className={css.centralWrapSmall}>
        <div className={css.descriptionWrap}>
          <img src={pic} className={css.imgLand} />
          <h2 className={css.firstDescH}>
            {t("description.part1.store.firstTitle")}
          </h2>
          <p className={css.firstDescP}>
            {t("description.part1.store.firstDesc")}
          </p>
        </div>
        <ListOfServ t={t} />
      </div>
      <div className={css.whatOfferWrap}>
        <div className={css.offerWrS}>
          <div className={css.offerSmallWr}>
            <p className={css.bigLabel}>01.</p>
            <p className={css.bigLabelText}>
              {t("description.part1.store.threFirst")}
            </p>
          </div>
          <div className={css.offerSmallWr}>
            <p className={css.bigLabel}>02.</p>
            <p className={css.bigLabelText}>
              {t("description.part1.store.threSecond")}
            </p>
          </div>
          <div className={css.offerSmallWr}>
            <p className={css.bigLabel}>03.</p>
            <p className={css.bigLabelText}>
              {t("description.part1.store.threThre")}
            </p>
          </div>
          <div className={css.offerSmallWr}>
            <p className={css.bigLabel}>04.</p>
            <p className={css.bigLabelText}>
              {t("description.part1.store.threFour")}
            </p>
          </div>
          <div className={css.offerSmallWr}>
            <p className={css.bigLabel}>05.</p>
            <p className={css.bigLabelText}>
              {t("description.part1.store.threFive")}
            </p>
          </div>
          <div className={css.offerSmallWr}>
            <p className={css.bigLabel}>06.</p>
            <p className={css.bigLabelText}>
              {t("description.part1.store.threSix")}
            </p>
          </div>
        </div>
        <p className={css.titleOfferP}>
          {t("description.part1.store.threDesc")}
        </p>
      </div>
    </section>
  );
}
