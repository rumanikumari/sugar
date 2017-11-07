import React from "react";
import {Carousel} from "react-responsive-carousel";

export default class Slider extends React.Component {

  render() {

    return (
      <Carousel showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode" infiniteLoop>
        <div>
          <img src="../../../assets/industry.jpg" className="slider-image-1"/>
          <p className="text-on-slider img-responsive">Our company is great. It has a great history. It is the best rated industry. It fulfills all your need.<br/>
          </p>
          <div class="clear"></div>
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
