import React from "react";
import {Carousel} from "react-responsive-carousel";

export default class Slider extends React.Component {

  render() {
    const responsive_image = {
      height:"10px",
      width:"10px"
    };
    return (
      <Carousel showArrows={true} axis="horizontal" showThumbs={true} dynamicHeight={true} emulateTouch={true}>
        <div>
          <img src="../../../assets/pic1.png" style = {responsive_image}/>

          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="../../../assets/pic2.png"/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="../../../assets/pic3.png"/>
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="../../../assets/pic4.png"/>
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src="../../../assets/pic5.png"/>
          <p className="legend">Legend 5</p>
        </div>
      </Carousel>
    );
  }
}
