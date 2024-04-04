import React from "react";
import ServicesHero from "../ServicesHero/ServicesHero";
import HCHelpWrapper from "../../Specilization/HCHelp/HCHelpWrapper";
import HCHelpOne from "../../Specilization/HCHelp/HCHelpOne";
import HCHelpTwo from "../../Specilization/HCHelp/HCHelpTwo";
import services from './../../components/Specialization/ServicesData';
import Specialization from "../../components/Specialization/Specialization";
import ServicesSEO1 from "/ServicesSEO1.jpg"
import ServicesSEO2 from "/ServicesSEO2.png"
import ServicesSEO3 from "/ServicesSEO3.jpg"
import ServicesSEO4 from "/ServicesSEO4.jpg"
import ServicesSEO5 from "/ServicesSEO5.png"

const ServicesSEO = () => {
  return (
    <div>
      <ServicesHero
        topTitle="SEARCH ENGINE OPTIMISATION"
        desc="SEO is not a dark art like some might have you believe. It's a systematic approach to the structure, content, and networks your website is made up of. Search Engine Optimisation is about making your website as Google-friendly as possible."
        btn1="SEARCH STRATEGY"
        btn2="KEYWORD RESEARCH"
        btn3 = "CONTENT PILLARS"
        btn4 = "BACKLINKS"
        btn5= "COMPETITOR ANALYSIS"
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="SEARCH STRATEGY"
          desc="Optimising your website so it ranks high on search results is all about structural fundamentals, not trying to outsmart Google. We'll audit your website to build a strategy that increases your website performance and better serve your customer as a result."
          img={ServicesSEO1}
        />
        <HCHelpTwo
          title="KEYWORD RESEARCH"
          desc="To be a top-ranking Google result, the content on your website needs to reflect what your audience is searching for. Keyword research analyses search data to understand what your audience wants and why. We use best-in-practice tools to identify keyword opportunities so your website and content can be optimised for performance."
          img={ServicesSEO2}
        />
        <HCHelpOne
          title="CONTENT PILLARS"
          desc="When it comes to website content, relevance is everything. We use SEO tactics to inform the topics that offer the best opportunity to engage with your audience. Increase visibility, increase conversions."
          img={ServicesSEO3}
        />
        <HCHelpTwo
          title="BACKLINKS"
          desc="Boost brand awareness and increases organic website traffic with a backlink strategy. It works by gaining links to your website from trusted digital sources, such as industry publications or a prominent local event. Every quality link increases your opportunity to engage a new audience. The larger the audience, the higher likelihood of being a top-ranking search result."
          img={ServicesSEO4}
        />
        <HCHelpOne
          title="COMPETITOR ANALYSIS"
          desc="What keywords are your competitors ranking for? Which backlinks have they lost? Which are their best-performing traffic channels? We gather data on your biggest competitors to identify opportunities to improve your SEO ranking and gain market share."
          img={ServicesSEO5}
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

export default ServicesSEO;
