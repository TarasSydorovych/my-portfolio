import { BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import css from "../crm/aboutLanding.module.css";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
export default function HeaderUkr() {
  const { t, i18n } = useTranslation();
  const [windowDimensions, setWindowDimensions] = useState(true);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 874) {
        setWindowDimensions(false);
      } else {
        setWindowDimensions(true);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const cahangeUkr = () => {
    i18n.changeLanguage("ua");
  };
  const cahangeEn = () => {
    i18n.changeLanguage("en");
  };
  return (
    <header>
      <nav>
        {windowDimensions === false && (
          <div className="outLineMenu">
            <AiOutlineMenu onClick={() => setMenu(true)} />
          </div>
        )}
        {menu && (
          <div className="menu">
            <AiOutlineClose
              style={{ alignSelf: "flex-end", margin: "5%", fontSize: "3em" }}
              onClick={() => setMenu(false)}
            />
            <ul className="ulMobile">
              <li className="liMobile">
                <Link to="/">{t("description.part1.mainPage.headerMain")}</Link>
              </li>
              <li className="liMobile">
                <Link to="/about">
                  {t("description.part1.mainPage.headerAbout")}
                </Link>
              </li>
              <li className="liMobile">
                <Link to="/service">
                  {t("description.part1.mainPage.headerServ")}
                </Link>
              </li>
              <li className="liMobile">
                <Link to="/contact">
                  {" "}
                  {t("description.part1.mainPage.headerContact")}
                </Link>
              </li>
            </ul>
          </div>
        )}
        <h1>
          WebUi-<span>Studio</span>
        </h1>
        {windowDimensions && (
          <ul>
            <li>
              <Link to="/">{t("description.part1.mainPage.headerMain")}</Link>
            </li>
            <li>
              <Link to="/about">
                {t("description.part1.mainPage.headerAbout")}
              </Link>
            </li>
            <li>
              <Link to="/service">
                {t("description.part1.mainPage.headerServ")}
              </Link>
            </li>
            <li>
              <Link to="/contact">
                {t("description.part1.mainPage.headerContact")}
              </Link>
            </li>
          </ul>
        )}
        <div className="lang">
          <h4 className={css.languageH} onClick={cahangeEn}>
            ENG
          </h4>
          <h4 className={css.languageH} onClick={cahangeUkr}>
            УКР
          </h4>
          <div className="iconWrap">
            <BsSun className="icon" />
          </div>
        </div>
      </nav>
    </header>
  );
}
