import React, { Component } from 'react';
import Line from './Line.js';

class Song extends Component {

  render() {
    const lines = this.props.text.split('\n');
    return (
      <div className="Song">
      <h1>Song Text</h1>
        {lines.map((line, index) =>
          <Line key={index} text={line} />
        )}
      </div>
    );
  }
}

export default Song;
