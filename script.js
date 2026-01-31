var buttonel = document.querySelector(".btn");
var divel = document.querySelector(".mydiv");

var colors = ["red", "gold", "blue", "green","black"];
var i = 0;
buttonel.onclick = function() {
    // logic

    divel.style.backgroundColor = colors[i]; //red
    i++;

    if ( i == 5){
        i = 0;
    }
}