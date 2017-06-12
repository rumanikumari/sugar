import React from "react";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Layout>
            <Route exact={true} path="/" component={Home}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Layout>
        </Switch>
      </Router>
    );
  }
}
