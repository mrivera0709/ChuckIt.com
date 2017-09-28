/////DECLARE GLOBAL VARIABLES
	var jokeData = "";
	var imageUrl = "";
	var memeUrl = "";
	var imageSearch = "";

/////CHUCK SECTION
	//onclick for joke generation. From joke btn
		//calls function from chuck.js file places response into var jokeData
		//target and display joke text on index.html element
		$('#').on('click' function() {
			jokeData = chuckie();
 		$('#joke').innerHTML(jokeData);
});


/////IMGUR SECTION
	//onclick for image search. Uses imput from text field and search btn event
		//calls function from imgur.js file places response into var imageUrl
		imageUrl = getImage(imageSearch);
		//target and display image in index.html crousel element. Pass in the
		//imageSerarch value as a paramenter for the function in the imgur.js file.

		//how are we going to select the image to use????

/////MEME CREATOR SECTION
	//onclick for meme generation. Uses input from jokeData for meme text and url
	//from imageUrl as image source. Pass in the jokeData and imageUrl as parameters
	//for the function in the meme.js file.
		//place concatenated memeUrl into var memeUrl
			//add memeUrl as src in <img> tag and insert html into index.html element
			$('#').on('click', function (jokeData, memeUrl) {
				memeUrl = memeImage();
				$('.card-image').innerHTML(memeUrl);
			})

/////FIREBASE INTEGRATION FOR SAVING JOKE TEXT AND COMPLETED MEMES. EACH
/////WILL BE USED IN SEPARATE PAGES. ONE AS A LIST OF JOKES AND THE OTHER
/////AS A GALLERY OF CREATED MEMES


/////TEXT2SPEECH
	//timer count down 2000 ms and call function in text2speech.js file
		//if we have time pass the var jokeData as a parameter for the text2Speech
		//function in the text2speech.js file.
