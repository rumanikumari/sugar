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
<div>
         <div class="row">
           <div class="col-lg-4">
            <div class="panel panel-primary">
            <div class="panel-heading image">WHAT ARE WE?</div>
            <img src="../../assets/sugar.png" alt="" class="blur"/>

             <div class="panel-body">

             <p class="textOnImage">A Movie in the Park:<br />Kung Fu Panda</p>

             </div>
            </div>
           </div>
           <div class="col-lg-4">
           <div class="panel panel-primary"><div class="panel-heading">WHAT WE DO?</div>
             <div class="panel-body"><p>Every year Bajaj Hindusthan Sugar ltd. conducts a survey of its command area to bring on record the cane cultivated area of the farmers. This also takes care of the different varieties of sugarcane that are grown by farmers.
Post this massive exercise, every farmer within the command area of the mill is provided with a calendar, which tells him when he can expect a Mill Supply Ticket (Purchy) against which he will supply the cane</p></div>
           </div>
           </div>
           <div class="col-lg-4">
           <div class="panel panel-primary"><div class="panel-heading">EXPLORE US!!</div>
               <div class="panel-body"><p>Every year Bajaj Hindusthan Sugar ltd. conducts a survey of its command area to bring on record the cane cultivated area of the farmers. This also takes care of the different varieties of sugarcane that are grown by farmers.
Post this massive exercise, every farmer within the command area of the mill is provided with a calendar, which tells him when he can expect a Mill Supply Ticket (Purchy) against which he will supply the cane</p></div>
         </div>
         </div>
       </div>
       </div>
   </div>
    );
  }
}
