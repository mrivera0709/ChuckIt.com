//created a function that holds two parameters from the app.js file; this will be called on the concat'd string from the url
function memeImage(jokeData, memeUrl) {

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

  //Created a variable to hold the top text of the meme
  var text1 = '/' + jokeData + '/';

  //Created a variable that concats all of the information to complete the url and retrieve the meme + photo
  var photo = 'https://memegen.link/custom' + text1 + '.jpg?' + 'alt=' + memeUrl;
  console.log(photo);

  //Here we are calling the displayMeme function from app.js 
  displayMeme(photo);


}
