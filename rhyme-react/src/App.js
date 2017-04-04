import React, { Component } from 'react';
import './App.css';
import Song from './Song.js';
import SongInput from './SongInput.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleSongInput = this.handleSongInput.bind(this);
    this.state = {songText: "In the days of Kings and Queens I was a jester\nTreat me like a God, or they treat me like a leper\nYou see me move back and forth between both\nI'm trying to find a balance\nI'm trying to build a balance\n\nSo now I keep a close eye on my pets\nBecause they make most of they moves off of instinct and sense\nIt's eat, sleep, fuck, and self defense\nSo straight you can set your clocks and place bets\nWait, let's prey on blind, deaf, dumb, dead\nHustle, maybe a couple will love what you said\nMC's drag their feet across a big naked land\nWith an empty bag of seed and a fake shake of hands\nYeah I got some last words, FUCK ALL Y'ALL!\nStop writin' raps and go play volleyball\nGotta journey the world in a hurry\nCause my attorney didn't put enough girls on the jury\nGuilty of droppin' these bombs in the city\nBut I'm innocent, love is the motive that's why I'm killing 'em\nGuilty of settin' my fire in all fifty\nBut I'm innocent, blame it on my equilibrium"};
  }

  handleSongInput(newSongText) {
    this.setState({songText: newSongText});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <SongInput text={this.state.songText} handleInput={this.handleSongInput}/>
            </div>
            <div className="col-md-6">
              <Song text={this.state.songText}/>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
