import React from "react";
import { Link } from "react-router-dom";
import "./Specialization.css";
const Specialization = ({data,title,subtitle,backgroundColor}) => {
  return (
    <div className="specialization" style={{
      backgroundColor : {}
    }}>
        <h1>{title} <br /><span>{subtitle}</span></h1>
      <div className="mainContainer_service specializationContainer">
        {data.map((service) =>
          service.redirect == "" ? (
            <div
              href={service.redirect}
              className="specializationContainerBox"
              key={service.id}
              
            >
              <i>{service.icon}</i>
              <h3>{service.title}</h3>
              <span>{service.description}</span>
            </div>
          ) : (
            <Link to = {service.redirect}
            target="_blank"
              key={service.id} 
              className="specializationContainerBox" 
            >
              <i>{service.icon}</i>
              <h3>{service.title}</h3>
              <span>{service.description}</span>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Specialization;
