import React from "react";
import { NavLink, Link } from "react-router-dom";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }
  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }
  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const registerClass = location.pathname.match(/^\/register/) ? "active" : "";
    const buyClass = location.pathname.match(/^\/buy/) ? "active" : "";
    const aboutUsClass = location.pathname.match(/^\/aboutUs/) ? "active" : "";
    const contactClass = location.pathname.match(/^\/contact/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

  return (
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class={featuredClass}>
            <NavLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</NavLink>
          </li>
          <li class={registerClass}>
            <NavLink to="/register" onClick={this.toggleCollapse.bind(this)}>Register</NavLink>
          </li>
          <li class={buyClass}>
            <NavLink to="/buy" onClick={this.toggleCollapse.bind(this)}>Buy</NavLink>
          </li>
          <li class={aboutUsClass}>
            <NavLink to="/aboutUs" onClick={this.toggleCollapse.bind(this)}>About Us</NavLink>
          </li>
          <li class={contactClass}>
            <NavLink to="/contact" onClick={this.toggleCollapse.bind(this)}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
}
}
