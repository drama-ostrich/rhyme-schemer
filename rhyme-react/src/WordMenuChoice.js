import React, { Component } from 'react';

class WordMenuChoice extends Component {

  // constructor(props) {
  //   super(props);
  // }

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
      </li>
    );
  }
}
export default WordMenuChoice;
