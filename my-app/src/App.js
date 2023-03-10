
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


const TRACKING_ID = "G-YKDFRTP1T8";


function App() {

useEffect(() => {
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send({ hitType: "pageview", page: `${window.location.pathname + window.location.search}` });
})

  return (
    <div >
      
      <Routes>
      <Route path='/' element={<Eng/>}/>
      <Route path='/eng' element={<Eng/>}/>
      <Route path='/eng/contact' element={<ContactEng/>}/>
      <Route path='/eng/servise' element={<ServiceEng/>}/>
      <Route path='/ukr/contact' element={<ContactUkr/>}/>
      <Route path='/ukr/servise' element={<ServiseUkr/>}/>
      <Route path='/eng/about' element={<AboutEng/>}/>
      <Route path='/ukr/about' element={<AboutUkr/>}/>
      <Route path='/ukr' element={<Ukr/>}/>
     
     </Routes>

</div>
  );
}

export default App;
