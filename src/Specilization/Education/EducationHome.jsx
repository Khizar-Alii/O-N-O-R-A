import React from "react";
import Educationhelp1 from "/Educationhelp1.png";
import Educationhelp2 from "/Educationhelp2.jpg";
import Educationhelp3 from "/Educationhelp3.jpg";
import Educationhelp4 from "/Educationhelp4.jpg";
import Educationhelp5 from "/Educationhelp5.jpg";
import HCHero from "../HCHero/HCHero";
import HCBottom from "../HCBottom/HCBottom";
import HCHelpOne from "../HCHelp/HCHelpOne";
import HCHelpTwo from "../HCHelp/HCHelpTwo";
import HCStats from "../HCStats/HCStats";
import HCHelpWrapper from "../HCHelp/HCHelpWrapper";
import Niches from "../NICHES/Niches";
import Specialization from "../../components/Specialization/Specialization";
import services from "../../components/Specialization/ServicesData";
import EducationNiches from "../NICHES/EducationNiches";

const EducationHome = () => {
  return (
    <div className="HCHome">
      <HCHero
        topTitle="EDUCATION MARKETING SPECIALISTS"
        desc="Generate more leads, convert more enrolments."
      />
      <HCBottom
        desc="Early learning, childcare, primary and secondary. Each aspect of education requires a different strategy and empathy toward it's market. Our education industry experience means we understand the intricacies of it all - the subsidies, the restrictions and considerations that are made for the benefit of your students.

        Being accessible by your community is of utmost importance, and we have the user-friendly platforms and lead generation strategies for enrolments that are proven across multiple education verticals.
        
        With the support of our team, you can better serve your community and fill your placements faster."
      />
      <HCHelpWrapper>
        <HCHelpOne
          title="ENROLMENTS"
          desc="Generate enrolments at scale with our unique lead generation system for education-based businesses. No matter if you're early learning, primary or high school education, in today's market every educator should have a waitlist. It's our goal to get you there."
          img={Educationhelp1}
        />
        <HCHelpTwo
          title="BRAND AWARENESS"
          desc="Both institutional and privately-owned organisations need strong brand awareness in the market, but often fall short. Don't take a backseat to your competitors, we can put you first."
          img={Educationhelp2}
        />

        <HCHelpOne
          title="RECRUITMENT"
          desc="High demand for enrolments, but not enough educators or support staff? We help you become a brand of attraction as the employer of choice for the right type of talent."
          img={Educationhelp3}
        />
        <HCHelpTwo
          title="NOT ENOUGH TIME"
          desc="Our specialists and analysts work, so you don't have to. Save time and energy by appointing a team of digital advertising experts, and never entertain the idea of recruiting for in-house marketers again."
          img={Educationhelp4}
        />

        <HCHelpOne
          title="STRATEGY"
          desc="The foundation for future growth. We take a whole of business approach to analyse business performance, identify opportunities and deliver measurable results."
          img={Educationhelp5}
        />
      </HCHelpWrapper>
      <HCStats
        s1="74%"
        t1="Higher Google Conversion Rate."
        s2="63%"
        t2="Higher Facebook Click-Through Rate."
        s3="90%"
        t3="In Enrolment Capacity Maintained."
      />
      <Niches data={EducationNiches} />
      <Specialization data={services} />
    </div>
  );
};

export default EducationHome;
