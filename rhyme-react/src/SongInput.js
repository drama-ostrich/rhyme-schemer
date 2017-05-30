import React, { Component } from 'react';
import './SongInput.css'

class SongInput extends Component {

  handleChange = (e) => {
    this.props.handleInput(e.target.value);
  }

  render() {
    return (
      <div className="SongInput">
        <textarea className="SongInput__textarea" onChange={this.handleChange} defaultValue={this.props.text}></textarea>
      </div>
    );
  }
}

export default SongInput;
