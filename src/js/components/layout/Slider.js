import React from "react";
import {Carousel} from "react-responsive-carousel";

export default class Slider extends React.Component {

  render() {
    return (
      <Carousel autoPlay interval={1000} infiniteLoop>
        <div>
          <img src="../../../assets/2.jpeg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="../../../assets/3.jpeg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="../../../assets/4.jpeg" />
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>
    );
  }
}
