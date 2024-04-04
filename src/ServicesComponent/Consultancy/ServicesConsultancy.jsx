import React from "react";
import ServicesHero from "../ServicesHero/ServicesHero";
import HCHelpWrapper from "../../Specilization/HCHelp/HCHelpWrapper";
import HCHelpOne from "../../Specilization/HCHelp/HCHelpOne";
import HCHelpTwo from "../../Specilization/HCHelp/HCHelpTwo";
import services from './../../components/Specialization/ServicesData';
import Specialization from "../../components/Specialization/Specialization";
import ServicesConsultancy1 from "/ServicesConsultancy1.webp"
import ServicesConsultancy2 from "/ServicesConsultancy2.webp"
import ServicesConsultancy3 from "/ServicesConsultancy3.webp"
import ServicesConsultancy4 from "/ServicesConsultancy4.webp"
import ServicesConsultancy5 from "/ServicesConsultancy5.webp"


const ServicesConsultancy = () => {
  return (
    <div>
      <ServicesHero
        topTitle="CONSULTANCY"
        desc="Leverage the knowledge of our performance experts to become a formidable force in the market. We work with business leaders to align goals with long-term growth strategies driven by sales, marketing, financial and industry data.

        The best time to invest was yesterday. The next best time is today. Gain a competitive advantage, maximise revenue and scale for exponential growth with our help."
        btn1="SALES & MARKETING CONSULTING"
        btn2="REMOTE CMO"
        btn3 = "STRATEGY & PLANNING"
        btn4 = "CUSTOMER JOURNEY DEVELOPMENT"
        btn5= "DATA ANALYSIS & REPORTING"
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="SALES & MARKETING CONSULTING"
          desc="Optimise business performance with our strategic support over twelve months. In this process, we audit, analyse and overhaul all marketing and sales activities. Gain a comprehensive understanding of where your business is at and where it needs to be to gain sustainable long-term growth."
          img={ServicesConsultancy1}
        />
        <HCHelpTwo
          title="REMOTE CMO"
          desc="Gain strategic guidance and leadership from industry experts. We'll oversee all the sales and marketing activities to identify foreseeable issues or opportunities, drive growth and keep your business performing at its best."
          img={ServicesConsultancy2}
        />
        <HCHelpOne
          title="STRATEGY & PLANNING"
          desc="Achieve optimal performance at every scale and growth phase. We use data findings to inform a twelve-month sales and marketing strategy that defines all activities, media and KPIS. This becomes the blueprint for increasing your bottom line and achieving compounded year-on-year growth."
          img={ServicesConsultancy3}
        />
        <HCHelpTwo
          title="CUSTOMER JOURNEY DEVELOPMENT"
          desc="Every customer touchpoint has a direct impact on your business performance. We'll work with you to identify the key moments influencing purchase intent to increase conversions and deliver an unforgettable experience."
          img={ServicesConsultancy4}
        />
        <HCHelpOne
          title="DATA ANALYSIS & REPORTING"
          desc="We value transparency. Our experts analyse your sales and marketing data alongside financial and industry trends to anticipate changes in the business landscape. We use these findings to help you understand how your business performs against goals and industry benchmarks and make recommendations for future growth."
          img={ServicesConsultancy5}
        />
      </HCHelpWrapper>

      <h1
        style={{
          margin: "40px",
          color: "#222222",
          fontSize: "50px",
          fontWeight: "bolder",
        }}
      >
        EXPLORE <br />
        <span style={{ color: "#0014A5" }}>SERVICES.</span>
      </h1>
      <div
        style={{
          border: " 1px solid #222222",
          margin: " 0 40px",
        }}></div>
        <Specialization data={services} />
    </div>
  );
};

export default ServicesConsultancy;
