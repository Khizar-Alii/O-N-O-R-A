import React from "react";
import ServicesHero from "../ServicesHero/ServicesHero";
import HCHelpWrapper from "../../Specilization/HCHelp/HCHelpWrapper";
import HCHelpOne from "../../Specilization/HCHelp/HCHelpOne";
import HCHelpTwo from "../../Specilization/HCHelp/HCHelpTwo";
import services from './../../components/Specialization/ServicesData';
import Specialization from "../../components/Specialization/Specialization";
import ServicesMetaAdv1 from "/ServicesMetaAdv1.webp"
import ServicesMetaAdv2 from "/ServicesMetaAdv2.webp"
import ServicesMetaAdv3 from "/ServicesMetaAdv3.webp"
import ServicesMetaAdv4 from "/ServicesMetaAdv4.webp"
import ServicesMetaAdv5 from "/ServicesMetaAdv5.webp"
import ServicesMetaAdv6 from "/ServicesMetaAdv6.webp"

const ServicesMetaAdv = () => {
  return (
    <div>
      <ServicesHero
        topTitle="META ADVERTISING"
        desc="Meta advertising gives businesses and brands a gateway to customers at scale. The world of social media advertising is getting more competitive by the quarter however our team are committed to staying ahead of the game."
        btn1="AD CAMPAIGN STRATEGY"
        btn2="AD CREATIVE DEVELOPMENT"
        btn3 = "AUDIENCE TARGETING"
        btn4 = "FIRST PARTY DATA"
        btn5= "FACEBOOK"
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="AD CAMPAIGN STRATEGY"
          desc="Your results will only ever be good as they strategy behind them. Our Chief Investment Officer oversees all campaign strategies we deploy across Facebook and Instagram to ensure that every possible percentage point of ROAS is achieved. Having such a high level strategist direct your campaign is what makes AF different."
          img={ServicesMetaAdv1}
        />
        <HCHelpTwo
          title="AD CREATIVE DEVELOPMENT"
          desc="Creative needs to stop thumbs, bend minds and induce a response. We have some of the sharpest brains in the business working at AF. Backed by data, delivered by the perfect combination of human talent and AI. Our advertising creative connects with your audience and converts."
          img={ServicesMetaAdv2}
        />
        <HCHelpOne
          title="AUDIENCE TARGETING"
          desc="You know when your advertising account manager is good at their job when your target audience receives ads and only assumes 'they're' listening in. Mind reading whilst not an official title at AF, our team is strong at targeting the right audience at the right time, they'll think they're in a permanent state of serendipity."
          img={ServicesMetaAdv3}
        />
        <HCHelpTwo
          title="FIRST PARTY DATA"
          desc="First Party Data (FPD) is the collected data that you effectively own and can utilise in performance marketing. Unlike borrowing data by advertising on other platforms, having your own data is best in class. We put systems in place to collect and manage FPD, which in terms becomes your golden goose."
          img={ServicesMetaAdv4}
        />
        <HCHelpOne
          title="FACEBOOK"
          desc="For most industries, advertising with this social media megalith is essential for digital marketing. The platform is a powerful aggregate of data that enables us to create, test and distil your advertising down to the best performing campaigns based on engagement metrics, leads and conversions. It's a must-have for any business with a website."
          img={ServicesMetaAdv5}
        />
        <HCHelpTwo
          title="INSTAGRAM"
          desc="Facebook's younger, visual-based twin. Instagram ads taps into the same suite of dynamic targeting tools to serve highly engaging advertising that leads Instagram users to see your feed, website or to shop your products - all without leaving the platform."
          img={ServicesMetaAdv6}
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

export default ServicesMetaAdv;
