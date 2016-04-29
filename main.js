$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!

  // for every p in index.html
  var pTags = document.getElementsByTagName('p');
  for (var i = 2 ; i < pTags.length ; i++) {
    var $p = $(pTags[i]);

    // find the text inside
    var text = $p.text();
    // For debugging
    // console.log("convert pTags[i] into jQuery: " + text);

    // and use split to convert it into an array of words
    var words = text.trim().split(" ");
    // For debugging
    // console.log(words);

    $p.html('');

    // and add span each
    for (var j = 0 ; j < words.length ; j++) {
        var word = '<span>' + words[j] + '</span>';
        $p.append(word);
    }
  }




  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

  $span = $('span');

  setInterval(function() {
    for (var i = 0 ; i < $span.length ; i++) {
    if (i % 2 === 0) {
        $span.eq(i).css('color', getRandomColor());
    } else {
        $span.eq(i).css('color', getRandomColor());
    }
  }
  }, 1000);



});

