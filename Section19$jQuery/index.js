/* $ = jQuery() */

/* Used to check if the jQuery is ready */
    // $(document).ready(function () {
    //     $("h1").css("color", "red");
    // });
    // or putitng the imports/links at the end jsut before the </body> tag will do the same

// $("h1").css("color", "red");

$("button"); // will select all the buttons

/* Getting the value of a css selecetor element: */
console.log($("h1").css("color")); // will return the value

/* Using jQuery to add a class to a tag */
$("h1").addClass("big-title");
$("h1").removeClass("big-title"); // this removes the class

/* Adding multiple classes to a tag */
$("h1").addClass("big-title margin-50"); // Notice space
$("h1").hasClass("margin-50"); // Checks to see if it has the class
console.log($("h1").hasClass("margin-50"));
$("h1").removeClass("big-title margin-50");

$("h1").text("Bye"); // Changes the text of an element
$("button").text("Don't click me") // this updates all the buttons text 
$("button").html("<em>click me</em>"); // this will add html as innerHTML does

/* Manipulating Attributes with jQuery */
$("img").attr("src"); // selects the attribute
console.log($("img").attr("src")); 
$("a").attr("href", "https://www.yahoo.com"); // With a second argument, sets the attribute

// class is also an attribute
$("h1").attr("class");
console.log($("h1").attr("class"));

/* adding event listeners wiht jQuery */
    /* $("h1").click(function () {
        // $("h1").css("color", "purple");
        var currentColor = $("h1").css("color");
        var newColor = (currentColor === "rgb(255, 0, 0)") ? "blue" : "red";
        $("h1").css("color", newColor);
    }); */

/* $("button").click(function () {
    $("h1").css("color", "purple");
}); */
$("button:eq(5)").html("Change h1 color")
$("button:eq(5)").click(function () {
    var currentColor = $("h1").css("color");
    var newColor = (currentColor === "rgb(255, 0, 0)") ? "blue" : "red";
    $("h1").css("color", newColor);
});

$("input").keypress(function (event) {
    console.log(event.key);
    if (event.key === 'c') {
        var currentColor = $("h1").css("color");
        var newColor = (currentColor === "rgb(255, 0, 0)") ? "blue" : "red";
        $("h1").css("color", newColor);
    }
});

/* $(document).keypress(function (event) {
    $("h1").html(event.key);
}); */

var inputList = [];
$(document).keypress(function (event) {
    if (event.key === 'Enter') {
        $("h1").html(inputList.join(''));
        inputList = [];
    } else {
        inputList.push(event.key);
    }
});

/* Simpler way to add eventListener */
$("h1").on("mouseover", function () {
    $("h1").css("color", "purple");
});

$("button:eq(0)").html("Change heading");
$("button:eq(0)").on("click", function (){

    if ($("h1").hasClass("big-title")) {
        $("h1").removeClass("big-title");
    } else {
        $("h1").addClass("big-title");
    }
});

/* How to add new elements on the fly */
/*     $("h1").before("<div><button>New Before</button></div>"); // Adds html before the h1
    $("h1").after("<div><button>New After</button></div>"); // Adds html after the h1
    $("h1").prepend("<button>New Prepend</button>"); // prepends the html to the h1
    $("h1").append("<button>New Append</button>"); // append the html to the h1 */
// the prepend and append will added the html within the element selecet

$("button:eq(1)").html("Add button before");
$("button:eq(1)").on("click", function (){
    if ($("h1 button").length > 0) {
        $("h1 button").remove();
    } else {
        $("h1").before("<button>Button before</button>"); // prepends the html to the h1
    }
});

$("button:eq(2)").html("Add button after");
$("button:eq(2)").on("click", function (){
    if ($("h1 button").length > 0) {
        $("h1 button").remove();
    } else {
        $("h1").after("<button>Button after</button>"); // prepends the html to the h1
    }
});

$("button:eq(3)").html("Prepend button");
$("button:eq(3)").on("click", function (){
    if ($("h1 button").length > 0) {
        $("h1 button").remove();
    } else {
        $("h1").prepend("<button>Prepended Button</button>"); // prepends the html to the h1
    }
});

$("button:eq(4)").html("Appened button");
$("button:eq(4)").on("click", function (){
    if ($("h1 button").length > 0) {
        $("h1 button").remove();
    } else {
        $("h1").append("<button>Appened Button</button>"); // prepends the html to the h1
    }
});