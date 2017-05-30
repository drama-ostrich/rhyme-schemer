import React, { Component } from 'react';
import Line from './Line.js';

class Song extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedWord: null,
    };
  }

  componentDidMount() {
      document.addEventListener('mousedown', this.handleClickNothing);
  }

  componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickNothing);
  }

  handleClickNothing = (e) => {
    // If a word is selected and we didn't click
    // in the current word or another word
    // then we clicked nothing and deselect the word

    if (this.state.selectedWord){
      const domNode = this.state.selectedWord.refs.wordSpan;
      if (!domNode.contains(e.target) && e.target.className.indexOf('Word') < 0) {
          this.setSelectedWord(null);
      }
    }

  }

  setSelectedWord = (word) => {
      this.setState({selectedWord: word})
  }

  render() {
    return (
      <div className="Song">
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
