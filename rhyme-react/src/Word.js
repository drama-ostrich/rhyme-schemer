import React, { Component } from 'react';
import WordMenu from './WordMenu.js';
import './Word.css';

class Word extends Component {

  constructor(props) {
    super(props);
    this.rhymeColors = {
        '--': 'white',
        'AA': 'blue',
        'AE': 'green',
        'AH': 'tomato',
        'AO': 'pink',
        'AW': 'red',
        'AY': 'grey',
        'EH': 'orange',
        'ER': 'teal',
        'EY': 'blue',
        'IH': 'blue',
        'IY': 'blue',
        'OW': 'blue',
        'OY': 'blue',
        'UH': 'blue',
        'UW': 'blue',
    };
  }

  handleWordOptionClick = (choice) => {
    choice = choice !== '--' ? choice : null;
      this.props.handleRhymeChoice(choice, this.props.model.index);
  }

  onClick = (e) => {
    // If this was clicked while already selected then unselect it
    if (this.props.selectedWord === this)
      this.props.setSelectedWord(null);
    else
      this.props.setSelectedWord(this);
  }

  render() {
    const selected = this.props.selectedWord === this;
    const wordColor = this.rhymeColors[this.props.model.rhymeType];
    const spanProps = {className: "Word " +  (selected ? 'active' : '')}
    if(wordColor && wordColor !== 'white')
      spanProps.style = {color: "white", backgroundColor:wordColor};

    return (
      <span {...spanProps} onClick={this.onClick}>
          {this.props.model.text}
          {selected &&
            <WordMenu
              handleWordOptionClick={this.handleWordOptionClick}
              rhymeColors={this.rhymeColors}/>
          }
      </span>
    );
  }
}

export default Word;
