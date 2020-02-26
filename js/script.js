let picture=$(".pic");
let songName=$(".title");
let singer=$(".artist");
let url=$(".link");
let seconds=$(".time");
 
//picture=[""];
//songName=["Next Stage!!","Time Capsule","JUMP AND FLY"];
//singer=["SutoPuri", "Riinu", "Jel"];
//url=["https://open.spotify.com/track/4CTuceahOjQhaEYFtCIciE", "https://open.spotify.com/track/2CKHotRVsdrlWYn17h5lRk","https://open.spotify.com/track/6FwocjvOrDHGQ6ruRyDReD"];
//seconds=[11, 12, 14];

var playlist;
playlist=[picture, songName, singer, url, seconds];

console.log(playlist);
$(".snrButton").click(function() {
    console.log("7");
    var title=$(".title").val();
    $(".titles").append("<p>"+ title + "</p>");
    
});