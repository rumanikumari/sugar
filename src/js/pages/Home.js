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
             <div class="panel-heading">WHAT ARE WE?</div>
              <div class="panel-body"><p>Bajaj Hindusthan Sugar Ltd. (BHSL), a part of the 'Bajaj Group', is India's Number One sugar and ethanol manufacturing company, headquartered at Mumbai (Maharashtra), India.

The Company has fourteen sugar plants, which are all located in the northern Indian state of Uttar Pradesh (UP):Golagokarannath, PaliaKalan and Khambarkhera (district LakhimpurKheri), Barkhera (district Pilibhit)...</p></div>
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
