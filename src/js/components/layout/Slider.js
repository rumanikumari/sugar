import React from "react";
import {Carousel} from "react-responsive-carousel";

export default class Slider extends React.Component {

  render() {
    const responsive_image = {
      height:"10px",
      width:"10px"
    };
    return (
      <Carousel axis="vertical" showArrows={false} infiniteLoop autoPlay>
        <div>
          <img src="../../../assets/pic1.jpeg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="../../../assets/pic2.jpeg"/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="../../../assets/pic3.jpeg"/>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}
