import React from "react";
import ServicesHero from "../ServicesHero/ServicesHero";
import HCHelpWrapper from "../../Specilization/HCHelp/HCHelpWrapper";
import HCHelpOne from "../../Specilization/HCHelp/HCHelpOne";
import HCHelpTwo from "../../Specilization/HCHelp/HCHelpTwo";
import services from './../../components/Specialization/ServicesData';
import Specialization from "../../components/Specialization/Specialization";
import ServicesB2BMar1 from "/ServicesB2BMar1.jpg"
import ServicesB2BMar2 from "/ServicesB2BMar2.png"
import ServicesB2BMar3 from "/ServicesB2BMar3.jpg"
import ServicesB2BMar4 from "/ServicesB2BMar4.gif"
import ServicesB2BMar5 from "/ServicesB2BMar5.jpg"
import ServicesB2BMar6 from "/ServicesB2BMar6.jpg"
import ServicesB2BMar7 from "/ServicesB2BMar7.jpg"
import ServicesB2BMar8 from "/ServicesB2BMar8.jpg"
const ServicesB2BMar = () => {
  return (
    <div>
      <ServicesHero
        topTitle="B2B MARKETING"
        desc="Clients have complex problems. Selling B2B is about delivering outcomes. We help brands build long-term brand equity to gain partnerships, sell more products or services and grow.

        Our extensive experience in B2B stems from over two decades of building and working with companies across multiple specialisations. From B2B verticals to service providers, ecommerce to FMCG. We've dealt with the red tape, lack of leads, low demand and client churn - and we have the strategies to overcome them. Compete in the national market or dominate the local race with the #1 B2B digital marketing agency."
        btn1="Lead Generation"
        btn2="DEMAND GENERATION"
        btn3 = "CUSTOMER ACQUISITION"
        btn4 = "MODERNISING SALES STRATEGY"
        btn5= "MARKETING AUTOMATION"
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="LEAD GENERATION"
          desc="Increase RFPs from sales-qualified leads with our proven approach. We have intimate knowledge and experience in all areas of B2B to grow your lead flow and increase your bottom line."
          img={ServicesB2BMar1}
        />
        <HCHelpTwo
          title="DEMAND GENERATION"
          desc="It's no coincidence that the top B2B companies are in high demand. Secure your position as the market leader with a growth strategy that has prospects lining up for your solution."
          img={ServicesB2BMar2}
        />
        <HCHelpOne
          title="CUSTOMER ACQUISITION"
          desc="Low conversions? Reach new audiences and grow your accounts with a customer lead flow optimised for sales-qualified leads."
          img={ServicesB2BMar3}
        />
        <HCHelpTwo
          title="MODERNISING SALES STRATEGY"
          desc="Peddling a paper catalogue? CRM a series of spreadsheets? Transform your hardcopies into hard cash with a digital B2B growth strategy. Digitising your sales journey will add significant value to your customer experience. Trust us, you'll never look back."
          img={ServicesB2BMar4}
        />
        <HCHelpOne
          title="MARKETING AUTOMATION"
          desc="Nurturing sequences, customer self-service platforms, automated sales workflows and more. There are endless digital solutions to meet your customer needs and business goals without lifting a finger."
          img={ServicesB2BMar5}
        />
        <HCHelpTwo
          title="BRAND POSITIONING"
          desc="Lack of awareness? Perception in the market holding you back? Our strategies move the needle to help you become the number one investment for clients or customers."
          img={ServicesB2BMar6}
        />
        <HCHelpOne
          title="NOT ENOUGH TIME"
          desc="Our specialists and analysts work, so you don't have to. Save time and energy by appointing a team of digital advertising experts, and never entertain the idea of recruiting in-house marketers again."
          img={ServicesB2BMar7}
        />
        <HCHelpTwo
          title="STRATEGY"
          desc="The foundation for future growth. We take a whole of business approach to analyse business performance, identify opportunities and deliver measurable results."
          img={ServicesB2BMar8}
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

export default ServicesB2BMar;
