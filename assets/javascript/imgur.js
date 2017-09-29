//function gets an image url from imgur Api based on search text entered
//in input field. Receives search criteria as a passed in parameter

//DECLARE VARIABLES	
	var pics = []; //holds the url array.
	var currentPic = ""; //holds the current url selected
	var navIndex = 0;
	var obj = []; //holds the json response.
	var count = 0; //used to limit the number of urls that will be added to the pics[].	

//FUNCTION THAT GETS IMAGE
function getImage(imageSearch){
	
	var clientID = "2a41698dfba2cbf";
	//query url concatenation
	var queryUrl = "https://api.imgur.com/3/gallery/search/{{sort}}/{{window}}/{{page}}?q=" + imageSearch + "&q_type=jpg&q_not=album";
	console.log(queryUrl); //confirms query url in cosole

	$.ajax({
		url: queryUrl,
		headers: {"Authorization": "Client-ID " + clientID},
		method: "GET",
		dataType: "json"						
	})
	.done(function(response){
		obj = response;
		console.log(queryUrl);
		console.log(obj);
		console.log(pics);
		
		//loop through json obeject and pull image urls for user to select
		for (var i = 0; count < 20; i++) {
			//imugr json object properties are not standardized. Conditional statements are used to
			//target the appropriate objects in the array and avoid property undefined errors
			if (typeof obj.data[i].images === "undefined") { //checks if images property returns undefined
				console.log("bad json. no images prop ID: " + obj.data[i].id);//console log error message and skip object in array
			//confirms images property exixts and evaluates url file extension	
			} else if (typeof obj.data[i].images != "undefined") {
				var urlString2 = obj.data[i].images[0].link; //assigned current url string
				var gif = urlString2.includes(".gif"); //returns true if .gif extension exists in url string
				console.log(gif);
				var mp4 = urlString2.includes(".mp4"); //returns true if .mp4 extention exists in url string
				console.log(mp4);
				//checks to see if either .gif or .mp4 extension checks are true and skips the url
				if (gif === true || mp4 === true) {
					console.log("Skipped. File is a gif or video.");
				} else {
				console.log(obj.data[i].images[0].link);
				count ++;
				//passed all above conditions and pushes the url into array for adding to html
				pics.push(obj.data[i].images[0].link); 
				}
				
			}
			
		}
		console.log(pics);
		console.log(count);
		//call function to update global url array variable in app.js
		currentPic = pics[navIndex];
		updateImageUrl(currentPic);


	});	
}

//FUNCTION THAT CHANGES THE <IMG> SOURCE VALUE IN THE IMAGE DISPLAY DIV +1 INDEX VAL.
//RESETS TO INDEX TO 0 IF EXCEEDS INDEX 19.
function nextImage(){
	navIndex ++;
	if (navIndex > 19){
		navIndex = 0;
	}
	currentPic = pics[navIndex];
	updateImageUrl(currentPic);
}

//FUNCTION THAT CHANGES THE <IMG> SOURCE VALUE IN THE IMAGE DISPLAY DIV -1 INDEX VAL.
//RESETS TO INDEX TO 19 IF INDEX < 0.
function prevImage(){
	navIndex --;
	if (navIndex < 0) {
		navIndex = 19
	}
	currentPic = pics[navIndex];
	updateImageUrl(currentPic);
}