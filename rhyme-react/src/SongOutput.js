import React, { Component } from 'react';
import './SongOutput.css'

class SongOutput extends Component {

  selectText = (e) => {
    var doc = document;
    var element = e.target;
    var range;

    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        let selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
  }

  render() {
    const songJson = JSON.stringify(this.props.songModel);
    return (
      <div className="SongOutput">
        <pre className="SongOutput__pre" onClick={this.selectText}>{songJson}</pre>
      </div>
    );
  }
}

export default SongOutput;
