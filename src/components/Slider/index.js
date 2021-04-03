import React from "react";
import "./index.css";
const Slider = () => {
  return (
    <div className="slider">
      <h3>What our users have to say?</h3>
      <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li
            data-target="#carouselIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselIndicators" data-slide-to="1"></li>
          <li data-target="#carouselIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <blockquote>
              Very good app. Well thought out about
              booking/rescheduling/canceling an appointment. Also, Doctor's
              feedback mechanism is good and describes all the basics in a good
              way
            </blockquote>
            <p className="customers">-Sudhanshu Sekhar</p>
          </div>
          <div class="carousel-item">
            <blockquote>
              Very helpful. Far easier than doing same things on computer.
              Allows quick and easy search with speedy booking. Even maintains
              history of doctors visited.
            </blockquote>
            <p className="customers">-Kishlay Kumar</p>
          </div>
          <div class="carousel-item">
            <blockquote>
              Very easy to book,maintain history. Hassle free from older
              versions of booking appointment via telephone.. Thanks Practo for
              making it simple.
            </blockquote>
            <p className="customers">-Anup Kumar Singh</p>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Slider;
