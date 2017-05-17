import React, { Component } from 'react';
import Line from './Line.js';

class Song extends Component {

  constructor(props) {
    super(props);

    this.state = {
      songText: "In the days of Kings and Queens I was a jester\nTreat me like a God, or they treat me like a leper\nYou see me move back and forth between both\nI'm trying to find a balance\nI'm trying to build a balance\n\nSo now I keep a close eye on my pets\nBecause they make most of they moves off of instinct and sense\nIt's eat, sleep, fuck, and self defense\nSo straight you can set your clocks and place bets\nWait, let's prey on blind, deaf, dumb, dead\nHustle, maybe a couple will love what you said\nMC's drag their feet across a big naked land\nWith an empty bag of seed and a fake shake of hands\nYeah I got some last words, FUCK ALL Y'ALL!\nStop writin' raps and go play volleyball\nGotta journey the world in a hurry\nCause my attorney didn't put enough girls on the jury\nGuilty of droppin' these bombs in the city\nBut I'm innocent, love is the motive that's why I'm killing 'em\nGuilty of settin' my fire in all fifty\nBut I'm innocent, blame it on my equilibrium",
      selectedWord: null
    };
  }

  setSelectedWord = (word) => {
      this.setState({selectedWord: word})
  }

  render() {
    const lines = this.props.text.split('\n');
    return (
      <div className="Song">
      <h1>Song Text</h1>
        {lines.map((line, index) =>
          <Line
            key={index}
            text={line}
            setSelectedWord={this.setSelectedWord}
            selectedWord={this.state.selectedWord}
            />
        )}
      </div>
    );
  }
}

export default Song;
