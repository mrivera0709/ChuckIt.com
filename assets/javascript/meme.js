//Created on click function that starts on the click
$('#').on('click', function() {

  //Created a variable to hold the "api" url
  var url = "http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg"
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
