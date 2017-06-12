import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import App from "./App";

const app = document.getElementById('app');

ReactDOM.render(
  <HashRouter>
  <App/>
 </HashRouter>,
 app);
