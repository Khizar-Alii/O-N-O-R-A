import React from "react";
import SAASHelp1 from "/SAASHelp1.webp";
import SAASHelp2 from "/SAASHelp2.webp";
import SAASHelp3 from "/SAASHelp3.webp";
import SAASHelp4 from "/SAASHelp4.webp";
import HCHero from "../HCHero/HCHero";
import HCBottom from "../HCBottom/HCBottom";
import HCHelpOne from "../HCHelp/HCHelpOne";
import HCHelpTwo from "../HCHelp/HCHelpTwo";
import HCStats from "../HCStats/HCStats";
import HCHelpWrapper from "../HCHelp/HCHelpWrapper";
import Niches from "../NICHES/Niches";
import Specialization from "../../components/Specialization/Specialization";
import services from "./../../components/Specialization/ServicesData";
import SAASNiches from "./../NICHES/SAASNiches";

const SAASHome = () => {
  return (
    <div className="HCHome">
      <HCHero
        topTitle="SAAS MARKETING SPECIALISTS"
        desc="Scale, gain mass market adoption and achieve high growth."
      />
      <HCBottom
        desc="Software as a Service is a fiercely competitive space. Ease of accessibility to app and software development means new platforms are entering and disrupting the market at an unprecedented pace. When faced with the challenges of staying relevant, we help brands drive demand profitably and sustainably.

        Our data analysts and marketing experts are adept at the complexities of SaaS. As the #1 digital performance agency, we know what it takes to scale, gain mass market adoption and achieve high growth."
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="LEAD GENERATION"
          desc="Looking for mass market adoption or more high value, low volume niche clients? Gain serious traction with a proven lead generation formula using best-in-class performance marketing. We can show you how."
          img={SAASHelp1}
        />
        <HCHelpTwo
          title="USER ACQUISITION"
          desc="Eager to monetise your app with mass market adoption? Have a stack of member or subscriber data, but don't what to do with it? Generate sign-ups with a performance-focused strategy built to for long-term growth."
          img={SAASHelp2}
        />

        <HCHelpOne
          title="HIGH GROWTH"
          desc="Ready to scale up? Expand your market share by targeting the right audience at scale. Bring in an army of new users, raise capital and experience exponential growth with our full stack approach."
          img={SAASHelp3}
        />
        <HCHelpTwo
          title="STRATEGY"
          desc="The foundation for future growth. We take a whole of business approach to analyse business performance, identify opportunities and deliver measurable results."
          img={SAASHelp4}
        />
      </HCHelpWrapper>
      <HCStats
        s1="10X"
        t1="Lower Cost Per Impression On Premium Display Placement."
        s2="12%"
        t2="Increase In Google Search Conversion Rate."
        s3="16%"
        t3="Increase In Google Search Impression Share After Campaign Optimisation."
      />
      <Niches data={SAASNiches} />
      <Specialization data={services} />
    </div>
  );
};

export default SAASHome;
