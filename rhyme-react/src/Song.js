import React, { Component } from 'react';
import Line from './Line.js';

class Song extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedWord: null,
    };
  }

  setSelectedWord = (word) => {
      this.setState({selectedWord: word})
  }

  render() {
    return (
      <div className="Song">
      <h1>Song Text</h1>
        {this.props.model.lines.map((line) =>
          <Line
            key={line.index}
            model={line}
            setSelectedWord={this.setSelectedWord}
            selectedWord={this.state.selectedWord}
            handleRhymeChoice={this.props.handleRhymeChoice}
            />
        )}
      </div>
    );
  }
}

export default Song;
