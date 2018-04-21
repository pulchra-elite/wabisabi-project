import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./containers/Login/";
import "corgicss/css/corgi.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
