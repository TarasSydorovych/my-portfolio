import HeaderEng from "../header/headerEng";
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

export default function AboutEng() {
  return (
    <>
      <Partisipals />
      <div className="containerHeader">
        <HeaderEng />
        <section id="about">
          <h3>About us</h3>
          <div className="about">
            <div className="block">
              <div className="minblock">
                <h2>01</h2>
              </div>
              <h1>Experience</h1>
              <p>
                {" "}
                We are a team of professionals focused on the maximum result for
                the client. We strive to create not just impressive, but the
                most useful and effective things. We work for results, because
                the success of our clients is our success!{" "}
              </p>
            </div>
            <div className="block">
              <div className="minblock">
                <h2>02</h2>
              </div>
              <h1>Technologies</h1>
              <p>
                {" "}
                We use advanced technologies in development. Thanks to this,
                your web application will be as fast as possible and visually
                attractive to the user. You can view the list of technologies
                below.
              </p>
            </div>
            <div className="block">
              <div className="minblock">
                <h2>03</h2>
              </div>
              <h1>Communication</h1>
              <p>
                We are fully open to any client's needs. Communication with the
                client takes place at all stages of development to achieve the
                maximum result. The motto of our company is a satisfied client,
                we are satisfied.
              </p>
            </div>
          </div>
          <div className="technologies">
            <h3>Technologies</h3>
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
