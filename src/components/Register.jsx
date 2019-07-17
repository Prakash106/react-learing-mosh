import React, { Component } from "react";
import Form from "./common/Form";
import Joi from "@hapi/joi";

class Register extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(8)
      .required(),
    name: Joi.string().required()
  };

  doSubmit() {
    console.log("register");
  }

  render() {
    return (
      <form className="form" onSubmit={this.handelSubmit}>
        <h1>Register Form</h1>
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput("name", "Name")}
        {this.renderButton("Register")}
      </form>
    );
  }
}

export default Register;
