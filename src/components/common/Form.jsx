import React, { Component } from "react";
import Joi from "@hapi/joi";
import Input from "./Input";
import Select from "./Select";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate() {
    const joiOptions = {
      abortEarly: false
    };
    const { error } = Joi.validate(this.state.data, this.schema, joiOptions);
    if (!error) return;
    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  }

  validateProperty({ name, value }) {
    const object = { [name]: value };
    const schema = { [name]: this.schema[name] };

    const { error } = Joi.validate(object, schema);
    return error ? error.details[0].message : null;
  }

  handelSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handelChange = ({ currentTarget }) => {
    const errors = {};
    let data = { ...this.state.data };
    const errorMessage = this.validateProperty(currentTarget);
    if (errorMessage) errors[currentTarget.name] = errorMessage;
    else delete errors[currentTarget.name];
    data[currentTarget.name] = currentTarget.value;

    this.setState({
      data,
      errors
    });
  };

  renderInput(name, label, type = "text") {
    let { data, errors } = this.state;

    return (
      <Input
        type={type}
        value={data[name]}
        name={name}
        label={label}
        onChange={this.handelChange}
        error={errors[name]}
      />
    );
  }

  renderSelect(name, label, options) {
    let { data, errors } = this.state;

    return (
      <Select
        value={data[name]}
        options={options}
        name={name}
        onChange={this.handelChange}
        error={errors[name]}
        label={label}
      />
    );
  }

  renderButton(label) {
    return (
      <div className="form-group">
        <button disabled={this.validate()} className="btn btn-primary">
          {label}
        </button>
      </div>
    );
  }
}

export default Form;
