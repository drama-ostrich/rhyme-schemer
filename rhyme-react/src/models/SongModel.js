import LineModel from './LineModel.js'
export default class SongModel{

  constructor(text) {
    this.text = text;
    this.lines = this.makeLines(text);
  }

  makeLines(text){
    var currentWordIndex = 0;

    // return array of LineModel objects
    return text.split('\n').map(
      (lineText, index) => {
        let lineModel = new LineModel(lineText, index, currentWordIndex);
        currentWordIndex += lineText.split(' ').length;
        return lineModel;
      }
    );
  }

}
