import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ServiseUkr({ t }) {
  const { i18n } = useTranslation();
  return (
    <section id="productList">
      <h2>{t("description.part1.mainPage.mainOurServ")}</h2>
      <div className="productList">
        <div>
          <Link to={`/landing`}>
            <h1>{t("description.part1.mainPage.landTitle")}</h1>
            <h2>01</h2>
            <h3>Landing</h3>
            <p>{t("description.part1.mainPage.lendDesc")}</p>
          </Link>
        </div>

        <div>
          <Link to={`/business`}>
            <h1>{t("description.part1.mainPage.businesTitile")}</h1>
            <h2>02</h2>
            <h3>Business</h3>
            <p>{t("description.part1.mainPage.businesDesc")}</p>
          </Link>
        </div>
        <div>
          <Link to={`/store`}>
            <h1>{t("description.part1.mainPage.onlineTitile")}</h1>
            <h2>03</h2>
            <h3>Online</h3>
            <p>{t("description.part1.mainPage.onlineDesc")}</p>
          </Link>
        </div>
        <div>
          <Link to={`/crm`}>
            <h1>{t("description.part1.mainPage.crmInterTitile")}</h1>
            <h2>04</h2>
            <h3>CRM</h3>
            <p>{t("description.part1.mainPage.crmInterDesc")}</p>
          </Link>
        </div>
        <div>
          <Link to={`/design`}>
            <h1>{t("description.part1.mainPage.designTitile")}</h1>
            <h2>05</h2>
            <h3>Design</h3>
            <p>{t("description.part1.mainPage.designDesc")}</p>
          </Link>
        </div>
        <div>
          <Link to={`/app`}>
            <h1>{t("description.part1.mainPage.optimizaTitile")}</h1>
            <h2>06</h2>
            <h3>Optimization</h3>
            <p>{t("description.part1.mainPage.optimizaDesc")}</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
