import React from "react";
import Form from "../components/common/Form";
import Joi from "@hapi/joi";

class Login extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .required()
      .min(3)
      .alphanum()
      .max(10)
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit() {
    console.log("submitted");
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Login Form</h1>
          <form className="form" onSubmit={this.handelSubmit}>
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Login")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
