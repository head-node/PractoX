import React from "react";
import bannerS from '../../assets/images/banner-small.webp';
import banner from '../../assets/images/banner.webp';
import './index.css';


const Banner = () => {
  return (
    <div className="banner">
      <a href="google.com">
        <span>
          <picture>
            <source media="(max-width:1024px)" srcset={bannerS} />
            <source media="(min-width:1025px)" srcset={banner} />
            <img
            className="banner_img"
              src={bannerS}
              alt="Consultation"
            />
          </picture>
        </span>
      </a>
    </div>
  );
};

export default Banner;
