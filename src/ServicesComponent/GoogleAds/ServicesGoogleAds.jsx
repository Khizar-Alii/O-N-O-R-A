import React from "react";
import ServicesHero from "../ServicesHero/ServicesHero";
import HCHelpWrapper from "../../Specilization/HCHelp/HCHelpWrapper";
import HCHelpOne from "../../Specilization/HCHelp/HCHelpOne";
import HCHelpTwo from "../../Specilization/HCHelp/HCHelpTwo";
import services from './../../components/Specialization/ServicesData';
import Specialization from "../../components/Specialization/Specialization";
import ServicesGoogleAds1 from "/ServicesGoogleAds1.webp"
import ServicesGoogleAds2 from "/ServicesGoogleAds2.webp"
import ServicesGoogleAds3 from "/ServicesGoogleAds3.webp"
import ServicesGoogleAds4 from "/ServicesGoogleAds4.webp"

const ServicesGoogleAds = () => {
  return (
    <div>
      <ServicesHero
        topTitle="GOOGLE ADS"
        desc="Google Ads is one of the highest return on investment advertising platforms you can deploy. But only if managed by an experienced expert. As Google Partners, our in-house team of account managers are obsessive about performance. Squeezing every last impression, click and conversion from your budget. Manically analysing the data to achieve bigger results for every campaign."
        btn1="GOOGLE SEARCH"
        btn2="GOOGLE DISPLAY"
        btn3 = "GOOGLE SHOPPING"
        btn4 = "YOUTUBE"
        btn5= "Explore"
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="GOOGLE SEARCH"
          desc="Pay Per Click (PPC) advertising with Google Search is a must in every marketing strategy. It's one of the highest return tactics you can deploy. Our in-house team of digital advertising specialists are Certified Google Partners. They've spent years refining their craft, obsessing over campaign optimisation and chasing conversions. There's no set and forget at April Ford. It's hands on the wheel at all times."
          img={ServicesGoogleAds1}
        />
        <HCHelpTwo
          title="GOOGLE DISPLAY"
          desc="Display advertising is like digital guerrilla marketing, allowing you to target audiences on their favourite websites with visually striking creative. Image your clients seeing your brand as the top advertising banner on afr.com.au or better yet, your product following them around the internet for the next four weeks reminding them to buy. We combine killer targeting and placement with strategic and intelligent creative to convert more customers."
          img={ServicesGoogleAds2}
        />
        <HCHelpOne
          title="GOOGLE SHOPPING"
          desc="Google Shopping is the ultimate tool for ecommerce. Turning Google Search into your very own shopfront. We use the latest strategies to make your products pop, getting more clicks and more conversions. Growth shouldn't come at the cost of margin. It's why we're maniacal about optimisation and performance management in order to scale up."
          img={ServicesGoogleAds3}
        />
        <HCHelpTwo
          title="Youtube"
          desc="Youtube advertising is going through a whole new revolution as users watch Youtube on their TV just as much as they do on their device. We've developed several proprietary  strategies to drive brand awareness, click through and conversions. It's the perfect intersection of creative and data driven targeting to generate incredible results for clients."
          img={ServicesGoogleAds4}
        />
      </HCHelpWrapper>

      <h1
        id="howWeHelp"
        style={{
          margin: "40px",
          color: "#222222",
          fontSize: "50px",
          fontWeight: "bolder",
        }}
      >
        HOW WE CAN <br />
        <span style={{ color: "#0014A5" }}>HELP.</span>
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

export default ServicesGoogleAds;
