import React from "react";
import ServicesHero from "../ServicesHero/ServicesHero";
import servicesLeadGen1 from "/servicesLeadGen1.gif";
import servicesLeadGen2 from "/servicesLeadGen2.jpg";
import servicesLeadGen3 from "/servicesLeadGen3.jpg";
import servicesLeadGen4 from "/servicesLeadGen4.jpg";
import servicesLeadGen5 from "/servicesLeadGen5.jpg";
import HCHelpWrapper from "../../Specilization/HCHelp/HCHelpWrapper";
import HCHelpOne from "../../Specilization/HCHelp/HCHelpOne";
import HCHelpTwo from "../../Specilization/HCHelp/HCHelpTwo";
import services from './../../components/Specialization/ServicesData';
import Specialization from "../../components/Specialization/Specialization";

const ServicesLG = () => {
  return (
    <div>
      <ServicesHero
        topTitle="LEAD GENERATION"
        desc="Attract, nurture and close more deals with a lead generation pipeline geared for success. From B2B to patient acquisition, high volume to high value. We operate in niche specialisations to drive performance and deliver sales-qualified leads in spades. Outperform the competition, scale your lead flow and gain compound sustainable growth with the #1 lead generation agency."
        btn1="Increase Lead Volume"
        btn2="Strategy"
        btn3="Better Quality Leads"
        btn4 = "Low COnversion Rate"
        btn5 = "Lead Nurturing"
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="INCREASE LEAD VOLUME"
          desc="Want more leads? Competing in a crowded market? Exhausted your lead pool? Generate more sales-qualified leads with a proven system that attracts those ready to sign on the dotted line. High volume, high value and higher conversions."
          img={servicesLeadGen1}
        />
        <HCHelpTwo
          title="STRATEGY"
          desc="Your foundation for future growth. Identify opportunities, mitigate risks and stay ahead of the competition with a multi-channel lead generation strategy that delivers measurable results."
          img={servicesLeadGen2}
        />
        <HCHelpOne
          title="BETTER QUALITY LEADS"
          desc="Tied up with unqualified leads? Save resources and budget by targeting and qualifying prospects effectively. Our proven strategies cut out the time wasters to grow your sales funnel with sales-qualified leads."
          img={servicesLeadGen3}
        />
        <HCHelpTwo
          title="LOW CONVERSION RATE"
          desc="Generate demand and increase sales with a lead flow that cuts through the noise and responds to seasonality, changing market and consumer needs. Find out how."
          img={servicesLeadGen4}
        />
        <HCHelpOne
          title="LEAD NURTURING"
          desc="Engage, educate and deliver value at every stage of your customer buying journey and watch your customer lifetime value grow ten-fold. We can show you how."
          img={servicesLeadGen5}
        />
      </HCHelpWrapper>

      <h1
        id="howWeHelp"
        style={{
          margin: "40px",
          color: "#222222",
          fontSize: "50px",
          fontWeight: "bolder",
        }}
      >
        HOW WE CAN <br />
        <span style={{ color: "#0014A5" }}>HELP.</span>
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

export default ServicesLG;
