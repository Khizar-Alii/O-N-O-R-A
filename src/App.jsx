import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeServices from "./HomeComponents/HomeServices/HomeServices";
import HomeCaseStudies from "./HomeComponents/HomeCaseStudies/HomeCaseStudies";
import HomeAbout from "./HomeComponents/HomeAbout/HomeAbout";
import HomeContact from "./HomeComponents/HomeContact/HomeContact";
import HCHome from "./Specilization/HealthCareComponents/HCHome/HCHome.jsx";
import EducationHome from "./Specilization/Education/EducationHome.jsx";
import EcommerceHome from "./Specilization/Ecommerce/EcommerceHome.jsx";
import ConsumerBrandsHome from "./Specilization/ConsumerBrands/ConsumerBrandsHome.jsx";
import RTOHome from "./Specilization/RTO/RTOHome.jsx";
import SAASHome from "./Specilization/SAAS/SAASHome.jsx";
import LEGALHome from "./Specilization/LEGAL/LEGALHome.jsx";
import PropertyHome from "./Specilization/Property/PropertyHome.jsx";
import GovtPoliticalHome from "./Specilization/GovtPolitical/GovtPoliticalHome.jsx";
import DentalMarketingHome from "./Specilization/DentalMarketing/DentalMarketingHome.jsx";
import FinancialServicesHome from "./Specilization/FinancialServices/FinancialServicesHome.jsx";

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
          path="/specialisation/healthcare-and-allied-health-marketing"
          element={<HCHome />}
        />
        <Route path="/specialisation/education" element={<EducationHome />} />
        <Route path="/specialisation/ecommerce" element={<EcommerceHome />} />
        <Route
          path="/specialisation/consumer-brands-fmcg"
          element={<ConsumerBrandsHome />}
        />
        <Route path="/specialisation/rto" element={<RTOHome />} />
        <Route path="/specialisation/saas" element={<SAASHome />} />
        <Route path="/specialisation/legal" element={<LEGALHome />} />
        <Route path="/specialisation/property" element={<PropertyHome />} />
        <Route
          path="/specialisation/government-political"
          element={<GovtPoliticalHome />}
        />
        <Route
          path="/specialisation/dental-marketing"
          element={<DentalMarketingHome />}
        />
        <Route
          path="/specialisation/financial-services"
          element={<FinancialServicesHome />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
