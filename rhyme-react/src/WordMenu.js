import React, { Component } from 'react';

class WordMenu extends Component {

  constructor(props) {
    super(props);
    var rhymeTypes =
    [
        'AA',
        'AE',
        'AH',
        'AO',
        'AW',
        'AY',
        'EH',
        'ER',
        'EY',
        'IH',
        'IY',
        'OW',
        'OY',
        'UH',
        'UW',
      ];
    this.state = {rhymeTypes: rhymeTypes};
  }

  render() {
    return (
      <div className="WordMenu">
        <ul>
          {this.state.rhymeTypes.map((sound, index) =>
            <li key={index}>{sound}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default WordMenu;
