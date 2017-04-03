import React, { Component } from 'react';

class SongInput extends Component {

  // constructor(props) {
  //     super(props);
  //     this.state = {date: new Date()};
  //   }

  render() {
    return (
      <div className="SongInput">
      <h1>Song Input</h1>
      <textarea defaultValue={this.props.text}></textarea>

      </div>
    );
  }
}

export default SongInput;
