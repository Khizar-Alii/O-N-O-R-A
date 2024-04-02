import React from "react";
import useIntersectionObserver from "./useHandleView";
import "animate.css";
import "./HomeCaseStudies.css";


//  this component will animate the image fade_in only when the img comes in view
const ImageWithAnimation = ({ src, rootMargin }) => {
  const [imageRef, isPartiallyVisible] = useIntersectionObserver(rootMargin);

  return (
    <img
      ref={imageRef}
      className={`animate__animated ${
        isPartiallyVisible ? "animate__fadeIn" : ""
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
      className={`surveyOne_section_bottomSection animate__animated ${
        isPartiallyVisible ? "animate__lightSpeedInLeft" : ""
      }`}
    >
      {children}
    </section>
  );
};

const SureveyOne = ({
  imgSourceOne,
  imgSourceTwo,
  heading1,
  subHeading1,
  desc1,
  heading2,
  subHeading2,
  desc2,
}) => {
  return (
    <div className="surveyOne_section">
      <div className="surveyOne_section_left">
        <div className="imageSection">
          <ImageWithAnimation src={imgSourceOne} rootMargin="-20px" />
        </div>
        <TextWithAnimation rootMargin="150px">
          <h1>{heading1}</h1>
          <div className="surveyOne_section_textDiv">
            <h3>{subHeading1}</h3>
            <p>{desc1}</p>
          </div>
        </TextWithAnimation>
      </div>
      <div className="surveyOne_section_right">
        <div className="imageSection">
          <ImageWithAnimation src={imgSourceTwo} rootMargin="-20px" />
        </div>
        <TextWithAnimation rootMargin="150px">
          <h1>{heading2}</h1>
          <div className="surveyOne_section_textDiv">
            <h3>{subHeading2}</h3>
            <p>{desc2}</p>
          </div>
        </TextWithAnimation>
      </div>
    </div>
  );
};

export default SureveyOne;
