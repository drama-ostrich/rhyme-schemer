import WordModel from './WordModel.js';

export default class LineModel{

  constructor(text, index, firstWordIndex) {
    this.text = text;
    this.index = index;
    this.words = this.makeWords(text, firstWordIndex);
  }

  makeWords(text, firstWordIndex){
    return text.split(' ').map(
      (wordText, index) => new WordModel(wordText, index + firstWordIndex)
    )
  }

}
