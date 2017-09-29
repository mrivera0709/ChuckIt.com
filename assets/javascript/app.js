/////DECLARE GLOBAL VARIABLES
	var jokeData = "";
	var imageUrl = "";
	var memeUrl = "";
	var imageSearch = "";
	var newMeme = "";

/////CHUCK SECTION
	//onclick for joke generation. From joke btn
		//calls function from chuck.js file places response into var jokeData
		//target and display joke text on index.html element

$('.material-icons').on('click', function() {
	chuckie();

});

function updateJoke(quote) {
	jokeData = quote;
	$('#joke').html(jokeData);
	console.log(jokeData);
}

/////IMGUR SECTION
	//onclick for image search. Uses imput from text field and search btn event
	// Add the app.js onclick function that calls the getImage(imageSearch) function
	// which passes the search term using the var imageSearch.
$('#imageSearch').on('click', function(){
	imageSearch = $('#search').val();
	console.log(imageSearch);
	getImage(imageSearch);
});

//Add the app.js onclick function calls for
// nextImage() and prevImage()
$('#next').on('click', function(){
	nextImage();
});

$('#back').on('click', function(){
	prevImage();
});

// add the function to app.js which passes variables between imgur.js and app.js functions		
function updateImageUrl(currentPic) {
	imageUrl = currentPic;
	$('#image').attr('src',imageUrl);
	console.log(imageUrl);
}	

/////MEME CREATOR SECTION
	//onclick for meme generation. Uses input from jokeData for meme text and url
	//from imageUrl as image source. Pass in the jokeData and imageUrl as parameters
	//for the function in the meme.js file.
		//place concatenated memeUrl into var memeUrl
			//add memeUrl as src in <img> tag and insert html into index.html element
$('#memeSubmit').on('click', function() {
	memeUrl = imageUrl;
	memeImage(jokeData, memeUrl);
	// $('.collapsible popout').hide();
	
})

	//function that passes photo parameter to newMeme variable in app.js and displays meme generated on screen.
	//also resets the following variables: jokeData, imageSearch, imageUrl, and memeUrl
	//in preparation for next search cycle
function displayMeme(photo) {
	newMeme = photo
	console.log(newMeme);
	//modifies img src val to that of generated meme to display it in DOM
	$('#meme').attr('src', newMeme);
	// //variable resets
	// jokeData = "";
	// imageUrl = "";
	// memeUrl = "";
	// imageSearch = "";
}

/////FIREBASE INTEGRATION FOR SAVING JOKE TEXT AND COMPLETED MEMES. EACH
/////WILL BE USED IN SEPARATE PAGES. ONE AS A LIST OF JOKES AND THE OTHER
/////AS A GALLERY OF CREATED MEMES


/////TEXT2SPEECH
	//timer count down 2000 ms and call function in text2speech.js file
		//if we have time pass the var jokeData as a parameter for the text2Speech
		//function in the text2speech.js file.
