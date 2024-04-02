import React from "react";
import "./RoundImage.css";

const RoundImage = ({ title, subtitle, desc }) => {
  return (
    <div className="RoundImage">
      <section className="RoundImageLeft"></section>
      <section className="RoundImageRight">
        <h1>
          {title}
          <span>{subtitle}</span>
        </h1>
        <p>{desc}</p>
      </section>
    </div>
  );
};

export default RoundImage;
