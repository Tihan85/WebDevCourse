var buttons = document.querySelectorAll(".drum");
buttons.forEach(function(button) {
    button.addEventListener('click', handleClick)
});

function handleClick() {

    var clicked = this.innerHTML;
    switch(clicked) {
        case 'w': 
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a': 
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case 's': 
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd': 
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j': 
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case 'k': 
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case 'l': 
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
    }

    this.style.color = 'white';
    setTimeout(() => {
        this.style.color = '#DA0463';
    }, 500);
    

/*     var audio = new Audio("./sounds/tom-1.mp3");
    audio.play(); */

}
/* 
for (var i = 0; i < document.querySelectorAll(.drum).length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
 */

// Annonymous function:

/* document.querySelector("button").addEventListener('click', function () {
    alert("I got clicked");
}); */


/* Calculator challenge:
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function calc(num1, num2, operator) {
    return operator(num1, num2);
}
*/