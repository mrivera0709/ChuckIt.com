//Created on click function that starts on the click
$('#').on('click', function() {

  /*
  this is an example to spling the quote in half I found from StackOverflow,
  if we have time we may try to incorporate this into the meme, if not, we can just dump the entire
  quote into the text1 variable and the memegen api will auto-size the string to fit correctly
  inside the image without any parameters.

  You can visit this link to read and understand the code and how it works
  https://stackoverflow.com/questions/18087416/split-string-in-half-by-word

  var s = "This is a long string";
  var middle = Math.floor(s.length / 2);
  var before = s.lastIndexOf(' ', middle);
  var after = s.indexOf(' ', middle + 1);
  */

  //Created a variable to hold the "api" url
  var url = "#";
  //Created a variable to hold the top text of the meme
  var text1 = '//';
  //Created a variable to hold the bottom text of the meme
  var text2 = '';
  //Created a variable that concats all of the information to complete the url and retrieve the meme + photo
  var photo = 'https://memegen.link/custom' + text1 + text2 + '.jpg?' + 'alt=' + url;
  //Dynamically creating an image tag to hold the meme
  var top = $('<img src=' + photo + '>');
  //Created a variable to contain the jquery location for where the meme will be placed
  var add = $('#');
  //appending the image to the location
  add.append(top);

})
