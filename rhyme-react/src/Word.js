import React, { Component } from 'react';

class Word extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {text: props.text.split(' ')};
  // }

  render() {
    return (
      <span className="Word">
        {this.props.text}
      </span>
    );
  }
}

export default Word;
