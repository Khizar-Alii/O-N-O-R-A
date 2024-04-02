import React from "react";
import "./ResultCar.css";
import car from "/car.webp"
import burger from "/burger.webp"
import truck from "/truck.webp"

const ResultCar = () => {
  return (
    <div className="resultCar" >
      <h1>
        RESULTS THAT <br />
        SPEAK <span>FOR THEMSELVES.</span>
      </h1>
      <section className="resultCarContainer">
        <div className="imageContainer">
          <img src={car} alt="Car" />
          <div className="textOverlay">
            <p>433% GROWTH GENERATES $10.6M FOR NATIONAL HIRE BRAND</p>
          </div>
        </div>
        <div className="imageContainer">
          <img src={burger} alt="Car" />
          <div className="textOverlay">
            <p>MAXIMISED PROFITS FOR NATIONAL BURGER FRANCHISE</p>
          </div>
        </div>
        <div className="imageContainer">
          <img src={truck} alt="Car" />
          <div className="textOverlay">
            <p>VEHICLE AFTERMARKET & HOME TINTING SPECIALISTS</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultCar;
