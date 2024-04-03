import React from "react";
import HCHelp1 from "/HCHelpOne1.jpg";
import HCHelp2 from "/HCHelpOne2.png";
import HCHelp3 from "/HCHelpOne3.jpg";
import HCHelp4 from "/HCHelpTwo1.jpg";
import HCHelp5 from "/HCHelpTwo2.jpg";
import HCHelp6 from "/HCHelpTwo3.jpg";
import HCHero from "../../HCHero/HCHero.jsx"
import HCBottom from "../../HCBottom/HCBottom.jsx"
import HCHelpOne from "../../HCHelp/HCHelpOne.jsx"
import HCHelpTwo from "../../HCHelp/HCHelpTwo.jsx"
import HCStats from "../../HCStats/HCStats.jsx"
import HCHelpWrapper from './../../HCHelp/HCHelpWrapper';
import NICHESData from './../../NICHES/NICHESData';
import Specialization from './../../../components/Specialization/Specialization';
import services from './../../../components/Specialization/ServicesData';
import Niches from './../../NICHES/Niches';


const HCHome = () => {
  return (
    
    <div className="HCHome">
      
      <HCHero
        topTitle="HEALTHCARE & ALLIED HEALTH MARKETING SPECIALISTS"
        desc="Acquire more patients, recruit more talent, grow your billings."
      />
      <HCBottom
        desc="Healthcare & Allied Health marketing takes knowledge and experience. We work with over 100 medical and allied health brands and providers across general practice, dentistry, specialists, products and devices, occupational therapy, physiotherapy, NDIS, DVA and industry bodies.
        

        Connecting potential clients with your service offering is more efficient with the support of our team of digital marketing experts. We understand the challenges of regulations in your industry and can deliver strategies that respond to the ever-evolving health space while remaining respectful to your client's needs.

        
        Our people-first approach to digital marketing ensures you can speak directly to potential clients and provide them with an exceptional level of service that's both accessible and genuinely supportive. From patient and referral acquisition to communications and positioning, we manage it all with the care and professionalism the industry requires. We love working in medical and allied health. Not just because of the incredible people in the sector but the growth opportunities on offer."
      />
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
      <HCStats
        s1="146%"
        t1="Increase In Total Website Users In 7 Days Post Campaign Launch"
        s2="48%"
        t2="Higher Google Conversion Rate Than Medical Industry Standard"
        s3="130K"
        t3="Over 130K Impressions On Google Display Per Month"
        s4="82%"
        t4="Lower Cost Per Conversion On Google Than Medical Industry Standard"
      />
      <Niches data={NICHESData} />
      <Specialization data={services} />
    </div>
  );
};

export default HCHome;
