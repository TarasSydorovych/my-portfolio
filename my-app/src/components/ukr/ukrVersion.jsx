import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCsswizardry,
  SiNodemon,
  SiMongodb,
  SiGithub,
} from "react-icons/si";
import "@fontsource/quicksand";
import "@fontsource/itim";
import { CardMedia, Card, Typography, Box } from "@mui/material";
import Partisipals from "../partisipals";
import { height } from "@mui/system";
import { Link } from "react-router-dom";
import HeaderUkr from "../header/headerUkr";
import sendEmail from "../../function/sendMessage";
import ContaktUs from "./contaktUs";
import Form from "./form";
import Up from "../up";
import Footer from "../footer/footer";
export default function UkrVersion({ t }) {
  const form = useRef();

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
    <div className="headerStyle">
      <ContaktUs t={t} />
      {show && <Up />}
      <Partisipals />
      <div className="containerHeader">
        <HeaderUkr t={t} />
        <section id="titleFirst">
          <div className="titleFirst">
            <h1> {t("description.part1.mainPage.mainTitle")}</h1>
          </div>
          <a href="#prodList">
            <button>{t("description.part1.mainPage.mainButStart")}</button>
          </a>
        </section>
        <a name="prodList"></a>
        <section id="productList">
          <h2>{t("description.part1.mainPage.mainOurServ")}</h2>
          <div className="productList">
            <div>
              <h1>{t("description.part1.mainPage.landTitle")}</h1>
              <h2>01</h2>
              <h3>Landing</h3>
              <p>{t("description.part1.mainPage.lendDesc")}</p>
            </div>
            <div>
              <h1>{t("description.part1.mainPage.businesTitile")}</h1>
              <h2>02</h2>
              <h3>Business</h3>
              <p>{t("description.part1.mainPage.businesDesc")}</p>
            </div>
            <div>
              <h1>{t("description.part1.mainPage.onlineTitile")}</h1>
              <h2>03</h2>
              <h3>Online</h3>
              <p>{t("description.part1.mainPage.onlineDesc")}</p>
            </div>
            <div>
              <h1>{t("description.part1.mainPage.crmInterTitile")}</h1>
              <h2>04</h2>
              <h3>CRM</h3>
              <p>{t("description.part1.mainPage.crmInterDesc")}</p>
            </div>
            <div>
              <h1>{t("description.part1.mainPage.designTitile")}</h1>
              <h2>05</h2>
              <h3>Design</h3>
              <p>{t("description.part1.mainPage.designDesc")}</p>
            </div>
            <div>
              <h1>{t("description.part1.mainPage.optimizaTitile")}</h1>
              <h2>06</h2>
              <h3>Optimization</h3>
              <p>{t("description.part1.mainPage.optimizaDesc")}</p>
            </div>
          </div>
        </section>

        <section id="about">
          <h3>{t("description.part1.mainPage.aboutUsTitle")}</h3>
          <div className="about">
            <div className="block">
              <div className="minblock">
                <h2>01</h2>
              </div>
              <h1>{t("description.part1.mainPage.aboutFirstTitle")}</h1>
              <p>{t("description.part1.mainPage.aboutFirst")}</p>
            </div>
            <div className="block">
              <div className="minblock">
                <h2>02</h2>
              </div>
              <h1>{t("description.part1.mainPage.aboutSecondTitle")}</h1>
              <p>{t("description.part1.mainPage.aboutSecond")}</p>
            </div>
            <div className="block">
              <div className="minblock">
                <h2>03</h2>
              </div>
              <h1>{t("description.part1.mainPage.aboutThreTitle")}</h1>
              <p>{t("description.part1.mainPage.aboutThre")}</p>
            </div>
          </div>
          <div className="technologies">
            <h3>{t("description.part1.mainPage.tech")}</h3>
            <a name="about"></a>
            <div className="techIcon">
              <SiHtml5 style={{ color: "#dd4b25" }} className="icon" />
              <SiCsswizardry style={{ color: "#254bdd" }} className="icon" />
              <SiJavascript style={{ color: "#efd81d" }} className="icon" />
              <SiReact style={{ color: "#5ed2f2" }} className="icon" />
              <SiRedux style={{ color: "#7248b6" }} className="icon" />
              <SiNodemon style={{ color: "#4e9543" }} className="icon" />
              <SiMongodb style={{ color: "#006548" }} className="icon" />

              <SiGithub style={{ color: "white" }} className="icon" />
            </div>
          </div>
        </section>
        <section id="mailSend">
          <div className="containerInfo">
            <div className="columInfo">
              <div className="columInfoTe">
                <h2>{t("description.part1.mainPage.write")}</h2>
                <address>
                  <p>
                    <strong>WebUi-Studio</strong>
                    <br />
                    {t("description.part1.mainPage.vul")}
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
      </div>
    </div>
  );
}
