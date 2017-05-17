import React, { Component } from 'react';
import WordMenu from './WordMenu.js';

class Word extends Component {

  constructor(props) {
    super(props);
    this.state = {rhymeType: null};

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
      this.setState({rhymeType: choice});
  }

  onClick = (e) => {
    if (this.props.selectedWord === this){
      this.props.setSelectedWord(null);
    }
    else{
      this.props.setSelectedWord(this);
    }

  }

  render() {
    const wordColor = this.state.rhymeType ? this.rhymeColors[this.state.rhymeType] : null;
    const spanProps = {
      className: "Word " +  (this.state.showMenu ? 'active' : '')
    }
    if(wordColor && wordColor !== 'white') spanProps.style = {color: "white", backgroundColor:wordColor};

    return (
      <span {...spanProps} onClick={this.onClick}>

          {this.props.text}

          {this.props.selectedWord === this &&
            <WordMenu
              handleWordOptionClick={this.handleWordOptionClick}
              rhymeColors={this.rhymeColors}/>
          }
      </span>

    );
  }
}

export default Word;
