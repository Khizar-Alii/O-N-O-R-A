import React from "react";
import ServicesHero from "../ServicesHero/ServicesHero";
import HCHelpWrapper from "../../Specilization/HCHelp/HCHelpWrapper";
import HCHelpOne from "../../Specilization/HCHelp/HCHelpOne";
import HCHelpTwo from "../../Specilization/HCHelp/HCHelpTwo";
import services from './../../components/Specialization/ServicesData';
import Specialization from "../../components/Specialization/Specialization";
import ServicesProgramaticAdv1 from "/ServicesProgramaticAdv1.webp"
import ServicesProgramaticAdv2 from "/ServicesProgramaticAdv2.webp"
import ServicesProgramaticAdv3 from "/ServicesProgramaticAdv3.webp"
import ServicesProgramaticAdv4 from "/ServicesProgramaticAdv4.webp"
import ServicesProgramaticAdv5 from "/ServicesProgramaticAdv5.webp"
import ServicesProgramaticAdv6 from "/ServicesProgramaticAdv6.webp"

const ServicesProgramaticAdv = () => {
  return (
    <div>
      <ServicesHero
        topTitle="PROGRAMMATIC ADVERTISING"
        desc="Programmatic Advertising unlocks premium ad placement opportunities that standard platforms can't guarantee. Get your brand seen in all the right places, on all the right websites and when your audience is most likely to engage.
        
        When you combine lucrative publisher deals with highly targeted audiences and top-level insights, Programmatic Advertising has the power to uncover new customers you won't find anywhere else. Expect more control over your campaigns with real-time optimisation. Personalised campaigns that respond to audience behaviour, weather conditions and more. Testing, scaling and maximising ROAS are all possible with Programmatic Advertising in a few clicks."
        btn1="CONNECTED TV (CTV) ADVERTISING"
        btn2="DISPLAY ADVERTISING"
        btn3 = "PREMIUM VIDEO"
        btn4 = "DIGITAL OOH ADVERTISING"
        btn5= "NATIVE ADVERTISING"
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="CONNECTED TV (CTV) ADVERTISING"
          desc="Your results will only ever be good as they strategy behind them. Our Chief Investment Officer oversees all campaign strategies we deploy across Facebook and Instagram to ensure that every possible percentage point of ROAS is achieved. Having such a high level strategist direct your campaign is what makes AF different."
          img={ServicesProgramaticAdv1}
        />
        <HCHelpTwo
          title="AD CREATIVE DEVELOPMENT"
          desc="Creative needs to stop thumbs, bend minds and induce a response. We have some of the sharpest brains in the business working at AF. Backed by data, delivered by the perfect combination of human talent and AI. Our advertising creative connects with your audience and converts."
          img={ServicesProgramaticAdv2}
        />
        <HCHelpOne
          title="PREMIUM VIDEO"
          desc="You know when your advertising account manager is good at their job when your target audience receives ads and only assumes 'they're' listening in. Mind reading whilst not an official title at AF, our team is strong at targeting the right audience at the right time, they'll think they're in a permanent state of serendipity."
          img={ServicesProgramaticAdv3}
        />
        <HCHelpTwo
          title="DIGITAL OOH ADVERTISING"
          desc="First Party Data (FPD) is the collected data that you effectively own and can utilise in performance marketing. Unlike borrowing data by advertising on other platforms, having your own data is best in class. We put systems in place to collect and manage FPD, which in terms becomes your golden goose."
          img={ServicesProgramaticAdv4}
        />
        <HCHelpOne
          title="NATIVE ADVERTISING"
          desc="For most industries, advertising with this social media megalith is essential for digital marketing. The platform is a powerful aggregate of data that enables us to create, test and distil your advertising down to the best performing campaigns based on engagement metrics, leads and conversions. It's a must-have for any business with a website."
          img={ServicesProgramaticAdv5}
        />
        <HCHelpTwo
          title="DIGITAL AUDIO ADVERTISING"
          desc="Facebook's younger, visual-based twin. Instagram ads taps into the same suite of dynamic targeting tools to serve highly engaging advertising that leads Instagram users to see your feed, website or to shop your products - all without leaving the platform."
          img={ServicesProgramaticAdv6}
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

export default ServicesProgramaticAdv;
