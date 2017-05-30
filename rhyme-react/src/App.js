import React, { Component } from 'react';
import './App.css';
import Song from './Song.js';
import SongInput from './SongInput.js';
import SongOutput from './SongOutput.js';
import SongModel from './models/SongModel.js'
import Header from './Header.js'

class App extends Component {

  constructor(props) {
    super(props);

    var defaultSongText = "In the days of Kings and Queens I was a jester\nTreat me like a God, or they treat me like a leper\nYou see me move back and forth between both\nI'm trying to find a balance\nI'm trying to build a balance\n\nSo now I keep a close eye on my pets\nBecause they make most of they moves off of instinct and sense\nIt's eat, sleep, fuck, and self defense\nSo straight you can set your clocks and place bets\nWait, let's prey on blind, deaf, dumb, dead\nHustle, maybe a couple will love what you said\nMC's drag their feet across a big naked land\nWith an empty bag of seed and a fake shake of hands\nYeah I got some last words, FUCK ALL Y'ALL!\nStop writin' raps and go play volleyball\nGotta journey the world in a hurry\nCause my attorney didn't put enough girls on the jury\nGuilty of droppin' these bombs in the city\nBut I'm innocent, love is the motive that's why I'm killing 'em\nGuilty of settin' my fire in all fifty\nBut I'm innocent, blame it on my equilibrium";

    var songModel = new SongModel(defaultSongText);

    this.state = {
      songModel: songModel,
      showInput: false
    };
  }

  handleSongInput = (newSongText) => {
    var songModel = new SongModel(newSongText);
    this.setState({songModel: songModel, showInput: false});
  }

  

  handleRhymeChoice = (rhymeType, wordIndex) => {

    // Song model state mutator
    // Find the one word that was updated
    // change its rhymeType to the selected rhymeType

    this.setState((prevState) => {
      let lines = prevState.songModel.lines;
      for (let i=0; i<lines.length; i++){
        let words = lines[i].words;
        for (let i=0; i<words.length; i++){
          let word = words[i];
          if(word.index === wordIndex){
            word.rhymeType = rhymeType;
          }
        }
      }
      return prevState;
    });
  }

  clickNewSong = () => {
    this.setState({showInput: true});
  }

  clickEdit = () => {
    this.setState({showInput: false});
  }


  render() {
    return (
      <div className="App">
      <Header
        clickNewSong={this.clickNewSong}
        clickEdit={this.clickEdit}
        showInput={this.state.showInput}/>
        <div className="container">

          <div className="input-overlay">
            <div className="row">
              <div className="col-md-12">
                <SongInput
                  showInput={this.state.showInput}
                  text={this.state.songModel.text}
                  handleInput={this.handleSongInput}/>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2">

            </div>
            <div className="col-md-6">
              <Song model={this.state.songModel} handleRhymeChoice={this.handleRhymeChoice}/>
            </div>
            <div className="col-md-4">
              <SongOutput songModel={this.state.songModel}/>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
