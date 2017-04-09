import React, { Component } from 'react';
import WordMenu from './WordMenu.js';

class Word extends Component {

  constructor(props) {
    super(props);
    this.state = {showMenu: false};
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    // here you know which component is that, so you can call parent method
    this.setState((prevState, props) =>({showMenu: prevState.showMenu === false}));
  }

  render() {
    return (
      <span className={"Word " +  (this.state.showMenu ? 'active' : '')} onClick={this.onClick}>
        {this.props.text}
        {this.state.showMenu &&
          <WordMenu />
        }
      </span>

    );
  }
}

export default Word;
