# GifTastic
In this assignment, I used the GIPHY API to make a dynamic web page that populates with gifs of your choice. To finish this task, I used the GIPHY API, JavaScript, and jQuery to change the HTML of the site.

I initialized the page with 7 topics of my own.

User can type in to the input box in order to add on new topics.  These topics may be clicked in order to populate the page with 10 gifs from giphy.

Gifs will initialize as stills with their ratings beneath them.  Once clicked, the gif will run until clicked again.

<h3>Notes</h3>
I noticed that you cant call a dynamically made element when calling its id with jquery.  To remedy this, I simply called the document $(document), with an extra parameter specifying which buttons it should listen to in the future should they present themselves.  Ex: $(document).on("click", #dynamic-button, function())

<h3>Link to deployed GitHub site</h3>
<a href="https://edwardmara.github.io/GifTastic/">edwardmara.github.io</a>



