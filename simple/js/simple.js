function selectElementText(el, win) {
    win = win || window;
    var doc = win.document, sel, range;
    if (win.getSelection && doc.createRange) {
        sel = win.getSelection();
        range = doc.createRange();
        range.selectNodeContents(el);
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (doc.body.createTextRange) {
        range = doc.body.createTextRange();
        range.moveToElementText(el);
        range.select();
    }
}


var Word = function(wordText, pos, last){
  var word = {
    type: last ? 'choice' : 'display', // choice, display, or root
    text: wordText,
    position: pos,
    rhyme: 1,
  }
  return word
}

var Line = function(lineText){
  var line = {
    text: lineText,
    words: []
  }
  var words = lineText.split(" ");
  for (var i = 0; i < words.length; i++){
    line.words.push(Word(words[i], i, i == words.length-1));
  }

  return line;
}

var Song = function(songText){
  var song = {
    lines: []
  }
  var lines = songText.split('\n');
  for (var i=0; i < lines.length; i++){
    song.lines.push(Line(lines[i]));
  }
  return song;
}

function updateOutput(eventOrString){
  var lyrics = typeof eventOrString === "string" ? eventOrString : event.target.value;
  var songJson = Song(lyrics);

  // update json output
  var jsonString = JSON.stringify(songJson);
  $('#json-output').html(jsonString);
  $('#json-output-format').html(jsonString.split(',').join(',<br>'))

  // render new template
  var html = template(songJson);
  $('#tag-area').html(html);

}

var exampleLyrics = "In the days of Kings and Queens I was a jester\nTreat me like a God, or they treat me like a leper\nYou see me move back and forth between both\nI'm trying to find a balance\nI'm trying to build a balance\n\nSo now I keep a close eye on my pets\nBecause they make most of they moves off of instinct and sense\nIt's eat, sleep, fuck, and self defense\nSo straight you can set your clocks and place bets\nWait, let's prey on blind, deaf, dumb, dead\nHustle, maybe a couple will love what you said\nMC's drag their feet across a big naked land\nWith an empty bag of seed and a fake shake of hands\nYeah I got some last words, FUCK ALL Y'ALL!\nStop writin' raps and go play volleyball\nGotta journey the world in a hurry\nCause my attorney didn't put enough girls on the jury\nGuilty of droppin' these bombs in the city\nBut I'm innocent, love is the motive that's why I'm killing 'em\nGuilty of settin' my fire in all fifty\nBut I'm innocent, blame it on my equilibrium";

var template; // Handlebar template

$(function(){

  var source = $("#lyrics-template").html();
  template = Handlebars.compile(source);

  $("#lyrics-input").on('input',updateOutput);

  $('#json-output').click(function(){
    selectElementText(this);
  });

  updateOutput(exampleLyrics);
  $("#lyrics-input").val(exampleLyrics)
});
