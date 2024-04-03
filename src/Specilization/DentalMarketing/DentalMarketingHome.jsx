import React from "react";
import DentalMarketingHelp1 from "/DentalMarketingHelp1.jpg";
import DentalMarketingHelp2 from "/DentalMarketingHelp2.jpg";
import DentalMarketingHelp3 from "/DentalMarketingHelp3.jpg";
import DentalMarketingHelp4 from "/DentalMarketingHelp4.jpg";
import DentalMarketingHelp5 from "/DentalMarketingHelp5.jpg";
import HCHero from "../HCHero/HCHero";
import HCBottom from "../HCBottom/HCBottom";
import HCHelpOne from "../HCHelp/HCHelpOne";
import HCHelpTwo from "../HCHelp/HCHelpTwo";
import HCStats from "../HCStats/HCStats";
import HCHelpWrapper from "../HCHelp/HCHelpWrapper";
import Niches from "../NICHES/Niches";
import Specialization from "../../components/Specialization/Specialization";
import services from "./../../components/Specialization/ServicesData";
import DentalMarketingNiches from "../NICHES/DentalMarketingNiches";

const DentalMarketingHome = () => {
  return (
    <div className="HCHome">
      <HCHero
        topTitle="DENTAL MARKETING"
        desc="Fill your books, increase referrals and grow."
      />
      <HCBottom
        desc="Everyone has teeth, but only half of adult and teenage Australians visit the dentist for a regular check-up. Facing the Dentist's Dilemma of growing a book of routine vs. cosmetic and the rise of at-home treatments is forcing many in dental to compete in the new digital playing field to keep appointments flowing. And we speak that language.

        We have extensive experience in the healthcare sector and have built our reputation on seizing opportunities that generate growth. We understand the challenges, ever-changing industry regulations, the lack of patient education - and we have the proven strategies to set your business apart. Instil patient trust, confidence, and loyalty with the help of our performance experts."
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="PATIENT ACQUISITION"
          desc="Fill your books with higher value, repeat patients. We've developed a systematic and proven approach to increase intake and maximise lifetime patient value. Find out how."
          img={DentalMarketingHelp1}
        />
        <HCHelpTwo
          title="RECRUITMENT"
          desc="Strong patient base, but not enough practitioners? We help you become a brand of attraction as the employer of choice for the right type of talent."
          img={DentalMarketingHelp2}
        />

        <HCHelpOne
          title="INCREASED REFERRALS"
          desc="Referrals are an integral part of specialist dentistry and orthodontics practices, but having a referral strategy is often missed. Increase the volume of quality referrals with our proven digital advertising strategies."
          img={DentalMarketingHelp3}
        />
        <HCHelpTwo
          title="NOT ENOUGH TIME"
          desc="Our specialists and analysts work, so you don't have to. Save time and energy by appointing a team of digital advertising experts, and never entertain the idea of recruiting in-house marketers again."
          img={DentalMarketingHelp4}
        />
        <HCHelpOne
          title="STRATEGY"
          desc="The foundation for future growth. We take a whole of business approach to analyse business performance, identify opportunities and deliver measurable results."
          img={DentalMarketingHelp5}
        />
      </HCHelpWrapper>
      <HCStats
        s1="146%"
        t1="Increase In Total Website Users In 7 Days Post Campaign Launch."
        s2="48%"
        t2="Higher Google Conversion Rate Than Medical Industry Standard."
        s3="130K"
        t3="Over 130K Impressions On Google Display Per Month."
        s4="82%"
        t4="Lower Cost Per Conversion On Google Than Medical Industry Standard."
      />
      <Niches data={DentalMarketingNiches} />
      <Specialization data={services} />
    </div>
  );
};

export default DentalMarketingHome;
