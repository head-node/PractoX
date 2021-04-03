import React from "react";
import "./index.css";
import covid1 from "../../assets/images/covid1.webp";
import covid2 from "../../assets/images/covid2.webp";
import covid3 from "../../assets/images/covid3.webp";
import covidS from "../../assets/images/covid-small.webp";

const CovidCard = () => {
  return (
    <div>
      <div className="covid">
        <div className="card">
          <img
            src={covid1}
            alt="Unlimited Doctor Consultation"
            style={{ backgroundColor: "#28328c",height:"449px"}}
          />
        </div>
        <div className="card">
          <img
            src={covid2} 
            
            alt="Corona Symptoms? Don't Panic"
            style={{ backgroundColor: "#28328c" , height:"449px"}}
          />
        </div>
        <div className="card">
          <img
            src={covid3}
            alt="Expert help on Coronavirus"
            style={{ backgroundColor: "#28328c",height:"449px"}}
          />
        </div>
      </div>
      <div className="covid-small">
        <div className="card">
          <img src={covidS} alt="Expert help on Coronavirus" />
        </div>
      </div>
    </div>
  );
};

export default CovidCard;
