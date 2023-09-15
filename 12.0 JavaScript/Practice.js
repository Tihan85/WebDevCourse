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