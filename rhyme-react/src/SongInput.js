import React, { Component } from 'react';

class SongInput extends Component {

  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      //this.state = {date: new Date()};
    }

  handleChange(e){
    this.props.handleInput(e.target.value);
  }

  render() {
    return (
      <div className="SongInput">
      <h1>Song Input</h1>
      <textarea onChange={this.handleChange} defaultValue={this.props.text}></textarea>

      </div>
    );
  }
}

export default SongInput;
