
/* Random number generating (Step2) */
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
   var randomNumber = Math.floor(Math.random() * 3);
   var randomChosenColor = buttonColors[randomNumber];
   gamePattern.push(randomChosenColor);
   $(randomChosenColor).animate({opacity: 0.1}, 100).animate({opacity: 1});
   var aud = new Audio("./sounds/" + randomChosenColor + ".mp3"); 
   aud.play();
 }

const btnClicked = $(".btn");
btnClicked.click(function () {
   var classes = btnClicked.attr("class").split(" ");
   var userChosenColor = classes[1];
   alert("button clicked: " + userChosenColor);
});

/* Audio for when buttons are pressed: */
/* $("#blue").click(function (){
    var blueA = new Audio("./sounds/blue.mp3"); 
    blueA.play();
    $("#blue").animate({opacity: 0.1}, 100).animate({opacity: 1});
 });
$("#green").click(function (){
    var greenA = new Audio("./sounds/green.mp3"); 
    greenA.play();
    $("#green").animate({opacity: 0.1}, 100).animate({opacity: 1});
 });
$("#red").click(function (){
   var redA = new Audio("./sounds/red.mp3"); 
   redA.play();
   $("#red").animate({opacity: 0.1}, 100).animate({opacity: 1});
});
$("#yellow").click(function (){
    var yellowA = new Audio("./sounds/yellow.mp3"); 
    yellowA.play();
    $("#yellow").animate({opacity: 0.1}, 100).animate({opacity: 1});
 });
*/