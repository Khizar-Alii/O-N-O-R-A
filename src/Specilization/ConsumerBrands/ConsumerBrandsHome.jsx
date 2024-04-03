import React from "react";
import ConsumerBrandHelp1 from "/ConsumerBrandHelp1.webp";
import ConsumerBrandHelp2 from "/ConsumerBrandHelp2.webp";
import ConsumerBrandHelp3 from "/ConsumerBrandHelp3.webp";
import ConsumerBrandHelp4 from "/ConsumerBrandHelp4.webp";
import ConsumerBrandHelp5 from "/ConsumerBrandHelp5.webp";
import ConsumerBrandHelp6 from "/ConsumerBrandHelp6.webp";
import HCHero from "../HCHero/HCHero";
import HCBottom from "../HCBottom/HCBottom";
import HCHelpOne from "../HCHelp/HCHelpOne";
import HCHelpTwo from "../HCHelp/HCHelpTwo";
import HCStats from "../HCStats/HCStats";
import HCHelpWrapper from "../HCHelp/HCHelpWrapper";
import Niches from "../NICHES/Niches";
import Specialization from "../../components/Specialization/Specialization";
import services from './../../components/Specialization/ServicesData';
import ConsumerBrandsNiches from './../NICHES/ConsumerBrandsNiches';
const ConsumerBrandsHome = () => {
  return (
    <div className="HCHome">
      <HCHero
        topTitle="CONSUMER BRANDS MARKETING SPECIALISTS"
        desc="Drive consumer demand and outperform the market when others can't."
      />
      <HCBottom
        desc="Fast Moving Consumer Goods is a highly competitive landscape. Food, gardening, consumables, household, pet, health, wellbeing, electronics… FMCG never ends. We can help you drive consumer demand and outperform the market when others can't.

        Whether your brand is direct to the consumer or sold through retailers, we work with brands to maximise visibility, engagement and conversions. Our proven growth strategies move the needle to drive performance and deliver measurable results at scale. Find out how."
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="LOOKING TO GROW"
          desc="Maximise market share and generate substantial revenue with our systematic and proven approach. We are the growth partner for FMCG brands pursuing long-term, sustainable growth."
          img={ConsumerBrandHelp1}
        />
        <HCHelpTwo
          title="BRAND AWARENESS"
          desc="From food to gardening, every FMCG brand needs to dominate their category to stay at top of mind. We'll make your brand the non-negotiable on every shopping list."
          img={ConsumerBrandHelp2}
        />

        <HCHelpOne
          title="DRIVE CONSUMER DEMAND"
          desc="Create urgency, drive demand and gain the consumer-base or profitable retailer partnerships your brand is looking for. Become a brand of attraction and retain customer attention with our help."
          img={ConsumerBrandHelp3}
        />
        <HCHelpTwo
          title="D2C STRATEGY"
          desc="Drive direct-to-consumer sales, increase consumer loyalty and generate year-on-year growth. We specialise in targeted, conversion-focused digital advertising strategies that build D2C revenue, profitable and sustainably."
          img={ConsumerBrandHelp4}
        />

        <HCHelpOne
          title="D2B STRATEGY"
          desc="We work with clients stocked in major retailers and department stores nationwide including Woolworths, Bunnings, Coles, Kmart, Myer and David Jones. Whether you are driving customers in-store, or trying to pick up new trade or wholesale accounts, we have the proven strategies to make it happen."
          img={ConsumerBrandHelp5}
        />
        <HCHelpTwo
          title="PERFORMANCE STRATEGY"
          desc="The foundation for future growth. We take a whole of business approach to analyse business performance, identify opportunities and deliver measurable results."
          img={ConsumerBrandHelp6}
        />
      </HCHelpWrapper>
      <HCStats
        s1="400%"
        t1="Instagram Follower Growth Over 3 Years."
        s2="36%"
        t2="Lower Cost Per Facebook Page Like Than Consumer Goods Industry Standard."
        s3="40X"
        t3="Lower Average Cost Per Lead For Newsletter Subscriber Growth On Meta."
      />
      <Niches data={ConsumerBrandsNiches} />
      <Specialization data={services} />
    </div>
  );
};

export default ConsumerBrandsHome;
