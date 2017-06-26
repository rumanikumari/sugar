import React from "react";
import {Carousel} from "react-responsive-carousel";

export default class Slider extends React.Component {

  render() {

    return (
      <Carousel showThumbs={false}
  showStatus={false}
  useKeyboardArrows
  className="presentation-mode" infiniteLoop>
        <div>
          <img src="../../../assets/industry.jpg" class="slider-image-1"/>
          <p className="text-on-slider">Our comapnay is great. It has a great history.</p>
        </div>
        <div>
          <img src="../../../assets/3.png" />
        </div>
        <div>
          <img src="../../../assets/4.png" />
        </div>
      </Carousel>
    );
  }
}
