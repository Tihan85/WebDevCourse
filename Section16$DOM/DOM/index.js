// alert("Hello");
// document.querySelector("h1").innerHTML = "Goodbye";

var button = document.querySelector(".btn");
button.addEventListener("click", function(){
    document.querySelector("#title").classList.toggle("huge");

    setTimeout(function()
    {
        document.querySelector("#title").classList.toggle("huge");
    }, 3000);
});