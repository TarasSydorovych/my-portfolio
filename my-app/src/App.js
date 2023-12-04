import { Routes, Route } from "react-router-dom";

import ContactUkr from "./components/ukr/contact";
import Chat from "./components/chat/chat";
import Ukr from "./components/ukr/ukr";

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
      <Routes>
        <Route path="/" element={<Ukr />} />
        <Route path="/en" element={<Ukr />} />
        <Route path="/ua" element={<Ukr />} />
        <Route path="/service" element={<Servise />} />
        <Route path="/landing" element={<AboutLanding />} />
        <Route path="/business" element={<Bussines />} />
        <Route path="/store" element={<OnlineStore />} />
        <Route path="/app" element={<WebApp />} />
        <Route path="/crm" element={<Crm />} />
        <Route path="/design" element={<AboutDesign />} />
        <Route path="/contact" element={<ContactUkr />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage />} />

        <Route path="/sitemap" element={<SiteMap />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Chat />
    </div>
  );
}

export default App;
