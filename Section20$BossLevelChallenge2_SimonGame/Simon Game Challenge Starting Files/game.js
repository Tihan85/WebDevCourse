/* All the variables to store before hand */
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];
let keyPressed = false;
let level = 0;

/* Random number generating (Step2) */


function nextSequence() {
   var randomNumber = Math.floor(Math.random() * 3);
   var randomChosenColor = buttonColors[randomNumber];
   gamePattern.push(randomChosenColor);
   animations(randomChosenColor);
   level++;
   $("#level-title").html("Level " + level);
 }

/* Animations for when buttons are clicked */
function animations(color){
   var aud = new Audio("./sounds/" + color + ".mp3"); 
   aud.play();
   $("#" + color).animate({opacity: 0.1}, 100).animate({opacity: 1});
};
 
/* Audio for when buttons are pressed: */
$(".btn").click(function () {
   var userChosenColor = $(this).attr("class").split(" ")[1];
   userClickPattern.push(userChosenColor);
   console.log(userClickPattern);
   animations(userChosenColor);
});

/* Step 6 Starting the game: */
$(document).keypress(function(event) {
   if (!keyPressed) {
      nextSequence();
      keyPressed = true;
      // $("#level-title").html("Level " + level);
   }
});

/* Checking the answers */ 
function checkAnswer() {
   currentLevel = level;
}