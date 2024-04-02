import React from "react";
import "./RoundImage.css";

const RoundImageTwo = ({ title, subtitle, desc }) => {
  return (
    <div className="RoundImageTwo">
      <section className="RoundImageTwoLeft">
        <h1>
          {title}
          <span>{subtitle}</span>
        </h1>
        <p>{desc}</p>
      </section>
      <section className="RoundImageTwoRight"></section>
    </div>
  );
};

export default RoundImageTwo;
