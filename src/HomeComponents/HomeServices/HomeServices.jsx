import React from "react";
import styles from "./HomeServices.module.css";
import services from "../../components/Specialization/ServicesData";
import Specialization from "../../components/Specialization/Specialization";

const HomeServices = (props) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.HomeServices}>
      <div className={styles.HomeServicesTop}>
        <div className={styles.HomeServicesTop_content}>
          <h1>EXPERTISE YOU CAN TRUST.</h1>
          <br />
          <span>INNOVATIVE SOLUTIONS. EXCEPTIONAL RESULTS.</span>
          <p>EXPERIANCE EXCELLENCE SERVICE BY SERVICE</p>
          <button onClick={() => scrollToSection("servicesSection")}>
            Browse
          </button>
        </div>
      </div>
      <div className={styles.HomeServicesBottom} id="servicesSection">
        <Specialization  data={services} title={"SERVICES."}/>
      </div>
    </div>
  );
};

export default HomeServices;
