import React from "react";
import EcommerceHelp1 from "/EcommerceHelp1.webp";
import EcommerceHelp2 from "/EcommerceHelp2.webp";
import EcommerceHelp3 from "/EcommerceHelp3.webp";
import EcommerceHelp4 from "/EcommerceHelp4.webp";
import EcommerceHelp5 from "/EcommerceHelp5.webp";
import EcommerceHelp6 from "/EcommerceHelp6.webp";
import HCHero from "../HCHero/HCHero";
import HCBottom from "../HCBottom/HCBottom";
import HCHelpOne from "../HCHelp/HCHelpOne";
import HCHelpTwo from "../HCHelp/HCHelpTwo";
import HCStats from "../HCStats/HCStats";
import HCHelpWrapper from "../HCHelp/HCHelpWrapper";
import Niches from "../NICHES/Niches";
import Specialization from "../../components/Specialization/Specialization";
import services from './../../components/Specialization/ServicesData';
import EcommerceNiches from "../NICHES/EcommerceNiches";

const EcommerceHome = () => {
  return (
    <div className="HCHome">
      <HCHero
        topTitle="ECOMMERCE SPECIALISTS"
        desc="Scale, grow, scale, repeat."
      />
      <HCBottom
        desc="In a sector that's at mercy of consumer trends and ever-changing expectations, it takes a dynamic marketing strategy to own your space. Calculating how to show up where your customers hang out with exactly what they're looking for takes a true understanding of what makes your target market tick. Our team of experienced digital marketing experts are here to help you with that.

        Data is our love language. Let's work together to create a strategy to grow your brand based on consumer insights, future-thinking technology and a creative direction that resonates. We are the precursor to significant lead generation, conversions and creating a memorable customer experience.
        
        Unbox a customer experience that converts."
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="SCALING UP"
          desc="Your growth shouldn't come at the cost of margin. We are the long-term growth partner for ecommerce brands looking to scale and generate revenue beyond eight figures."
          img={EcommerceHelp1}
        />
        <HCHelpTwo
          title="CONVERSION RATE OPTIMISATION"
          desc="Traffic problem or conversion issue? Optimise your funnel, increase customer lifetime value and generate the numbers for long-term growth."
          img={EcommerceHelp2}
        />

        <HCHelpOne
          title="REVENUE GROWTH"
          desc="Remain competitive without impacting sales. We have the proven digital advertising strategies to increase customer retention rates and generate consistent, profitable revenue."
          img={EcommerceHelp3}
        />
        <HCHelpTwo
          title="ROAS DROPPED"
          desc="Outdated ads tactics won't work in today's market. Drive targeted traffic and increase conversions to maximise every dollar and generate above market return on ad spend."
          img={EcommerceHelp4}
        />

        <HCHelpOne
          title="ALWAYS DISCOUNTING"
          desc="You don't need to sacrifice margin for short-term gain. Build long-term brand equity and increase average order value to achieve industry leading results. We'll show you how."
          img={EcommerceHelp5}
        />
        <HCHelpTwo
          title="STRATEGY"
          desc="The foundation for future growth. We take a whole of business approach to analyse business performance, identify opportunities and deliver measurable results."
          img={EcommerceHelp6}
        />
      </HCHelpWrapper>
      <HCStats
        s1="40%"
        t1="Year On Year Increase In Google Conversion Value 3 Years In A Row"
        s2="6.3"
        t2="Average ROAS From Google Shopping Campaigns"
        s3="55%"
        t3="Higher Click-Through Rate On Top Of Funnel Meta Advertising Than Retail Industry Standard"
        s4 = "27%"
        t4 = "Lower Cost Per Click On Meta Than Retail Industry Standard"
      />
      <Niches data={EcommerceNiches} />
      <Specialization data={services} />
    </div>
  );
};

export default EcommerceHome;
