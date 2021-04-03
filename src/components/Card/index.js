import React from "react";
import "./index.css";
import card1 from '../../assets/images/card1.webp';
import card1S from '../../assets/images/card1-small.webp';
import card2 from '../../assets/images/card2.webp';
import card2S from '../../assets/images/card2-small.webp';

const Card = () => {
  return (
    <div className="cards">
      <div className="card" >
        <picture>
            <source media="(max-width:1024px)" srcSet={card2S} />
            <source media="(min-width:1025px)" srcSet={card2} />
            <img
            className="card-img-top"
              src={card2}
              alt="Find Doctors Near You"
            />
          </picture>
      </div>
      <div className="card" >
        <picture>
            <source media="(max-width:1024px)" srcSet={card1S} />
            <source media="(min-width:1025px)" srcSet={card1} />
            <img
            className="card-img-top"
              src={card1}
              alt="Consult Doctors Now"
            />
          </picture>
      </div>
    </div>
  );
};

export default Card;
