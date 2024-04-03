import React from "react";
import RTOHelp1 from "/RTOHelp1.webp";
import RTOHelp2 from "/RTOHelp2.webp";
import RTOHelp3 from "/RTOHelp3.webp";
import RTOHelp4 from "/RTOHelp4.webp";
import HCHero from "../HCHero/HCHero";
import HCBottom from "../HCBottom/HCBottom";
import HCHelpOne from "../HCHelp/HCHelpOne";
import HCHelpTwo from "../HCHelp/HCHelpTwo";
import HCStats from "../HCStats/HCStats";
import HCHelpWrapper from "../HCHelp/HCHelpWrapper";
import Niches from "../NICHES/Niches";
import Specialization from "../../components/Specialization/Specialization";
import services from './../../components/Specialization/ServicesData';
import RTONiches from './../NICHES/RTONiches';


const RTOHome = () => {
  return (
    <div className="HCHome">
      <HCHero
        topTitle="RTO MARKETING SPECIALISTS."
        desc="Attract more students with our lead generation and growth strategies."
      />
      <HCBottom
        desc="RTO education is a field where students are spoilt for choice. Australia has hundreds of providers across almost every category. Having sharp marketing that positions your brand and generates leads is not an option in today's education landscape - it's essential.

        We have extensive experience in lead generation and growth strategies for both private fee and VET RTOs. Find out how we can help put your courses and brand in front of more students and turn a profit at scale."
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="LEAD GENERATION"
          desc="Generate enrolments at scale with our unique lead generation system for Registered Training Organisations. We work with both private fee and VET clients at a national level to attract local and international students."
          img={RTOHelp1}
        />
        <HCHelpTwo
          title="BRAND AWARENESS"
          desc="Brand awareness is critical for RTO's in today's market. Students what to know and trust the organisation they're signing up to. Particularly when a course is private fee funded. Build greater brand awareness and outperform your competitors."
          img={RTOHelp2}
        />

        <HCHelpOne
          title="STRATEGY"
          desc="The foundation for future growth. We take a whole of business approach to analyse business performance, identify opportunities and deliver measurable results."
          img={RTOHelp3}
        />
        <HCHelpTwo
          title="CONVERSION RATE OPTIMISATION"
          desc="Conversion rate optimisation (CRO) is often an overlooked and undervalued aspect to RTO marketing. When ever cent of your marketing budget counts, CRO is a must, not a nice to have."
          img={RTOHelp4}
        />
      </HCHelpWrapper>
      <HCStats
        s1="19%"
        t1="Higher Click-Through Rate Than Education Industry Standard"
        s2="7%"
        t2="Higher Than Average Click-Through Rate On #1 Competitors Brand Name Searches On Google."
        s3="4X"
        t3="Lower Cost Per Impression For Premium Display Placement"
      />
      <Niches data={RTONiches} />
      <Specialization data={services} />
    </div>
  );
};

export default RTOHome;
