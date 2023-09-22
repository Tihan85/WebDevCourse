var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

var imEle1 = document.querySelector(".img1");
var imEle2 = document.querySelector(".img2");

switch(randomNumber1) {
    case 1:
        imEle1.src = "./images/dice1.png";
        break;
    case 2:
        imEle1.src = "./images/dice2.png";
        break;
    case 3:
        imEle1.src = "./images/dice3.png";
        break;
    case 4:
        imEle1.src = "./images/dice4.png";
        break;
    case 5:
        imEle1.src = "./images/dice5.png";
        break;
    case 6:
        imEle1.src = "./images/dice6.png";
        break;
}

switch(randomNumber2) {
    case 1:
        imEle2.src = "./images/dice1.png";
        break;
    case 2:
        imEle2.src = "./images/dice2.png";
        break;
    case 3:
        imEle2.src = "./images/dice3.png";
        break;
    case 4:
        imEle2.src = "./images/dice4.png";
        break;
    case 5:
        imEle2.src = "./images/dice5.png";
        break;
    case 6:
        imEle2.src = "./images/dice6.png";
        break;
}

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "&#128681 Player 1 wins";
} 
if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins &#128681";
} 
if(randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
} 