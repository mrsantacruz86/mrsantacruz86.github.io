import React, { Component } from 'react';
import './Textarea.css';

class Textarea extends Component {
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
        <label htmlFor={name}>{this.props.label || "Texarea"}</label>
        <textarea
          id={name}
          className="form-control"
          name={name}
          value={this.props.val}
          onChange={this.handleChange}
          rows="5"
        />
      </div>
    );
  }
}

export default Textarea;
