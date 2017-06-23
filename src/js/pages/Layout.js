import React from "react";
import {Link} from "react-router-dom";
import Nav from "../components/layout/Nav";
import Slider from "../components/layout/Slider";

export default class Layout extends React.Component {
  render() {
    const {location} = this.props;

    return (
      <div>
        <Nav location={location}/>
        {this.props.children}
      </div>

    );
  }
}
