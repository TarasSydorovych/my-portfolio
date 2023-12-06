import { Routes, Route, useNavigate, Navigate, Router } from "react-router-dom";

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

  return (
    <div>
      <I18nextProvider i18n={i18n}>
        <Routes>
          {/* Маршрут для переадресації кореневого шляху до /ua або /en в залежності від поточної мови */}
          <Route
            path="/"
            element={<Navigate to={`/${i18n.language}`} replace />}
          />
          <Route path="/:lang" element={<Ukr />} />
          {/* Основні маршрути для кожної мови */}
          <Route path={`/:lang/landing`} element={<AboutLanding />} />
          <Route path="/:lang/service" element={<Servise />} />
          <Route path="/:lang/business" element={<Bussines />} />
          <Route path="/:lang/store" element={<OnlineStore />} />
          <Route path="/:lang/app" element={<WebApp />} />
          <Route path="/:lang/crm" element={<Crm />} />
          <Route path="/:lang/design" element={<AboutDesign />} />
          <Route path="/:lang/contact" element={<ContactUkr />} />
          <Route path="/:lang/about" element={<AboutUs />} />
          <Route path="/:lang/blog" element={<Blog />} />
          <Route path="/:lang/blog/:id" element={<BlogPage />} />

          {/* Додаткові маршрути для всіх мов */}
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </I18nextProvider>

      <Chat />
    </div>
  );
}

export default App;
