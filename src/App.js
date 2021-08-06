// npm install -save styled components
// npm install @material-ui/icons
// npm install @material-ui/core
// npm install react-router-dom

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Store from "./Pages/Store";
import Subscription from "./Pages/Subscription";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/store">
            <Store />
          </Route>
          <Route path="/subs">
            <Subscription />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
