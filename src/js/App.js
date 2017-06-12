import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";

export default class App extends React.Component {
  render() {
  return (

          <Route component={Layout}>
          <Switch>
           <Route exact={true} path="/" component={Home}></Route>  
           <Route path="profile" component={Profile}></Route>
           <Route path="contact" component={Contact}></Route>
          </Switch>
          </Route>


      );
    }
  }
