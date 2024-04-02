import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="mainContainer_services_top_header">
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
