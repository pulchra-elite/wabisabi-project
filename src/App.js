import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./containers/Login";
import Landing from "./containers/Landing";
import "corgicss/css/corgi.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
