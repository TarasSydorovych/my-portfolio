import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  Router,
  useParams,
  Outlet,
} from "react-router-dom";

import ContactUkr from "./components/ukr/contact";
import Chat from "./components/chat/chat";
import Ukr from "./components/ukr/ukr";
import { I18nextProvider, useTranslation } from "react-i18next";

import { useEffect } from "react";
import AboutLanding from "./components/landing/aboutLanding";
import Servise from "./components/service/service";
import Bussines from "./components/bussines/aboutLanding";
import OnlineStore from "./components/onlineStore/aboutLanding";
import WebApp from "./components/webApp/aboutLanding";
import Crm from "./components/crm/aboutLanding";
import AboutUs from "./components/aboutUs/aboutUs";
import { useLocation } from "react-router-dom";
import NotFound from "./components/404/notFound";
import Blog from "./components/blog/blog";
import BlogPage from "./components/blogPage/blogPage";
import AddBlogPost from "./components/admin/admin";
import SiteMap from "./components/siteMap/siteMap";
import AboutDesign from "./components/design/aboutLanding";

function App() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // useEffect(() => {
  //   ReactGA.initialize(TRACKING_ID);
  //   ReactGA.send({
  //     hitType: "pageview",
  //     page: `${window.location.pathname + window.location.search}`,
  //   });
  // });
  function LanguagePath() {
    const { i18n } = useTranslation();
    const { lang } = useParams();
    const navigate = useNavigate();
    const curPath = location.pathname;
    useEffect(() => {
      if (lang && i18n.resolvedLanguage !== lang) {
        if (i18n.options.fallbackLng.includes(lang)) {
          i18n.changeLanguage(lang);
        } else {
          navigate("/" + i18n.resolvedLanguage + curPath, { replace: true });
        }
      }
    }, [lang]);
    return <Outlet />;
  }
  return (
    <div>
      <I18nextProvider i18n={i18n}>
        <Routes>
          {/* Маршрут для переадресації кореневого шляху до /ua або /en в залежності від поточної мови */}

          <Route path="/">
            <Route index element={<Ukr />} />

            <Route path=":lang" element={<LanguagePath />}>
              {/* Основні маршрути для кожної мови */}
              <Route index element={<Ukr />} />
              <Route path={`landing`} element={<AboutLanding />} />
              <Route path="service" element={<Servise />} />
              <Route path="business" element={<Bussines />} />
              <Route path="store" element={<OnlineStore />} />
              <Route path="app" element={<WebApp />} />
              <Route path="crm" element={<Crm />} />
              <Route path="design" element={<AboutDesign />} />
              <Route path="contact" element={<ContactUkr />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:id" element={<BlogPage />} />

              {/* Додаткові маршрути для всіх мов */}
              <Route path="sitemap" element={<SiteMap />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>
        </Routes>
      </I18nextProvider>

      <Chat />
    </div>
  );
}

export default App;
