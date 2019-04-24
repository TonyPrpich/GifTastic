var topics = ["kill bill", "django unchained", "reservoir dogs", "inglorious bastards", "hateful eight", "pulp fiction", "jackie brown"];



function buttonMaker() {


    $("#tarantino-buttons").empty();

    for (var i = 0; i < topics.length; i++) {
        $("#tarantino-buttons").append("<button type=button class='topic-button btn btn-primary'>" + topics[i] + "</button>");
    };


};


buttonMaker();


$("#additional").on("click", function (event) {
    event.preventDefault();
    var userInput = $("#halloween-input").val().trim();


    if (!userInput == " ") {
        topics.push(userInput);
        buttonMaker();
        console.log(topics); //test
        userInput = $("#halloween-input").val(" ");
    }
});


$(document).on("click", ".topic-button", function () {
    $("#halloween-gif").empty();

    var apiKey = "c64ca2f719e54ca5baaaf7946271c6e4";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).html() + "&api_key=" + apiKey + "&limit=10";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(response.data);
        var results = response.data;


        for (var j = 0; j < results.length; j++) {

            var newImage = $("<img>");
            newImage.attr("src", results[j].images.fixed_height_still.url);
            newImage.attr("alt", "missing gif");
            newImage.attr("id", "new-gif" + j);

            $("#halloween-gif").append(newImage);


        }


        var isMoving0 = false;
        $(document).on("click", "#new-gif0", function () {

            if (!isMoving0) {
                $("#new-gif0").attr("src", results[0].images.fixed_height.url);
                isMoving0 = true;
            } else {
                $("#new-gif0").attr("src", results[0].images.fixed_height_still.url);
                isMoving0 = false;
            }

        });


        var isMoving1 = false;
        $(document).on("click", "#new-gif1", function () {

            if (!isMoving1) {
                $("#new-gif1").attr("src", results[1].images.fixed_height.url);
                isMoving1 = true;
            } else {
                $("#new-gif1").attr("src", results[1].images.fixed_height_still.url);
                isMoving1 = false;
            }

        });


        var isMoving2 = false;
        $(document).on("click", "#new-gif2", function () {

            if (!isMoving2) {
                $("#new-gif2").attr("src", results[2].images.fixed_height.url);
                isMoving2 = true;
            } else {
                $("#new-gif2").attr("src", results[2].images.fixed_height_still.url);
                isMoving2 = false;
            }

        });


        var isMoving3 = false;
        $(document).on("click", "#new-gif3", function () {

            if (!isMoving3) {
                $("#new-gif3").attr("src", results[3].images.fixed_height.url);
                isMoving3 = true;
            } else {
                $("#new-gif3").attr("src", results[3].images.fixed_height_still.url);
                isMoving3 = false;
            }

        });


        var isMoving4 = false;
        $(document).on("click", "#new-gif4", function () {

            if (!isMoving4) {
                $("#new-gif4").attr("src", results[4].images.fixed_height.url);
                isMoving4 = true;
            } else {
                $("#new-gif4").attr("src", results[4].images.fixed_height_still.url);
                isMoving4 = false;
            }

        });



        var isMoving5 = false;
        $(document).on("click", "#new-gif5", function () {

            if (!isMoving5) {
                $("#new-gif5").attr("src", results[5].images.fixed_height.url);
                isMoving5 = true;
            } else {
                $("#new-gif5").attr("src", results[5].images.fixed_height_still.url);
                isMoving5 = false;
            }

        });



        var isMoving6 = false;
        $(document).on("click", "#new-gif6", function () {

            if (!isMoving6) {
                $("#new-gif6").attr("src", results[6].images.fixed_height.url);
                isMoving6 = true;
            } else {
                $("#new-gif6").attr("src", results[6].images.fixed_height_still.url);
                isMoving6 = false;
            }

        });


        //gif #7
        var isMoving7 = false;
        $(document).on("click", "#new-gif7", function () {

            if (!isMoving7) {
                $("#new-gif7").attr("src", results[7].images.fixed_height.url);
                isMoving7 = true;
            } else {
                $("#new-gif7").attr("src", results[7].images.fixed_height_still.url);
                isMoving7 = false;
            }

        });



        var isMoving8 = false;
        $(document).on("click", "#new-gif8", function () {

            if (!isMoving8) {
                $("#new-gif8").attr("src", results[8].images.fixed_height.url);
                isMoving8 = true;
            } else {
                $("#new-gif8").attr("src", results[8].images.fixed_height_still.url);
                isMoving8 = false;
            }

        });



        var isMoving9 = false;
        $(document).on("click", "#new-gif9", function () {

            if (!isMoving9) {
                $("#new-gif9").attr("src", results[9].images.fixed_height.url);
                isMoving9 = true;
            } else {
                $("#new-gif9").attr("src", results[9].images.fixed_height_still.url);
                isMoving9 = false;
            }

        });



        var isMoving10 = false;
        $(document).on("click", "#new-gif10", function () {

            if (!isMoving10) {
                $("#new-gif10").attr("src", results[10].images.fixed_height.url);
                isMoving10 = true;
            } else {
                $("#new-gif10").attr("src", results[10].images.fixed_height_still.url);
                isMoving9 = false;
            }

        });


    });



})