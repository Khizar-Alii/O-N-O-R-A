import React from "react";
import LegalHelp1 from "/LegalHelp1.webp";
import LegalHelp2 from "/LegalHelp2.webp";
import LegalHelp3 from "/LegalHelp3.webp";
import LegalHelp4 from "/LegalHelp4.webp";
import LegalHelp5 from "/LegalHelp5.webp";
import HCHero from "../HCHero/HCHero";
import HCBottom from "../HCBottom/HCBottom";
import HCHelpOne from "../HCHelp/HCHelpOne";
import HCHelpTwo from "../HCHelp/HCHelpTwo";
import HCStats from "../HCStats/HCStats";
import HCHelpWrapper from "../HCHelp/HCHelpWrapper";
import Niches from "../NICHES/Niches";
import Specialization from "../../components/Specialization/Specialization";
import services from "./../../components/Specialization/ServicesData";
import LEGALNiches from './../NICHES/LEGALNiches';

const LEGALHome = () => {
  return (
    <div className="HCHome">
      <HCHero
        topTitle="LEGAL MARKETING SPECIALISTS"
        desc="Generate more leads, win more cases, grow those billings."
      />
      <HCBottom
        desc="Legal marketing requires industry experts. Just like you operate in a niche area of practice, so do we. From personal injury law to commercial, property to litigation, criminal defence to divorce, even wills and estates. We work with firms all over Australia each with their own niche.

        Lead generation and talent acquisition are the most common cases we take on. And like you, we're also competitive. Striving for our clients to be number one in their market. Our clients include both boutique and national firms. We take care of your marketing so you can focus on winning cases."
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="CLIENT ACQUISITION"
          desc="Lead generation for high value clients with long-term potential, high-net-worth or a wide scope. From criminal defence to property, commercial and conveying, we have the intimate knowledge and experience in all niche areas of law to scale your lead flow and maximise lifetime client value."
          img={LegalHelp1}
        />
        <HCHelpTwo
          title="BRAND AWARENESS"
          desc="Be known as the leading law firm in your niche. Build a strong brand presence and gain a competitive advantage with digital advertising strategies proven to generate results."
          img={LegalHelp2}
        />

        <HCHelpOne
          title="RECRUITMENT"
          desc="No shortage of cases, but not enough lawyers or clerks? We will help you become a brand of attraction as the employer of choice for the right type of talent."
          img={LegalHelp3}
        />
        <HCHelpTwo
          title="NOT ENOUGH TIME"
          desc="Our specialists and analysts work, so you don't have to. Save time and energy by appointing a team of digital advertising experts, and never entertain the idea of recruiting for in-house marketers again."
          img={LegalHelp4}
        />
        <HCHelpOne
          title="STRATEGY"
          desc="The foundation for future growth. We take a whole of business approach to analyse business performance, identify opportunities and deliver measurable results."
          img={LegalHelp5}
        />
      </HCHelpWrapper>
      <HCStats
        s1="53%"
        t1="Lower Cost Per Conversion On Google After Engaging Onora."
        s2="6X"
        t2="More Monthly Leads After Scaling Google Ad Account."
        s3="85%"
        t3="Higher Click Through Rates On Onora Copy Writing Updates To Google Search Text Ads."
        s4="50%"
        t4="Lower Cost Per Conversion On Google Than The Legal Industry Standard."
      />
      <Niches data={LEGALNiches} />
      <Specialization data={services} />
    </div>
  );
};

export default LEGALHome;
