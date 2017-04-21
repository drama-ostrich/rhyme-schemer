import React, { Component } from 'react';
import WordMenu from './WordMenu.js';

class Word extends Component {

  constructor(props) {
    super(props);

    var rhymeColors =
    {
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

    this.state = {showMenu: false, rhymeType: null, rhymeColors: rhymeColors};
  }

  handleWordOptionClick = (choice) => {
      choice = choice !== '--' ? choice : null;
      this.setState({rhymeType: choice});
  }

  onClick = (e) => {
    // here you know which component is that, so you can call parent method
    this.setState((prevState, props) =>({showMenu: prevState.showMenu === false}));
  }

  render() {
    const wordColor = this.state.rhymeType ? this.state.rhymeColors[this.state.rhymeType] : null;
    const spanProps = {
      className: "Word " +  (this.state.showMenu ? 'active' : '')
    }
    if(wordColor && wordColor != 'white') spanProps.style = {color: "white", backgroundColor:wordColor};

    return (
      <span {...spanProps} onClick={this.onClick}>

          {this.props.text}

          {this.state.showMenu &&
            <WordMenu
              handleWordOptionClick={this.handleWordOptionClick}
              rhymeColors={this.state.rhymeColors}/>
          }
      </span>

    );
  }
}

export default Word;
