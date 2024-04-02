import Home from "./components/Home/Home";
import HCHome from "./HealthCareComponents/HCHome/HCHome";

import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeServices from "./HomeComponents/HomeServices/HomeServices";
import HomeCaseStudies from "./HomeComponents/HomeCaseStudies/HomeCaseStudies";
import HomeAbout from "./HomeComponents/HomeAbout/HomeAbout";
import HomeContact from "./HomeComponents/HomeContact/HomeContact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<HomeServices />} />
        <Route path="/Case-Studies" element={<HomeCaseStudies />} />
        <Route path="/about" element={<HomeAbout />} />
        <Route path="/contact" element={<HomeContact />} />
        <Route
          path="/healthcare-and-allied-health-marketing"
          element={<HCHome />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
