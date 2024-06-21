import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import HeroBottom from "../HeroBottom/HeroBottom";
import RoundImage from "../RoundImage/RoundImage";
import RoundImageTwo from "../RoundImage/RoundImageTwo";
import Specialization from "../Specialization/Specialization";
import specializationData from "../Specialization/SpecializationData";
import services from "../Specialization/ServicesData";
import ResultCar from "../ResultCar/ResultCar";

const Home = () => {
  return (
    <div className="home" style={{
      height: "fit-content",
    }}>
      <HeroSection />
      <HeroBottom />
      <RoundImage
        title="WE TAKE THE 
          TIME TO GET 
          TO KNOW   "
        subtitle="YOU."
        desc="We believe in getting to know you, your industry, and your problem,     intimately.We're obsessive about detail and we know investing the time to understand you means better outcomes for all."
      />
      <RoundImageTwo
        title="THE COMPLETE MEDIA "
        subtitle="STACK."
        desc="Full stack marketing ensures you're not missing an opportunity or worse yet, being held to ransom by one platform. We've built a team of specialist marketers that deploy all the tools necessary to get the job done.
        "
      />
      <RoundImage
        title="PERFORMANCE
        CAMPAIGNS THAT
        CUT "
        subtitle="THROUGH."
        desc="We develop performance campaigns with creative that cuts through. Scroll stopping, mind bending, brilliantly strategic, direct response campaigns that convert."
      />
      <RoundImageTwo
        title="THINK BIGGER "
        subtitle=" EXECUTE FASTER."
        desc="Big ideas are only as good as your ability to execute them. It's why at Onora we invest in people that deliver, not just talk. It's why we're boast an international diverse tightly dedicated teams working together to deliver world class marketing and Branding masterpieces."
      />
      <Specialization  data = {specializationData} title = "SPECIALISE, DON'T" subtitle="GENERALISE" backgroundColor='#fafafa'/>
      <Specialization  data = {services} title = "EVERYTHING YOU NEED," subtitle="NOTHING YOU DON'T." backgroundColor='#fafafa'/>
      <ResultCar />
    </div>
  );
};

export default Home;