import Particles from "react-tsparticles";
import css from "./siteMap.module.css";
import Partisipals from "../partisipals";
import HeaderUkr from "../header/headerUkr";
import Footer from "../footer/footer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function SiteMap() {
  const { t } = useTranslation();
  return (
    <>
      <Partisipals />
      <HeaderUkr />
      <section className={css.wrapSiteMap}>
        <div className={css.wrapSiteMapSmal}>
          <h1 className={css.h1Mao}> {t("description.part1.footer.h1")}</h1>
          <Link to="/" className={css.linkMap}>
            {t("description.part1.footer.main")}
          </Link>
          <Link to="/en" className={css.linkMap}>
            {t("description.part1.footer.mainEn")}
          </Link>
          <Link to="/ua" className={css.linkMap}>
            {t("description.part1.footer.mainUk")}
          </Link>
          <Link to="/service" className={css.linkMap}>
            {t("description.part1.footer.serv")}
          </Link>
          <Link to="/landing" className={css.linkMap}>
            {t("description.part1.footer.landi")}
          </Link>
          <Link to="/business" className={css.linkMap}>
            {t("description.part1.footer.bussin")}
          </Link>
          <Link to="/store" className={css.linkMap}>
            {t("description.part1.footer.store")}
          </Link>
          <Link to="/app" className={css.linkMap}>
            {t("description.part1.footer.app")}
          </Link>
          <Link to="/crm" className={css.linkMap}>
            {t("description.part1.footer.crm")}
          </Link>
          <Link to="/contact" className={css.linkMap}>
            {t("description.part1.footer.constact")}
          </Link>
          <Link to="/about" className={css.linkMap}>
            {t("description.part1.footer.about")}
          </Link>
          <Link to="/blog" className={css.linkMap}>
            {t("description.part1.footer.blog")}
          </Link>
          <Link to="/sitemap" className={css.linkMap}>
            {t("description.part1.footer.sitemap")}
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
