import React from "react";
import "./HeroSection.css";
import onoraHero from "../../../public/onoraHero.mp4"

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="mainContainer_services_top_header">
      <div className="homeHeroVideoCotainer">
        <video autoPlay loop muted className="homeHeroVideo">
          {/* <source src="/HomeMain.mp4" type="video/mp4" /> */}
          <source src={onoraHero} type="video/mp4" />
        </video>
      </div>
      <div className="mainContainer_services_top_header_content">
        <h1 style={{ color: "#DADADA", textTransform: "uppercase" }}>
          THE #1 DIGITAL MARKETING PERFORMANCE AGENCY
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "80%",
          }}
        >
          <h3>
            STOP SEARCHING <br />
            START GROWING.
          </h3>

          <button
            onClick={() => scrollToSection("servicesSection")}
            className="getStarted"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
