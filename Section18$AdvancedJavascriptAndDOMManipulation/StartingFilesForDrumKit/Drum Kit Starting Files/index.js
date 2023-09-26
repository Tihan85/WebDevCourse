var buttons = document.querySelectorAll(".drum");
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        handleClick(true, button);
    });

    document.addEventListener('keydown', function(event) {
        handleClick(false, null, event);
    });
});

function handleClick(clicked, button, event) {
    var letter = null;
    if (clicked === true) {
        letter = button.classList[0];
    } else if (event) {
        letter = event.key;
    }
        switch(letter) {
            case 'w': 
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
            case 'a': 
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
            case 's': 
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;
            case 'd': 
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;
            case 'j': 
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;
            case 'k': 
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;
            case 'l': 
                var kick_bass = new Audio("./sounds/kick-bass.mp3");
                kick_bass.play();
                break;
        }
    
        if (clicked === true) {
            button.style.color = 'white';
            setTimeout(function() {
                button.style.color = '#DA0463';
            }, 500);
        }
    

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

/* var object1 = {
    name: "name1",
    age: 20,
    hasWorkingPermit: true,
    language: ["French", "English"],
    moveSuitcase: function() {
        alert("May I take your suitcase?");
        pickUpSuitcase();
        move();
    }
} */

/* function BellBoy (name, age, hasWorkingPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkingPermit = hasWorkingPermit;
    this.languages = languages;
    this.clean = function() {
        alert("Cleanign in progress...");
    }
}

var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]); */