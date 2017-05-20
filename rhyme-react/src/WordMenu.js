import React, { Component } from 'react';
import WordMenuChoice from './WordMenuChoice.js';
import './WordMenu.css';

class WordMenu extends Component {

  render() {
    const rhymeTypes = Object.getOwnPropertyNames(this.props.rhymeTypes);
    return (
      <div className="WordMenu">
        <ul className="WordMenu__ul">
          {rhymeTypes.map((rhymeType, index) =>
            <WordMenuChoice
              key={index}
              type={rhymeType}
              color={this.props.rhymeTypes[rhymeType].color}
              hint={this.props.rhymeTypes[rhymeType].hint}
              onClick={this.props.handleWordOptionClick}/>
          )}
        </ul>
      </div>
    );
  }
}

export default WordMenu;
