import React, { Component } from 'react';
import './SongInput.css'

class SongInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: this.props.text
    };
  }

  btnClick = (e) => {
    this.props.handleInput(this.state.inputText);
  }

  inputChange = (e) => {
    this.setState({inputText: e.target.value})
  }

  render() {
    const showInputClass = this.props.showInput ? "show-input" : ""
    return (
      <div className={"SongInput " + showInputClass}>
        <h3>Paste Here:</h3>
        <br/>
        <textarea
          id="SongInput__textarea"
          className="SongInput__textarea"
          onChange={this.inputChange}
          defaultValue={this.props.text}></textarea>
        <br/>
        <button onClick={this.btnClick} className="btn btn-default">Go</button>
      </div>
    );
  }
}

export default SongInput;
