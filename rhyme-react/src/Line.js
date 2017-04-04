import React, { Component } from 'react';
import Word from './Word.js';

class Line extends Component {

  render() {
    const words = this.props.text.split(' ');
    return (
      <div className="Line">
      {words.map((word, index) =>
        <Word key={index} text={word} />
      )}
      </div>
    );
  }
}

export default Line;
