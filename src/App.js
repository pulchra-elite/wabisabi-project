import React, { Component } from "react";
import "corgicss/css/corgi.css";

class App extends Component {
  submit(e) {
    e.preventDefault();
    console.log(e);
  }

  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this.submit}>
          <fieldset>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" />

            <button className="button -primary" type="submit">
              Log in
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
