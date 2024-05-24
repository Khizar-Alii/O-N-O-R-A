import React from "react";
import GovtPoliticalHelp1 from "/GovtPoliticalHelp1.webp";
import GovtPoliticalHelp2 from "/GovtPoliticalHelp2.webp";
import GovtPoliticalHelp3 from "/GovtPoliticalHelp3.webp";
import GovtPoliticalHelp4 from "/GovtPoliticalHelp4.webp";
import GovtPoliticalHelp5 from "/GovtPoliticalHelp5.webp";
import HCHero from "../HCHero/HCHero";
import HCBottom from "../HCBottom/HCBottom";
import HCHelpOne from "../HCHelp/HCHelpOne";
import HCHelpTwo from "../HCHelp/HCHelpTwo";
import HCStats from "../HCStats/HCStats";
import HCHelpWrapper from "../HCHelp/HCHelpWrapper";
import Niches from "../NICHES/Niches";
import Specialization from "../../components/Specialization/Specialization";
import services from "./../../components/Specialization/ServicesData";
import GovtPoliticalNiches from "../NICHES/GovtPoliticalNiches";

const GovtPoliticalHome = () => {
  return (
    <div className="HCHome">
      <HCHero
        topTitle="GOVERNMENT & POLITICAL ADVERTISING SPECIALISTS"
        desc="We believe in change for the better."
      />
      <HCBottom
        desc="We believe in change for the better. Campaign development is an essential tool to gain influence and create behavioural or policy change. We work with registered lobbyists, federal or state government departments, statutory bodies and local council to create positive outcomes.

        With data analysis and AI technology, our team of digital experts take the time to understand the motivations of your stakeholders and wider community. We apply a systematic approach to social marketing to generate engagement and campaign to make a difference."
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="BRAND AWARENESS"
          desc="Be seen, be heard, cause change. No matter where you sit in the ecosystem of government or politics, we can help your brand grow."
          img={GovtPoliticalHelp1}
        />
        <HCHelpTwo
          title="CAMPAIGN STRATEGY"
          desc="Your campaign is only as good as the strategy behind in. Strategy is the intersection between objective, data and human psychology. We live for change."
          img={GovtPoliticalHelp2}
        />

        <HCHelpOne
          title="DATA INSIGHTS"
          desc="Dive deeper, get the insights to give your campaign super powers. We have access to first, second and third party data that your competitors can only dream about."
          img={GovtPoliticalHelp3}
        />
        <HCHelpTwo
          title="DIGITAL ADVERTISING"
          desc="Generate more leads, votes and impressions with digital advertising. We specialise in government and political advertising across Meta, Google and Programmatic platforms."
          img={GovtPoliticalHelp4}
        />
        <HCHelpOne
          title="MEDIA BUYING"
          desc="Got an election coming up or a cause that needs pushing. Buy all your media through one convenient platform with Onora."
          img={GovtPoliticalHelp5}
        />
      </HCHelpWrapper>
      <HCStats
        s1="11X"
        t1="Lower Cost Per Lead On Facebook For Newsletter Subscriber Growth."
        s2="22%"
        t2="Longer Average Session Duration On Website Due To Highly Qualified Ad Audiences."
        s3="33%"
        t3="Increase In Social Page Growth."
      />
      <Niches data={GovtPoliticalNiches} />
      <Specialization data={services} />
    </div>
  );
};

export default GovtPoliticalHome;
