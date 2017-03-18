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
  return JSON.stringify(song);
}


$(function(){

  // handlebars template
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  $("#lyrics-input").on('input',function(e){
    var lyrics = e.target.value;
    var songJson = Song(lyrics);

    // update json output
    $('#json-output').html(songJson);

    // render new template
    var html = template(songJson);
    $('#tag-area').html(html);

  });

  $('#json-output').click(function(){
    selectElementText(this);
  });
});
