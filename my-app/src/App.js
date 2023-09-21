import { Routes, Route } from "react-router-dom";
import ContactEng from "./components/eng/contact";
import Eng from "./components/eng/eng";
import ContactUkr from "./components/ukr/contact";
import ServiceEng from "./components/eng/servise";
import Ukr from "./components/ukr/ukr";
import ServiseUkr from "./components/ukr/servise";
import AboutEng from "./components/eng/about";
import AboutUkr from "./components/ukr/about";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import AboutLanding from "./components/landing/aboutLanding";
import Servise from "./components/service/service";
import Bussines from "./components/bussines/aboutLanding";
import OnlineStore from "./components/onlineStore/aboutLanding";
import WebApp from "./components/webApp/aboutLanding";
import Crm from "./components/crm/aboutLanding";
import AboutUs from "./components/aboutUs/aboutUs";
import { useLocation } from "react-router-dom";

const TRACKING_ID = "G-YKDFRTP1T8";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({
      hitType: "pageview",
      page: `${window.location.pathname + window.location.search}`,
    });
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={<Ukr />} />
        <Route path="/service" element={<Servise />} />
        <Route path="/landing" element={<AboutLanding />} />
        <Route path="/business" element={<Bussines />} />
        <Route path="/store" element={<OnlineStore />} />
        <Route path="/app" element={<WebApp />} />
        <Route path="/crm" element={<Crm />} />
        <Route path="/contact" element={<ContactUkr />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
