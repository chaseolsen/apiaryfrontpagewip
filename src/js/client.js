import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Home from "./pages/Home";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>

      <Route path="/" component={Home}></Route>

  </Router>,
  app);
