import React from "react";
import FinancialServiceHelp1 from "/FinancialServiceHelp1.webp";
import FinancialServiceHelp2 from "/FinancialServiceHelp2.png";
import FinancialServiceHelp3 from "/FinancialServiceHelp3.jpg";
import FinancialServiceHelp4 from "/FinancialServiceHelp4.webp";
import FinancialServiceHelp5 from "/FinancialServiceHelp5.jpg";
import HCHero from "../HCHero/HCHero";
import HCBottom from "../HCBottom/HCBottom";
import HCHelpOne from "../HCHelp/HCHelpOne";
import HCHelpTwo from "../HCHelp/HCHelpTwo";
import HCStats from "../HCStats/HCStats";
import HCHelpWrapper from "../HCHelp/HCHelpWrapper";
import Specialization from "../../components/Specialization/Specialization";
import services from "./../../components/Specialization/ServicesData";

const FinancialServicesHome = () => {
  return (
    <div className="HCHome">
      <HCHero
        topTitle="FINANCIAL SERVICES"
        desc="Big bank, small bank, wealth management, we love money."
      />
      <HCBottom
        desc="
        We understand the unique dynamics of the finance and accounting industry and develop tailored marketing strategies to help finance professionals like you stand out and attract valuable new clients. With our deep understanding of the financial services landscape, we ensure that our marketing efforts align with the industry's regulations and best practices, and with our guidance, you can effectively raise your profile, expand your client base, and achieve your business goals in a competitive market."
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="CLIENT ACQUISITION"
          desc="Lead generation for high value clients with long-term potential, we have the knowledge and experience in all areas of finance to scale your lead flow and maximise lifetime client value."
          img={FinancialServiceHelp1}
        />
        <HCHelpTwo
          title="BRAND AWARENESS"
          desc="Build a strong brand presence and gain a competitive advantage with digital advertising strategies proven to generate results."
          img={FinancialServiceHelp2}
        />

        <HCHelpOne
          title="RECRUITMENT"
          desc="We will help you become a brand of attraction as the employer of choice for the right type of talent."
          img={FinancialServiceHelp3}
        />
        <HCHelpTwo
          title="NOT ENOUGH TIME"
          desc="Our specialists and analysts work, so you don't have to. Save time and energy by appointing a team of digital advertising experts, and never entertain the idea of recruiting for in-house marketers again."
          img={FinancialServiceHelp4}
        />
        <HCHelpOne
          title="STRATEGY"
          desc="The foundation for future growth. We take a whole of business approach to analyse business performance, identify opportunities and deliver measurable results."
          img={FinancialServiceHelp5}
        />
      </HCHelpWrapper>
      <HCStats
        s1="46%"
        t1="Lower Cost Per Click On Meta Than Finance Industry Standard."
        s2="14%"
        t2="Lower Cost Per Lead On Meta Compared To Average Cost Per Lead Price."
        s3="81%"
        t3="Growth In Website Traffic To Individual Branch Page."
        s4="7.6%"
        t4="Increase Month On Month In Social Follower Growth."
      />
      <Specialization data={services} />
    </div>
  );
};

export default FinancialServicesHome;
