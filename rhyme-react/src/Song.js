import React, { Component } from 'react';
import Line from './Line.js';

class Song extends Component {

  constructor(props) {
    super(props);
    this.state = {lines: props.text.split('\n')};
  }

  render() {
    return (
      <div className="Song">
      <h1>Song Text</h1>
      {this.state.lines.map((line, index) =>
        <Line key={index} text={line} />
      )}
      </div>
    );
  }
}

export default Song;
