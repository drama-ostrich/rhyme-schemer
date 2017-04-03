import React, { Component } from 'react';
import Word from './Word.js';

class Line extends Component {

  constructor(props) {
      super(props);
      this.state = {words: props.text.split(' ')};
    }

  render() {
    return (
      <div className="Line">
      {this.state.words.map((word, index) =>
        <Word key={index} text={word} />
      )}
      </div>
    );
  }
}

export default Line;
