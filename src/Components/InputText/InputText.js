import React, { Component } from 'react';
import './InputText.css';

class InputText extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTextChange(e);
  }

  render() {
    const name = this.props.name;
    return (
      <div className="form-group">
        <label htmlFor={name}>{this.props.label || "Label"}</label>
        <input
          id={name}
          name={name}
          className="form-control"
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.val}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default InputText;
