//my array of topics
var topics = 	["pumpkins", "apples", "donuts", "cider", "witches", 
				"halloween", "ghosts", "halloween candy", "full moon", "vampires"];



function buttonMaker() {

	//empties the div so all the buttons can be rewritten whenever a new array index is included
	$("#halloween-buttons").empty();

	for (var i = 0; i < topics.length; i++) {
		$("#halloween-buttons").append("<button type=button class='topic-button btn btn-primary'>" + topics[i] + "</button>");
	};


};


buttonMaker();




//on-clicik event to accept user's input, append it to the topics array,
//and turn the input into a new button
$("#additional").on("click", function(event) {
	event.preventDefault();
	var userInput = $("#halloween-input").val().trim();

	//if the text input is empty, a new button should NOT be created
	if (!userInput == " ") {
		topics.push(userInput);
		buttonMaker();
		console.log(topics); //test
		userInput = $("#halloween-input").val(" ");
	}
});



/*the on-click event has to be written this way because a $("#target-id").on("click") will only work once
per page load and ignore any updated information (like NEW buttons showing up). This way of writing the on-click
allows for new buttons to appear and have the on-click function still work. The submit button never changes, so
its on-click function is fine the way it is*/
$(document).on("click", ".topic-button", function() {
	$("#halloween-gif").empty(); //empties out previous gifs

	var apiKey = "c64ca2f719e54ca5baaaf7946271c6e4";
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).html() + "&api_key=" + apiKey + "&limit=10";
	

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){
		console.log(response.data); //test

		//targets the URL in the info for api results
		//something is wrong here. can't seem to target what I need out of the object correctly
		//you are pulling up 5 indices when you pull info from the API. 
		//you need to loop through the array to pull out all 5 gif urls.
		//this will be where results[0] is now
		var results = response.data;

		//creates a new <img> tag, then adds a soure to it, and then the alternate title
		//I should change the class an id each gif will receive
		for (var j = 0; j < results.length; j++) {

			var newImage = $("<img>");
			newImage.attr("src", results[j].images.fixed_height_still.url);
			newImage.attr("alt", "missing gif");
			newImage.attr("id", "new-gif" + j);

			$("#halloween-gif").append(newImage);

			
		}
		//when you click on the gif, it needs to go from fixed_height_still.url to fixed_height.url 
		//I CODED THIS IN WITH BRUTE FORCE AT THIS PART BECAUSE I COULDN'T FIGURE OUT HOW TO MAKE IT INTO 
		//A WORKING FUNCTION.
		//I AM VERY ANNOYED WITH MYSELF ABOUT THIS. 

		//for gif #0
		var isMoving0 = false;
		$(document).on("click", "#new-gif0" , function() {

			if (!isMoving0) {
				$("#new-gif0").attr("src", results[0].images.fixed_height.url); //makes the gif move
				isMoving0 = true;
			} else {
				$("#new-gif0").attr("src", results[0].images.fixed_height_still.url); //makes the gif stop
				isMoving0 = false;
			}

		});

		//gif #1
		var isMoving1 = false;
		$(document).on("click", "#new-gif1" , function() {

			if (!isMoving1) {
				$("#new-gif1").attr("src", results[1].images.fixed_height.url); //makes the gif move
				isMoving1 = true;
			} else {
				$("#new-gif1").attr("src", results[1].images.fixed_height_still.url); //makes the gif stop
				isMoving1 = false;
			}

		});

		//gif #2
		var isMoving2 = false;
		$(document).on("click", "#new-gif2" , function() {

			if (!isMoving2) {
				$("#new-gif2").attr("src", results[2].images.fixed_height.url); //makes the gif move
				isMoving2 = true;
			} else {
				$("#new-gif2").attr("src", results[2].images.fixed_height_still.url); //makes the gif stop
				isMoving2 = false;
			}

		});

		//gif #3
		var isMoving3 = false;
		$(document).on("click", "#new-gif3" , function() {

			if (!isMoving3) {
				$("#new-gif3").attr("src", results[3].images.fixed_height.url); //makes the gif move
				isMoving3 = true;
			} else {
				$("#new-gif3").attr("src", results[3].images.fixed_height_still.url); //makes the gif stop
				isMoving3 = false;
			}

		});


		//gif #4
		var isMoving4 = false;
		$(document).on("click", "#new-gif4" , function() {

			if (!isMoving4) {
				$("#new-gif4").attr("src", results[4].images.fixed_height.url); //makes the gif move
				isMoving4 = true;
			} else {
				$("#new-gif4").attr("src", results[4].images.fixed_height_still.url); //makes the gif stop
				isMoving4 = false;
			}

		});


		//gif #5
		var isMoving5 = false;
		$(document).on("click", "#new-gif5" , function() {

			if (!isMoving5) {
				$("#new-gif5").attr("src", results[5].images.fixed_height.url); //makes the gif move
				isMoving5 = true;
			} else {
				$("#new-gif5").attr("src", results[5].images.fixed_height_still.url); //makes the gif stop
				isMoving5 = false;
			}

		});


		//gif #6
		var isMoving6 = false;
		$(document).on("click", "#new-gif6" , function() {

			if (!isMoving6) {
				$("#new-gif6").attr("src", results[6].images.fixed_height.url); //makes the gif move
				isMoving6 = true;
			} else {
				$("#new-gif6").attr("src", results[6].images.fixed_height_still.url); //makes the gif stop
				isMoving6 = false;
			}

		});


		//gif #7
		var isMoving7 = false;
		$(document).on("click", "#new-gif7" , function() {

			if (!isMoving7) {
				$("#new-gif7").attr("src", results[7].images.fixed_height.url); //makes the gif move
				isMoving7 = true;
			} else {
				$("#new-gif7").attr("src", results[7].images.fixed_height_still.url); //makes the gif stop
				isMoving7 = false;
			}

		});


		//gif #8
		var isMoving8 = false;
		$(document).on("click", "#new-gif8" , function() {

			if (!isMoving8) {
				$("#new-gif8").attr("src", results[8].images.fixed_height.url); //makes the gif move
				isMoving8 = true;
			} else {
				$("#new-gif8").attr("src", results[8].images.fixed_height_still.url); //makes the gif stop
				isMoving8 = false;
			}

		});


		//gif #9
		var isMoving9 = false;
		$(document).on("click", "#new-gif9" , function() {

			if (!isMoving9) {
				$("#new-gif9").attr("src", results[9].images.fixed_height.url); //makes the gif move
				isMoving9 = true;
			} else {
				$("#new-gif9").attr("src", results[9].images.fixed_height_still.url); //makes the gif stop
				isMoving9 = false;
			}

		});


	});



})