import React from "react";
import ServicesHero from "../ServicesHero/ServicesHero";
import HCHelpWrapper from "../../Specilization/HCHelp/HCHelpWrapper";
import HCHelpOne from "../../Specilization/HCHelp/HCHelpOne";
import HCHelpTwo from "../../Specilization/HCHelp/HCHelpTwo";
import services from './../../components/Specialization/ServicesData';
import Specialization from "../../components/Specialization/Specialization";
import ServicesWebPageDesign1 from "/ServicesWebPageDesign1.gif"
import ServicesWebPageDesign2 from "/ServicesWebPageDesign2.gif"
import ServicesWebPageDesign3 from "/ServicesWebPageDesign3.gif"
import ServicesWebPageDesign4 from "/ServicesWebPageDesign4.gif"
import ServicesWebPageDesign5 from "/ServicesWebPageDesign5.gif"
import ServicesWebPageDesign6 from "/ServicesWebPageDesign6.gif"

const ServicesWebPageDesign = () => {
  return (
    <div>
      <ServicesHero
        topTitle="WEBSITE & LANDING PAGE DESIGN"
        desc="Incredible websites that convert, engage and inspire should be simple, user friendly and built to last. We build websites that both the customer and the client will love. From huge eCommerce sites to simple landing pages, we build it all without breaking the bank."
        btn1="DESIGN & DEVELOPMENT"
        btn2="UX"
        btn3 = "UI"
        btn4 = "CREATIVE COPYWRITING"
        btn5= "WEBFLOW"
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="DESIGN & DEVELOPMENT"
          desc="Let us help you translate everything your business does into a high-converting, functional website. We deep dive into what your customer needs to know and present it in a way that feels like they're talking with you in real life. Your new website could be the only interaction you have with your customer in our digital age, so make sure it shines."
          img={ServicesWebPageDesign1}
        />
        <HCHelpTwo
          title="UX"
          desc="UX (User Experience Design) is design based on data. It's our way of anticipating everything your customer may want to do and designing your website around it. Good UX will reduce your customers' cognitive load, so all they need to think about is the login for their PayPal account or where they left their keys."
          img={ServicesWebPageDesign2}
        />
        <HCHelpOne
          title="UI"
          desc="A fancy name for ensuring your website is intuitive and user-friendly no matter what device your audience is viewing it on. UI (User Interface Design) is the backbone behind any good website that is only noticeable when it's not there (websites with tiny text and the endless sentence scroll, we're looking at you)."
          img={ServicesWebPageDesign3}
        />
        <HCHelpTwo
          title="CREATIVE COPYWRITING"
          desc="The art of saying more with less. Captivate your customers with copy that heroes what your business does best. The right words will speak to your audience in their language and prompt them to click for more—hook, line and sinker."
          img={ServicesWebPageDesign4}
        />
        <HCHelpOne
          title="WEBFLOW"
          desc="Imagine a website that is easily updated with a few clicks. No delays by website developers, and no need to ask us to make a small change. With Webflow, you have control over your most important digital asset. Find out how we can help you build an interactive and responsive digital customer experience that converts."
          img={ServicesWebPageDesign5}
        />
        <HCHelpTwo
          title="SHOPIFY"
          desc="The website platform of choice for eCommerce and retail brands. Create scroll-stopping websites with Shopify's range of powerful tools that manage inventory and customer data at scale. Leverage the user-friendly interface to grow your brand. We can show you how."
          img={ServicesWebPageDesign6}
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

export default ServicesWebPageDesign;
