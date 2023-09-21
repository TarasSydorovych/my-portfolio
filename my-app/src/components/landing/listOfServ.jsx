import css from "./aboutLanding.module.css";
import { FaConnectdevelop } from "react-icons/fa";
import {
  AiOutlineArrowRight,
  AiOutlineDeploymentUnit,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { SiCivicrm } from "react-icons/si";
import { Link } from "react-router-dom";
export default function ListOfServ({ t }) {
  return (
    <section className={css.listOfServWrap}>
      <h2 className={css.servListH2}>
        {t("description.part1.landing.listOfSerc")}
      </h2>
      <ul className={css.servListH2}>
        <li className={css.listLi}>
          <FaConnectdevelop className={css.aiFillTablet} />
          <Link className={css.linkSerc} to="/landing">
            {t("description.part1.services.firstOfferName")}
          </Link>
        </li>
        <li className={css.listLi}>
          <AiOutlineDeploymentUnit className={css.aiFillTablet} />
          <Link className={css.linkSerc} to="/business">
            {t("description.part1.services.secondOfferName")}
          </Link>
        </li>
        <li className={css.listLi}>
          <BsFillCartPlusFill className={css.aiFillTablet} />
          <Link className={css.linkSerc} to="/store">
            {t("description.part1.services.threOfferName")}
          </Link>
        </li>
        <li className={css.listLi}>
          <AiOutlineAppstoreAdd className={css.aiFillTablet} />
          <Link className={css.linkSerc} to="/app">
            {t("description.part1.services.fourOfferName")}
          </Link>
        </li>
        <li className={css.listLi}>
          <SiCivicrm className={css.aiFillTablet} />
          <Link className={css.linkSerc} to="/crm">
            {t("description.part1.services.fiveOfferName")}
          </Link>
        </li>
      </ul>
    </section>
  );
}
