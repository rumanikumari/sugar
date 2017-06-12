import React from "react";
import {Link} from "react-router-dom";
import Nav from "../components/layout/Nav";
import Slider from  "../components/layout/Slider";

export default class Layout extends React.Component {
  render() {
    const {location} = this.props;
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>

        <Nav location={location}/>
        <Slider/>
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">

              {this.props.children}

            </div>
          </div>
        </div>
      </div>
    );
  }
}
