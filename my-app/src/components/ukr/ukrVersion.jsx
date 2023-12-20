import { useState, useEffect, Suspense } from "react";

import "@fontsource/quicksand";
import "@fontsource/itim";
import { lazy } from "react";
import HeaderUkr from "../header/headerUkr";

import Form from "./form";
import Up from "../up";
import Footer from "../footer/footer";
import AboutUkr from "./about";
import Title from "./title";
import ServiseUkr from "./servise";
import BlockFirsInfo from "./blockFirsInfo";
import GetTotch from "../service/getTotch";
import BlockSecondInfo from "./blockSecondInfo";
export default function UkrVersion({ t }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handlscroll = () => {
      if (window.scrollY > 640) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    document.addEventListener("scroll", handlscroll);
    return () => {
      document.removeEventListener("scroll", handlscroll);
    };
  }, []);

  return (
    <>
      <HeaderUkr t={t} />
      <Title t={t} />
      <a name="prodList"></a>
      <ServiseUkr t={t} />
      <AboutUkr t={t} />
      <BlockFirsInfo t={t} />
      <GetTotch t={t} />
      <BlockSecondInfo t={t} />
      <section id="mailSend">
        <div className="containerInfo">
          <div className="columInfo">
            <div className="columInfoTe">
              <h2>{t("description.part1.mainPage.write")}</h2>
              <address>
                <p>
                  <strong>WebUi-Studio</strong>

                  <br />
                  {t("description.part1.mainPage.ind")}
                  <br />
                  {t("description.part1.mainPage.count")}
                </p>
              </address>
              <br />
              <br />
              <p>
                <strong>{t("description.part1.mainPage.phone")}:</strong>
                &nbsp;
                <a href="tel:+380937246193"> +380937246193</a>
                <br />
                <strong>Email:</strong>
                &nbsp;
                <a href="mailto:jakzadarom2@gmail.com">
                  webui.dev.studio@gmail.com
                </a>
                <br />
              </p>
            </div>
          </div>
          <div className="wrapper">
            <Form t={t} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
