import React, { Component } from 'react';
import './WordMenuChoice.css';

class WordMenuChoice extends Component {

  handleOnClick = (e) => {
    this.props.onClick(e.target.value);
  }

  render() {
    return (
      <li className="WordMenuChoice" >
        <button className="btn btn-default"
          style={{backgroundColor: this.props.color}}
          onClick={this.handleOnClick}
          value={this.props.type}>{this.props.type}</button>
          <span>hey</span>
      </li>
    );
  }
  
}
export default WordMenuChoice;
