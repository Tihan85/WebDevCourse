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

// Calculating the BMI of someone:

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

// Checking for leap years:

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

// Who's paying the bill:

function whosPaying(names) {
    var rnd = Math.round((Math.random()*(names.length - 1)));
    var out = names[rnd] + " is going to buy lunch today!" 
    return out;
}

// FizzBuzz Game thingy:

var output = [];
var count = 1;

function fizzBuzz() {
        if ((count%3) == 0 && (count % 5) != 0) {
            output.push("Fizz");
        } else if ((count%5) == 0 && (count%3) != 0) {
            output.push("Buzz");
        } else if ((count%3) == 0 && (count%5) == 0 && count != 0) {
            output.push("FizzBuzz")
        } else {
            output.push(count)
        }
        console.log(output);
    count++;
    }

    // FizzBuzz Game thingy:

var output = [];
var count = 1;

function fizzBuzz() {
    while (count <= 100) {
        if ((count%3) == 0 && (count % 5) != 0) {
            output.push("Fizz");
        } else if ((count%5) == 0 && (count%3) != 0) {
            output.push("Buzz");
        } else if ((count%3) == 0 && (count%5) == 0 && count != 0) {
            output.push("FizzBuzz")
        } else {
            output.push(count)
        }
    count++;
    console.log(output);
    }
}

// While loops:

var count = 99;

while (count >= 0) {
    if (count == 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");
    } else if (count == 1) {
        console.log("1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.")
    } else {
    console.log(count + " bottles of beer on the wall, " + count + " bottles of beer.\nTake one down and pass it around, " + (count-1) + " bottles of beer on the wall");
    }
    count--;
}

// Fibonacci Generator:

function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        //Write your code here:
        var output = [];
        for (var i = 0; i < n; i++) {
            if (i == 0 || i == 1) {
                output[i] = i;
            } else {
                var add = output[i - 2] + output[i - 1];
                output[i] = add;
            }
        }
        //Return an array of fibonacci numbers starting from 0.
        return  output;
    //Do NOT change any of the code below 👇
    }
    
    