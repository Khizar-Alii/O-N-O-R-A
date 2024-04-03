import React from "react";
import PropertyHelp1 from "/PropertyHelp1.webp";
import PropertyHelp2 from "/PropertyHelp2.webp";
import PropertyHelp3 from "/PropertyHelp3.webp";
import PropertyHelp4 from "/PropertyHelp4.webp";
import HCHero from "../HCHero/HCHero";
import HCBottom from "../HCBottom/HCBottom";
import HCHelpOne from "../HCHelp/HCHelpOne";
import HCHelpTwo from "../HCHelp/HCHelpTwo";
import HCStats from "../HCStats/HCStats";
import HCHelpWrapper from "../HCHelp/HCHelpWrapper";
import Niches from "../NICHES/Niches";
import Specialization from "../../components/Specialization/Specialization";
import services from "./../../components/Specialization/ServicesData";
import PropertyNiches from './../NICHES/PropertyNiches';

const PropertyHome = () => {
  return (
    <div className="HCHome">
      <HCHero
        topTitle="PROPERTY MARKETING SPECIALISTS"
        desc="Growth strategies that will give your agency or project the competitive edge."
      />
      <HCBottom
        desc="We love property. We love project marketing. We're addicted to real estate. Our experience is extensive across lead generation, project sales, agency and agent marketing  and vendor paid advertising. We don't just talk the talk. We walk the walk. Our team has hands-on experience in both property development and agency life.

        Our clients include Australia's most well known brands and developers. From boutique to corporate juggernauts. Individual high performing agents to family owned offices. We work with them all. More importantly we speak your language. We know what OFI, VPA, RFI, GCI, GDV and even WTF mean."
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="LEAD GENERATION"
          desc="Attract potential vendors and buyers at scale. From residential and commercial to project marketing, we have intimate knowledge and experience in all niche areas of property to grow your lead flow."
          img={PropertyHelp1}
        />
        <HCHelpTwo
          title="BRAND AWARENESS"
          desc="Being top of mind for clients doesn't happen by accident. It takes a conscious effort to drive brand awareness. The bigger and better your brand, the more business you'll convert. Simple as that."
          img={PropertyHelp2}
        />

        <HCHelpOne
          title="BRAND POSITIONING"
          desc="Perception is everything. The positioning of your brand will dictate the type of enquiry you get, the capital you attract and the deals you do. It's why so many clients come to us to ensure they're positioned exactly how they want to be."
          img={PropertyHelp3}
        />
        <HCHelpTwo
          title="STRATEGY"
          desc="The foundation for future growth. We take a whole of business approach to analyse business performance, identify opportunities and deliver measurable results."
          img={PropertyHelp4}
        />
      </HCHelpWrapper>
      <HCStats
        s1="19%"
        t1="Lower Cost Per Click On Google Search Than Real Estate Industry Standard."
        s2="50%"
        t2="Lower Cost Per Click On Google Display Ads Than The Platform Average."
        s3="25X"
        t3="Lower Cost Per Impression For Premium Display Placement."
        s4="46%"
        t4="Lower Cost Per Conversion On Google Than Real Estate Industry Average."
      />
      <Niches data={PropertyNiches} />
      <Specialization data={services} />
    </div>
  );
};

export default PropertyHome;
