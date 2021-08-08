// npm install -save styled components
// npm install @material-ui/icons
// npm install @material-ui/core
// npm install react-router-dom

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Store from "./Pages/Store";
import Subscription from "./Pages/Subscription";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Lato",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

class App extends Component {
  render() {
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()

    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Store />
            </Route>
            <Route path="/subs">
              <Subscription />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
