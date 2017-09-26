//function gets an image url from imgur Api based on search text entered
//in input field. Receives search criteria as a passed in parameter

//DECLARE VARIABLES	
			

//FUNCTION THAT GETS IMAGE
function getImage(imageSearch){
		var clientID = "2a41698dfba2cbf";
		//need to add query url filters for returning still images only and (pagination)
		//number of results.
		var queryUrl = "https://api.imgur.com/3/gallery/search/{{sort}}/{{window}}/{{page}}?q=" + imageSearch;
		console.log(queryUrl); //confirm query url in cosole

		$.ajax({
			url: queryUrl,
			headers: {"Authorization": "Client-ID " + clientID},
			method: "GET",
			dataType: "json"
			// success: function(data){
			// 	console.log(data);
			// }//,
			// error: function(){
			// 	console.log("ERROR");
			// }			
		})
		.done(function(response){
			console.log(response);
			var pics = "";//traverse object and assign the image url to this variable
			console.log(pics);//should output a url string to console
		});
}