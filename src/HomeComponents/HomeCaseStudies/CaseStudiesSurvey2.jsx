import React from "react";
import "./HomeCaseStudies.css";

import useIntersectionObserver from "./useHandleView";
import "animate.css";

//  this component will animate the image fade_in only when the img comes in view
const ImageWithAnimation = ({ src, rootMargin }) => {
  const [imageRef, isPartiallyVisible] = useIntersectionObserver(rootMargin);

  return (
    <img
      ref={imageRef}
      className={`animate__animated ${
        isPartiallyVisible ? "animate__lightSpeedInLeft" : ""
      }`}
      src={src}
      alt=""
    />
  );
};

//  this component will animate the text only when the component comes in view
const TextWithAnimation = ({ children, rootMargin }) => {
  const [textRef, isPartiallyVisible] = useIntersectionObserver(rootMargin);

  return (
    <section
      ref={textRef}
      className={`surveyTwo_section_bottomSection animate__animated ${
        isPartiallyVisible ? "animate__zoomIn" : ""
      }`}
    >
      {children}
    </section>
  );
};

// The main component
const SurveyTwo = ({ imgSourc, headingH1, subHeading, desc }) => {
  return (
    <div className="surveyTwo_section">
      <div className="surveyTwo_section_imageSection">
        <ImageWithAnimation src={imgSourc} rootMargin="-20px" />
      </div>
      <TextWithAnimation rootMargin="150px">
        <h1>{headingH1}</h1>
        <div className="surveyTwo_section_textDiv">
          <h3>{subHeading}</h3>
          <p>{desc}</p>
        </div>
      </TextWithAnimation>
    </div>
  );
};

export default SurveyTwo;
