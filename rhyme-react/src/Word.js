import React, { Component } from 'react';
import WordMenu from './WordMenu.js';
import './Word.css';

class Word extends Component {

  constructor(props) {
    super(props);
    // Phonemes from http://www.speech.cs.cmu.edu/cgi-bin/cmudict
    this.rhymeTypes = {
        '--': {type:'--', color:'white', hint:'None'},
        'AA': {type:'--', color:'steelblue', hint:'odd'},
        'AE': {type:'--', color:'lightcoral', hint:'at'},
        'AH': {type:'--', color:'seagreen', hint:'hut'},
        'AO': {type:'--', color:'lightskyblue', hint:'ought'},
        'AW': {type:'--', color:'sandybrown', hint:'cow'},
        'AY': {type:'--', color:'gray', hint:'hide'},
        'EH': {type:'--', color:'mediumorchid', hint:'ed'},
        'ER': {type:'--', color:'aquamarine', hint:'hurt'},
        'EY': {type:'--', color:'olivedrab', hint:'ate'},
        'IH': {type:'--', color:'violet', hint:'it'},
        'IY': {type:'--', color:'seashell', hint:'eat'},
        'OW': {type:'--', color:'mistyrose', hint:'oat'},
        'OY': {type:'--', color:'maroon', hint:'toy'},
        'UH': {type:'--', color:'darkkhaki', hint:'hood'},
        'UW': {type:'--', color:'lightcyan', hint:'two'}
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
    const rhymeType = this.rhymeTypes[this.props.model.rhymeType];
    const spanProps = {className: "Word " +  (selected ? 'active' : '')}
    if(rhymeType && rhymeType.color !== 'white')
      spanProps.style = {color: "white", backgroundColor:rhymeType.color};

    return (
      <span ref="wordSpan" {...spanProps} onClick={this.onClick}>
          {this.props.model.text}
          {selected &&
            <WordMenu
              handleWordOptionClick={this.handleWordOptionClick}
              rhymeTypes={this.rhymeTypes}/>
          }
      </span>
    );
  }
}

export default Word;
