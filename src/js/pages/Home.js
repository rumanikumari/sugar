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
        <div class="image">
            <img src="../../assets/sugar.png" alt="" class="blur"/>
             <p class="textOnImage">A Movie in the Park: Kung Fu Panda</p>
             </div>


   </div>
    );
  }
}
