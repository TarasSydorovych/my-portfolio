import { BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import css from "../crm/aboutLanding.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function HeaderUkr() {
  const { t, i18n } = useTranslation();
  const [windowDimensions, setWindowDimensions] = useState(true);
  const [headerSticky, setHeaderSticky] = useState(false);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setHeaderSticky(true);
    } else {
      setHeaderSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
    i18n.changeLanguage("uk-UA");
    navigate(`/uk-UA`);
  };
  const cahangeEn = () => {
    i18n.changeLanguage("en");
    navigate(`/en`);
  };
  return (
    <header>
      <nav
        className={`${css.transparentHeader} ${headerSticky ? css.sticky : ""}`}
      >
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
                <Link to={`/${i18n.language}/about`}>
                  {t("description.part1.mainPage.headerAbout")}
                </Link>
              </li>
              <li className="liMobile">
                <Link to={`/${i18n.language}/service`}>
                  {t("description.part1.mainPage.headerServ")}
                </Link>
              </li>

              <li className="liMobile">
                <Link to={`/${i18n.language}/contact`}>
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
              <Link to={`/${i18n.language}/about`}>
                {t("description.part1.mainPage.headerAbout")}
              </Link>
            </li>
            <li>
              <Link to={`/${i18n.language}/service`}>
                {t("description.part1.mainPage.headerServ")}
              </Link>
            </li>

            <li>
              <Link to={`/${i18n.language}/contact`}>
                {t("description.part1.mainPage.headerContact")}
              </Link>
            </li>
          </ul>
        )}
        <div className="lang">
          <p className={css.languageH} onClick={cahangeEn}>
            ENG
          </p>
          <p className={css.languageH} onClick={cahangeUkr}>
            УКР
          </p>
          <div className="iconWrap">
            <BsSun className="icon" />
          </div>
        </div>
      </nav>
    </header>
  );
}
