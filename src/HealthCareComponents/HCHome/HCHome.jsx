import React from "react";
import HCHero from "../HCHero/HCHero";
import HCBottom from "../HCBottom/HCBottom";
import HCHelpOne from "../HCHelp/HCHelpOne";
import HCHelpTwo from "../HCHelp/HCHelpTwo";
import HCHelp1 from "/HCHelpOne1.jpg";
import HCHelp2 from "/HCHelpOne2.png";
import HCHelp3 from "/HCHelpOne3.jpg";
import HCHelp4 from "/HCHelpTwo1.jpg";
import HCHelp5 from "/HCHelpTwo2.jpg";
import HCHelp6 from "/HCHelpTwo3.jpg";
import HCHelpWrapper from "../HCHelp/HCHelpWrapper";
import HCStats from "../HCStats/HCStats";
import NICHESData from "./../NICHES/NICHESData";
import Niches from "../NICHES/Niches";
import Specialization from "../../components/Specialization/Specialization.jsx";
import services from "../../components/Specialization/ServicesData.jsx";

const HCHome = () => {
  return (
    <div className="HCHome">
      <HCHero />
      <HCBottom />
      <HCHelpWrapper>
        <HCHelpOne
          title="PATIENT ACQUISITION"
          desc="Fill your books with higher value, repeat patients. We’ve developed a systematic and proven approach to increase intake and maximise lifetime patient value. Find out how."
          img={HCHelp1}
        />
        <HCHelpTwo
          title="RECRUITMENT"
          desc="Strong patient base, but not enough practitioners? We help you become a brand of attraction as the employer of choice for the right type of talent."
          img={HCHelp2}
        />

        <HCHelpOne
          title="INCREASE REFERRALS"
          desc="Referrals are an integral part of every allied health and medical business, but having a referral strategy is often missed. Increase the volume of quality referrals with our proven digital advertising strategies."
          img={HCHelp3}
        />
        <HCHelpTwo
          title="NOT ENOUGH TIME"
          desc="Our specialists and analysts work, so you don't have to. Save time and energy by appointing a team of digital advertising experts, and never entertain the idea of recruiting for in-house marketers again."
          img={HCHelp4}
        />

        <HCHelpOne
          title="STRATEGY"
          desc="The foundation for future growth. We take a whole of business approach to analyse business performance, identify opportunities and deliver measurable results."
          img={HCHelp5}
        />
        <HCHelpTwo
          title="PRODUCTS & DEVICES"
          desc="Selling medical products and devices takes an expert marketer. Knowing the ins and outs of the TGA, advertising platform policies and market opportunities. We work with B2C and B2B products and device brands."
          img={HCHelp6}
        />
      </HCHelpWrapper>
      <HCStats />
      <Niches data={NICHESData} />
      <Specialization data={services} />
    </div>
  );
};

export default HCHome;
