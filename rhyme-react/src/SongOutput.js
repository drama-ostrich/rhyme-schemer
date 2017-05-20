import React, { Component } from 'react';
import './SongOutput.css'

class SongOutput extends Component {

  render() {
    const songJson = JSON.stringify(this.props.songModel);
    return (
      <div className="SongOutput">
        <h1>Json Output</h1>
        <pre className="SongOutput__pre">{songJson}</pre>
      </div>
    );
  }
}

export default SongOutput;
