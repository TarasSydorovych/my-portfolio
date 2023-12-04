import React from "react";
import HeaderUkr from "../header/headerUkr";
import { useTranslation, Trans } from "react-i18next";
import Partisipals from "../partisipals";
import css from "./notFound.module.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Partisipals />
      <div className={css.containerHeader}>
        <HeaderUkr t={t} />
        <div className={css.wrapFour}>
          <h1 className={css.h1Fo}>404</h1>
          <p className={css.pFor}>{t("description.part1.mainPage.fourFo")}</p>
          <Link className={css.relocateTo} to="/">
            {t("description.part1.mainPage.returnTo")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
