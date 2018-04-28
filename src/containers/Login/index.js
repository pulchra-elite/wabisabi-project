import React, { Component } from "react";
import { connect } from "react-redux";
import { authRequest } from "../../actions/auth";

class Login extends Component {
  submit(e) {
    e.preventDefault();

    // probably need to add formik at some point
    this.props.authRequest({
      email: "email",
      password: "password"
    });
  }

  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this.submit.bind(this)}>
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

export default connect(state => state, { authRequest })(Login);
