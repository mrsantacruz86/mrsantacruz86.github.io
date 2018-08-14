import React, { Component } from 'react';
import './ContactForm.css';
import InputText from "../InputText";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    return (
      <div>
        <InputText
          id="myPwd"
          type="password"
          placeholder="Type your password here"
          label="MY PASSWORD"
          val={this.state.text}
          onTextChange={this.handleChange}
        />
        <InputText
          id="mytext"
          type="text"
          placeholder="Type your text here"
          label="MY TEXT"
          val={this.state.text}
          onTextChange={this.handleChange}
        />
      </div>
    );
  }
}

export default ContactForm;
