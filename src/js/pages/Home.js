import React from "react";
import Slider from "../components/layout/Slider";

export default class Home extends React.Component {

  render() {
    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div>
        <Slider/>
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-4">
            <p>my name is Rumani</p>

            </div>
            <div class="col-lg-4">
            <p>my name is Vipin</p>

            </div>
            <div class="col-lg-4">
            <p>my name is pratiksha</p>

            </div>
          </div>
        </div>
      </div>

    );
  }
}
