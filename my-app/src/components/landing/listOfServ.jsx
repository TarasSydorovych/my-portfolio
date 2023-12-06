import css from "./aboutLanding.module.css";
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
export default function ListOfServ({ t }) {
  const { i18n } = useTranslation();
  return (
    <section className={css.listOfServWrap}>
      <h2 className={css.servListH2}>
        {t("description.part1.landing.listOfSerc")}
      </h2>
      <ul className={css.servListH2}>
        <li className={css.listLi}>
          <FaConnectdevelop className={css.aiFillTablet} />
          <Link className={css.linkSerc} to={`/${i18n.language}/landing`}>
            {t("description.part1.services.firstOfferName")}
          </Link>
        </li>
        <li className={css.listLi}>
          <AiOutlineDeploymentUnit className={css.aiFillTablet} />
          <Link className={css.linkSerc} to={`/${i18n.language}/business`}>
            {t("description.part1.services.secondOfferName")}
          </Link>
        </li>
        <li className={css.listLi}>
          <BsFillCartPlusFill className={css.aiFillTablet} />
          <Link className={css.linkSerc} to={`/${i18n.language}/store`}>
            {t("description.part1.services.threOfferName")}
          </Link>
        </li>
        <li className={css.listLi}>
          <AiOutlineAppstoreAdd className={css.aiFillTablet} />
          <Link className={css.linkSerc} to={`/${i18n.language}/app`}>
            {t("description.part1.services.fourOfferName")}
          </Link>
        </li>
        <li className={css.listLi}>
          <BsBox className={css.aiFillTablet} />
          <Link className={css.linkSerc} to={`/${i18n.language}/design`}>
            {t("description.part1.services.sixOfferName")}
          </Link>
        </li>
        <li className={css.listLi}>
          <SiCivicrm className={css.aiFillTablet} />
          <Link className={css.linkSerc} to={`/${i18n.language}/crm`}>
            {t("description.part1.services.fiveOfferName")}
          </Link>
        </li>
      </ul>
    </section>
  );
}
