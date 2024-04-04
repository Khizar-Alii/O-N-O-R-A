import React from "react";
import ServicesHero from "../ServicesHero/ServicesHero";
import HCHelpWrapper from "../../Specilization/HCHelp/HCHelpWrapper";
import HCHelpOne from "../../Specilization/HCHelp/HCHelpOne";
import HCHelpTwo from "../../Specilization/HCHelp/HCHelpTwo";
import services from './../../components/Specialization/ServicesData';
import Specialization from "../../components/Specialization/Specialization";
import ServicesEmailSmsMar1 from "/ServicesEmailSmsMar1.webp"
import ServicesEmailSmsMar2 from "/ServicesEmailSmsMar2.webp"
import ServicesEmailSmsMar3 from "/ServicesEmailSmsMar3.webp"
import ServicesEmailSmsMar4 from "/ServicesEmailSmsMar4.webp"
import ServicesEmailSmsMar5 from "/ServicesEmailSmsMar5.webp"
import ServicesEmailSmsMar6 from "/ServicesEmailSmsMar6.webp"

const ServicesEmailSmsMar = () => {
  return (
    <div>
      <ServicesHero
        topTitle="EMAIL AND SMS MARKETING"
        desc="Maximise returns and nurture customer relationships with email and SMS marketing. We create, deploy and manage highly effective email and SMS campaigns to increase engagement, generate leads and drive sales using the world's best marketing platforms.
        
        Leverage our proven approach to personalisation, automation and performance tracking to achieve sustainable business growth."
        btn1="FIRST PARTY DATA"
        btn2="DATABASE GROWTH"
        btn3 = "LEAD NURTURE SEQUENCES"
        btn4 = "SALES & PROMOTIONS"
        btn5= "VIP, LOYALTY & MEMBERSHIP PROGRAMS"
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="FIRST PARTY DATA"
          desc="Your results will only ever be good as they strategy behind them. Our Chief Investment Officer oversees all campaign strategies we deploy across Facebook and Instagram to ensure that every possible percentage point of ROAS is achieved. Having such a high level strategist direct your campaign is what makes AF different."
          img={ServicesEmailSmsMar1}
        />
        <HCHelpTwo
          title="DATABASE GROWTH"
          desc="Creative needs to stop thumbs, bend minds and induce a response. We have some of the sharpest brains in the business working at AF. Backed by data, delivered by the perfect combination of human talent and AI. Our advertising creative connects with your audience and converts."
          img={ServicesEmailSmsMar2}
        />
        <HCHelpOne
          title="LEAD NURTURE SEQUENCES"
          desc="You know when your advertising account manager is good at their job when your target audience receives ads and only assumes 'they're' listening in. Mind reading whilst not an official title at AF, our team is strong at targeting the right audience at the right time, they'll think they're in a permanent state of serendipity."
          img={ServicesEmailSmsMar3}
        />
        <HCHelpTwo
          title="SALES & PROMOTIONS"
          desc="First Party Data (FPD) is the collected data that you effectively own and can utilise in performance marketing. Unlike borrowing data by advertising on other platforms, having your own data is best in class. We put systems in place to collect and manage FPD, which in terms becomes your golden goose."
          img={ServicesEmailSmsMar4}
        />
        <HCHelpOne
          title="VIP, LOYALTY & MEMBERSHIP PROGRAMS"
          desc="For most industries, advertising with this social media megalith is essential for digital marketing. The platform is a powerful aggregate of data that enables us to create, test and distil your advertising down to the best performing campaigns based on engagement metrics, leads and conversions. It's a must-have for any business with a website."
          img={ServicesEmailSmsMar5}
        />
        <HCHelpTwo
          title="KLAVIYO & HUBSPOT"
          desc="Facebook's younger, visual-based twin. Instagram ads taps into the same suite of dynamic targeting tools to serve highly engaging advertising that leads Instagram users to see your feed, website or to shop your products - all without leaving the platform."
          img={ServicesEmailSmsMar6}
        />
      </HCHelpWrapper>

      <h1
        style={{
          margin: "40px",
          color: "#222222",
          fontSize: "50px",
          fontWeight: "bolder",
        }}
      >
        EXPLORE <br />
        <span style={{ color: "#0014A5" }}>SERVICES.</span>
      </h1>
      <div
        style={{
          border: " 1px solid #222222",
          margin: " 0 40px",
        }}></div>
        <Specialization data={services} />
    </div>
  );
};

export default ServicesEmailSmsMar;
