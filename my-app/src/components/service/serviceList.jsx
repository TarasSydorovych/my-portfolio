import css from "./service.module.css";
import { FaConnectdevelop } from "react-icons/fa";
import {
  AiOutlineArrowRight,
  AiOutlineDeploymentUnit,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";
import { BsBox } from "react-icons/bs";
import { BsFillCartPlusFill } from "react-icons/bs";
import { SiCivicrm } from "react-icons/si";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ServiceList({ t }) {
  const { i18n } = useTranslation();
  return (
    <section className={css.serviceListWrap}>
      <div className={css.serviceListWrapSmall}>
        <h2 className={css.whotOfferWrap}>
          {t("description.part1.services.offer")}
        </h2>
        <div className={css.listServicesWrap}>
          {/*fffffdfkjshfsf*/}
          <div className={css.serviceBlockWrap}>
            <FaConnectdevelop className={css.aiFillTablet} />
            <div className={css.desWrap}>
              <h3 className={css.titleOfServBlock}>
                {t("description.part1.services.firstOfferName")}
              </h3>
              <p className={css.descOfServBlock}>
                {t("description.part1.services.firstOfferDesc")}
              </p>
            </div>
            <Link
              className={css.link}
              to={`/${i18n.language}/landing`}
              aria-label={t("description.part1.services.firstOfferName")}
            >
              <div className={css.readMore}>
                {t("description.part1.services.readMor")}
                <AiOutlineArrowRight className={css.aiOutlineArrowRight} />
              </div>
            </Link>
          </div>
          <div className={css.serviceBlockWrap}>
            <AiOutlineDeploymentUnit className={css.aiFillTablet} />
            <div className={css.desWrap}>
              <h3 className={css.titleOfServBlock}>
                {t("description.part1.services.secondOfferName")}
              </h3>
              <p className={css.descOfServBlock}>
                {t("description.part1.services.secondOfferDesc")}
              </p>
            </div>
            <Link
              className={css.link}
              to={`/${i18n.language}/business`}
              aria-label={t("description.part1.services.secondOfferName")}
            >
              <div className={css.readMore}>
                {t("description.part1.services.readMor")}
                <AiOutlineArrowRight className={css.aiOutlineArrowRight} />
              </div>
            </Link>
          </div>
          <div className={css.serviceBlockWrap}>
            <BsFillCartPlusFill className={css.aiFillTablet} />
            <div className={css.desWrap}>
              <h3 className={css.titleOfServBlock}>
                {t("description.part1.services.threOfferName")}
              </h3>
              <p className={css.descOfServBlock}>
                {t("description.part1.services.threOfferDesc")}
              </p>
            </div>
            <Link
              className={css.link}
              to={`/${i18n.language}/store`}
              aria-label={t("description.part1.services.threOfferName")}
            >
              <div className={css.readMore}>
                {t("description.part1.services.readMor")}
                <AiOutlineArrowRight className={css.aiOutlineArrowRight} />
              </div>
            </Link>
          </div>
          <div className={css.serviceBlockWrap}>
            <AiOutlineAppstoreAdd className={css.aiFillTablet} />
            <div className={css.desWrap}>
              <h3 className={css.titleOfServBlock}>
                {t("description.part1.services.fourOfferName")}
              </h3>
              <p className={css.descOfServBlock}>
                {t("description.part1.services.fourOfferDesc")}
              </p>
            </div>
            <Link
              className={css.link}
              to={`/${i18n.language}/app`}
              aria-label={t("description.part1.services.fourOfferName")}
            >
              <div className={css.readMore}>
                {t("description.part1.services.readMor")}
                <AiOutlineArrowRight className={css.aiOutlineArrowRight} />
              </div>
            </Link>
          </div>
          <div className={css.serviceBlockWrap}>
            <BsBox className={css.aiFillTablet} />
            <div className={css.desWrap}>
              <h3 className={css.titleOfServBlock}>
                {t("description.part1.services.sixOfferName")}
              </h3>
              <p className={css.descOfServBlock}>
                {t("description.part1.services.sixOfferDesc")}
              </p>
            </div>
            <Link
              className={css.link}
              to={`/${i18n.language}/design`}
              aria-label={t("description.part1.services.sixOfferName")}
            >
              <div className={css.readMore}>
                {t("description.part1.services.readMor")}
                <AiOutlineArrowRight className={css.aiOutlineArrowRight} />
              </div>
            </Link>
          </div>
          <div className={css.serviceBlockWrap}>
            <SiCivicrm className={css.aiFillTablet} />
            <div className={css.desWrap}>
              <h3 className={css.titleOfServBlock}>
                {t("description.part1.services.fiveOfferName")}
              </h3>
              <p className={css.descOfServBlock}>
                {t("description.part1.services.fiveOfferDesc")}
              </p>
            </div>
            <Link
              className={css.link}
              to={`/${i18n.language}/crm`}
              aria-label={t("description.part1.services.fiveOfferName")}
            >
              <div className={css.readMore}>
                {t("description.part1.services.readMor")}
                <AiOutlineArrowRight className={css.aiOutlineArrowRight} />
              </div>
            </Link>
          </div>
          {/*fffffdfkjshfsf*/}
        </div>
      </div>
    </section>
  );
}
