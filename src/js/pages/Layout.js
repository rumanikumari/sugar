import React from "react";
import {Link} from "react-router-dom";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
    const {location} = this.props;

    return (
      <div>
      <div>
        <Nav location={location}/>
      </div>
      <div>
            {this.props.children}
      </div>
      </div>

    );
  }
}
