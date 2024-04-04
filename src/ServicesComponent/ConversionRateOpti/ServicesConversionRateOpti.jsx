import React from "react";
import ServicesHero from "../ServicesHero/ServicesHero";
import HCHelpWrapper from "../../Specilization/HCHelp/HCHelpWrapper";
import HCHelpOne from "../../Specilization/HCHelp/HCHelpOne";
import HCHelpTwo from "../../Specilization/HCHelp/HCHelpTwo";
import services from './../../components/Specialization/ServicesData';
import Specialization from "../../components/Specialization/Specialization";
import ServicesConversionRateOpti1 from "/ServicesConversionRateOpti1.jpg"
import ServicesConversionRateOpti2 from "/ServicesConversionRateOpti2.jpg"
import ServicesConversionRateOpti3 from "/ServicesConversionRateOpti3.jpg"
import ServicesConversionRateOpti4 from "/ServicesConversionRateOpti4.jpg"
import ServicesConversionRateOpti5 from "/ServicesConversionRateOpti5.png"


const ServicesConversionRateOpti = () => {
  return (
    <div>
      <ServicesHero
        topTitle="CONVERSION RATE OPTIMISATION"
        desc="Website or landing page not converting? Stop throwing lead generation strategies at the wall, hoping that something will stick. Maximise the effectiveness of your website or landing page with the help of our Conversion Rate Optimisation (CRO) analysts.

        We use data-driven insights and best-in-practice tools to identify conversion barriers and optimise pages for performance. We've worked with countless clients to turn their conversion issues into pages that turn a profit at scale. Find out how our growth strategies can help you."
        btn1="CONVERSION TRACKING & REPORTING"
        btn2="CUSTOMER JOURNEY"
        btn3 = "UX & UI"
        btn4 = "PERFORMANCE ANALYSIS"
        btn5= "SALES COPY"
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="CONVERSION TRACKING & REPORTING"
          desc="Know your numbers. We set up robust tracking systems to measure and analyse conversion metrics that align with your business goals. Measurable performance, measurable results."
          img={ServicesConversionRateOpti1}
        />
        <HCHelpTwo
          title="CUSTOMER JOURNEY"
          desc="UX (User Experience) and UI (User Interface) significantly impact conversion and bounce rates. We help brands anticipate customer behaviour to better inform their page design, improve the customer experience and increase engagement."
          img={ServicesConversionRateOpti2}
        />
        <HCHelpOne
          title="UX & UI"
          desc="Every customer touchpoint is an opportunity to engage and convert. From awareness to purchase, we analyse audience behaviour at each stage to ensure every data point is optimised for performance."
          img={ServicesConversionRateOpti3}
        />
        <HCHelpTwo
          title="PERFORMANCE ANALYSIS"
          desc="The key to growth is understanding your data. Our performance experts will conduct an in-depth analysis of your CRO data to identify opportunities, mitigate risks and help you maintain your path to sustainable, long-term growth."
          img={ServicesConversionRateOpti4}
        />
        <HCHelpOne
          title="SALES COPY"
          desc="Communicate your value in a language that resonates. Compelling and persuasive sales copy explains your product or service benefits in digestible, take-away portions. Impactful headlines, engaging descriptions and the call-to-action (CTA) are the only words between you and that conversion - make them count."
          img={ServicesConversionRateOpti5}
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

export default ServicesConversionRateOpti;
