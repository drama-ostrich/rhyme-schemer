import React, { Component } from 'react';
import Word from './Word.js';

class Line extends Component {

  render() {
    return (
      <div className="Line">
      {this.props.model.words.map((word) =>
        <Word
          key={word.index}
          model={word}
          setSelectedWord={this.props.setSelectedWord}
          selectedWord={this.props.selectedWord}
          handleRhymeChoice={this.props.handleRhymeChoice}
          />
      )}
      </div>
    );
  }
}

export default Line;
