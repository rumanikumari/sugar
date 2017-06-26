import React from "react";
import {Carousel} from "react-responsive-carousel";

export default class Slider extends React.Component {

  render() {
    return (
      <Carousel showThumbs={false}
  showStatus={false}
  useKeyboardArrows
  className="presentation-mode">
        <div>
          <img src="../../../assets/2.png" />
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
