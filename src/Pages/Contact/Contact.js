import React, { Component } from 'react';
import InputText from "../../Components/InputText";
import Textarea from "../../Components/Textarea";
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.message);
    this.setState({name:"", email:"" , message:""});
  }

  render() {
    return (
      <div>
        <h1>Contact me!</h1>
        <form onSubmit={this.handleSubmit} method="POST">
          <InputText
            name="name"
            type="text"
            placeholder="Type your name here"
            label="Name"
            val={this.state.name}
            onTextChange={this.handleChange}
            required="required"
          />
          <InputText
            name="email"
            type="text"
            placeholder="Type your email here"
            label="Email address"
            val={this.state.email}
            onTextChange={this.handleChange}
            required="required"
          />
          <Textarea
            name="message"
            label="Message"
            val={this.state.message}
            onTextChange={this.handleChange}
            required="required"
          />

          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>

      </div>
    );
  }
}

export default Contact;
