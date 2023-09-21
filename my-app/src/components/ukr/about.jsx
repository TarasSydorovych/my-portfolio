import HeaderUkr from "../header/headerUkr";
import Partisipals from "../partisipals";

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
import Footer from "../footer/footer";

export default function AboutUkr() {
  return (
    <>
      <Partisipals />
      <div className="containerHeader">
        <HeaderUkr />
        <section id="about">
          <h3>Про нас</h3>
          <div className="about">
            <div className="block">
              <div className="minblock">
                <h2>01</h2>
              </div>
              <h1>Досвід</h1>
              <p>
                {" "}
                Ми команда професіоналів, націлена на максимальний результат для
                клієнта. Ми прагнемо створювати не просто вражаючі, а
                максимально корисні та ефективні речі. Ми працюємо на результат,
                адже успіх наших клієнтів – наш успіх!{" "}
              </p>
            </div>
            <div className="block">
              <div className="minblock">
                <h2>02</h2>
              </div>
              <h1>Технології</h1>
              <p>
                {" "}
                Ми використовуємо передові технології в розробці. Завдяки цьому
                ваш веб-додаток буде максимально швидким і візуально привабливим
                для користувача. Ви можете переглянути список технологій нижче.
              </p>
            </div>
            <div className="block">
              <div className="minblock">
                <h2>03</h2>
              </div>
              <h1>Комунікація</h1>
              <p>
                Ми повністю відкриті до будь-яких потреб клієнта. Спілкування з
                клієнтом відбувається на всіх етапах розробки для досягнення
                максимального результату. Девіз нашої компанії - задоволений
                клієнт, задоволені ми.
              </p>
            </div>
          </div>
          <div className="technologies">
            <h3>Технології</h3>
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
        <Footer />
      </div>
    </>
  );
}
