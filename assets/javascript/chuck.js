//Created a variable that holds the api url
var random = 'https://api.chucknorris.io/jokes/random';

//Created a variable that will hold the response.value (text) returned from the api
var quote = "";

//Created a function to hold the ajax call
function chuckie() {

  //This variable holds the api url
  var queryURL = random;

  //The beginning of the ajax call
  $.ajax({
      url: queryURL,
      method: "GET",
    })
    .done(function(response) {
        //storing the text from the response.value into the variable we created at the top
        quote = response.value;
        //call the function from the main.js file to tie it together
        //created function to talk to app.js
        updateJoke(quote);

      });
    };
