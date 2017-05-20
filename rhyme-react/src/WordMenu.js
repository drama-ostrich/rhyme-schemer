import React, { Component } from 'react';
import WordMenuChoice from './WordMenuChoice.js';
import './WordMenu.css';

class WordMenu extends Component {

  render() {
    const rhymeColors = Object.getOwnPropertyNames(this.props.rhymeColors);
    return (
      <div className="WordMenu">
        <ul className="WordMenu__ul">
          {rhymeColors.map((rhymeType, index) =>
            <WordMenuChoice
              key={index}
              type={rhymeType}
              color={this.props.rhymeColors[rhymeType]}
              onClick={this.props.handleWordOptionClick}/>
          )}
        </ul>
      </div>
    );
  }
}

export default WordMenu;
