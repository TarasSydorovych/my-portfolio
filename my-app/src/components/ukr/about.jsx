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

export default function AboutUkr({ t }) {
  return (
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
  );
}
