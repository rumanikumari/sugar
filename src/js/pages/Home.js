import React from "react";
import Slider from "../components/layout/Slider";

export default class Home extends React.Component {
  render() {
    const containerStyle = {
      marginTop: "60px"
    };
    const paragraphStyle = {
      color: "green",
      backgroundColor: "rgb(150, 211, 219)"
    };

    return (
    <div>
        <Slider/>
        <div class="containerStyle">
        <p>Every year Bajaj Hindusthan Sugar ltd. conducts a survey of its command area to bring on record the cane cultivated area of the farmers. This also takes care of the different varieties of sugarcane that are grown by farmers.
Post this massive exercise, every farmer within the command area of the mill is provided with a calendar, which tells him when he can expect a Mill Supply Ticket (Purchy) against which he will supply the cane</p>
        </div>
        <div class="image img-responsive">
            <img src="../../assets/sugar.png" alt="" class="blur"/>
             <p class="textOnImage">A Movie in the Park: Kung Fu Panda</p>
             </div>
   </div>
    );
  }
}
