import React from "react";
import ServicesHero from "../ServicesHero/ServicesHero";
import HCHelpWrapper from "../../Specilization/HCHelp/HCHelpWrapper";
import HCHelpOne from "../../Specilization/HCHelp/HCHelpOne";
import HCHelpTwo from "../../Specilization/HCHelp/HCHelpTwo";
import services from './../../components/Specialization/ServicesData';
import Specialization from "../../components/Specialization/Specialization";
import ServicesHighGrowth1 from "/ServicesHighGrowth1.jpg"
import ServicesHighGrowth2 from "/ServicesHighGrowth2.jpg"
import ServicesHighGrowth3 from "/ServicesHighGrowth3.jpg"
import ServicesHighGrowth4 from "/ServicesHighGrowth4.jpg"
import ServicesHighGrowth5 from "/ServicesHighGrowth5.jpg"

const ServicesHighGrowth = () => {
  return (
    <div>
      <ServicesHero
        topTitle="HIGH GROWTH"
        desc="Every business owner dreams of rapid expansion. While others tout growth hacking or too-good-to-be-true tactics, we subscribe to building long-term value without sacrificing short-term goals.

        As the preferred growth partner for national brands and local legends, we have time in the game and proven methodologies that generate measurable results. Whether you're bootstrapping or raising capital, stay ahead of the competition and build your legacy with our strategies for sustainable, accelerated high growth."
        btn1="REVENUE GROWTH"
        btn2="LEAD GENERATION"
        btn3 = "BUSINESS GROWTH STRATEGY"
        btn4 = "CLIENT ACQUISITION"
        btn5= "SCALING"
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="REVENUE GROWTH"
          desc="Your growth shouldn't come at the cost of your bottom line. Maximise your performance from top-of-funnel down to switch your business into a revenue-generating machine. We'll show you how."
          img={ServicesHighGrowth1}
        />
        <HCHelpTwo
          title="LEAD GENERATION"
          desc="Attract sales-qualified leads at scale with a high growth strategy geared for success. We help businesses optimise their sales funnel to significantly increase performance and profits."
          img={ServicesHighGrowth2}
        />
        <HCHelpOne
          title="BUSINESS GROWTH STRATEGY"
          desc="Build for the future, reap the rewards today. We do the groundwork for brands to achieve optimal performance at every scale and growth phase. Become a business powerhouse with the help of our digital performance experts."
          img={ServicesHighGrowth3}
        />
        <HCHelpTwo
          title="CLIENT ACQUISITION"
          desc="Want to increase client volume and value? Grow acquisitions and revenue with a high-performing strategy that qualifies and nurtures prospects efficiently and effectively."
          img={ServicesHighGrowth4}
        />
        <HCHelpOne
          title="SCALING"
          desc="Know when and where to invest with our proven linear scaling model. Increase conversions, gain predictable compound returns and achieve exponential growth. We'll show you how."
          img={ServicesHighGrowth5}
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

export default ServicesHighGrowth;
