import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./containers/Login";
import Landing from "./containers/Landing";
import Navbar from "./containers/Navbar";
import "corgicss/css/corgi.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
