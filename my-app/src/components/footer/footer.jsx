import { Link } from "react-router-dom";
import css from "./footer.module.css";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer className={css.footer}>
        <p className={css.pd}>
          © Copyright 2023 WebUi-Studio. All rights reserved.
        </p>
        <Link className={css.linkSiteMap} to="/sitemap">
          {t("description.part1.mainPage.footer")}
        </Link>
      </footer>
    </>
  );
}
