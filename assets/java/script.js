var topics = ["baseball", "golf", "football", "basketball", "hockey", "star trek", "space"];

//create a function that takes in the topic array and creates a button for each topic
function renderButtons(array) {
    //iterate through topic array and create a new button for each
    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button>");
        //add class dynamically to each button
        //will be used to differentiate a click on a topic button vs user input
        newButton.addClass("topic");
        newButton.val(array[i]);
        newButton.text(array[i]);
        //append the button to the nav-bar
        $("#nav-bar").append(newButton);
    }
}


//event listener for topic buttons only
$(document).on("click", ".topic", function () {
    //assign topic of button to variable topic
    var topic = $(this).val();
    console.log(topic);

    //construct a url to search the topic in Giphy
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=Ka67NHfQKXjfjmW7oWB4Bz6mWJtReAs1&limit=10";

    //AJAX GET
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        //after it "gets", then...
        .then(function (response) {
            console.log(response);
            var results = response.data;

            //iterate through results array
            //filter r rated content
            for (var i = 0; i < results.length; i++) {
                if (results[i].rating !== "r") {
                    var rating = results[i].rating;
                    var gifDiv = $("<div>");
                    var imageGif = $("<img>");
                    imageGif.attr("src", results[i].images.fixed_height_still.url);
                    var para = $("<p>").text("Rating: " + rating);
                    gifDiv.append(para, imageGif);
                    $("#gifs").prepend(gifDiv);
                }
            }
        });
});






