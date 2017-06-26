import React from "react";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import Buy from "./pages/Buy";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Layout>
            <Route exact={true} path="/" component={Home}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/buy" component={Buy}></Route>
            <Route path="/aboutUs" component={AboutUs}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Layout>
        </Switch>
      </Router>
    );
  }
}
