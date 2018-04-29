import React, { Component } from "react";
import { connect } from "react-redux";
import { authRequest } from "../../actions/auth";

import Form from "./Form";

class Login extends Component {
  submit = (values, { props, setSubmitting, setErrors }) => {
    this.props.authRequest(values);
  };

  render() {
    return (
      <div className="container">
        <Form handleSubmit={this.submit} />
      </div>
    );
  }
}

export default connect(state => state, { authRequest })(Login);
