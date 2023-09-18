alert("Something wrong");
window.alert("Something wrong");
var myName = "angela";
var myName = prompt("whats your name");
alert("name is " + myName);

var name = "Tihan";
var name = name.slice(1,3);
console.log(name);
 
alert("Human age: " + ((prompt("What is your dog age") - 2) * 4 + 21));

function getMilk() {
    console.log("move");
    console.log("move");
    console.log("move");
    console.log("Get milk");
    console.log("move");
    console.log("move");
}

getMilk();

function diag() {
   for (let i = 0; i < 5; i++) {   
    alert("Round: " + i);
   }
}
diag();

alert(Math.random())

var name1 = prompt("whats your name?");
var name2 = prompt("whats the other person's name");
var loveScore = (Math.round(((Math.random()) * 100))) + 1;

if (loveScore === 100) {
    alert("Love score: " + loveScore + "%" + " You love each other like Kanye loves Kanye");
} else if (loveScore > 70) {
    alert("Love score: " + loveScore + "%" + " you're good");
} else if (loveScore > 30 && loveScore <= 70){
    alert("Love score: " + loveScore + "%");
} else if (loveScore <=30) {
    alert("Love score: " + loveScore + "%" + " you go together like oil and water");
}

function bmiCalculator (weight, height) {
    var BMI = (Math.round((weight / (Math.pow(height, 2))) * 10)) / 10;
    if (BMI < 18.5) {
        interpretation = "Your BMI is " + BMI + ", so you are underweight."
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        interpretation = "Your BMI is " + BMI + ", so you have a normal weight."
    } else if (BMI > 24.9) {
        interpretation = "Your BMI is " + BMI + ", so you are overweight."
    }
    return interpretation;
}

console.log(bmiCalculator(100, 1.8));

function isLeap(year) {
    var answer = "Not leap year."
    if ((year % 4) === 0){
        answer = "Leap year."
        if ((year % 100) === 0) {
            answer = "Not leap year."
            if ((year % 400) === 0) {
                answer = "Leap year."
            }
        }
    }
    return answer;
}

console.log(isLeap(40));


function whosPaying(names) {
    var rnd = Math.round((Math.random()*(names.length - 1)));
    var out = names[rnd] + " is going to buy lunch today!" 
    return out;
}

