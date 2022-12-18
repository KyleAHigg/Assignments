document.getElementById("square").addEventListener("mouseover" , function() {
    document.getElementById("square").style.backgroundColor = "blue";
});
document.getElementById("square").addEventListener("b" , function() {
    document.getElementById("square").style.backgroundColor = "blue";
});
    
document.getElementById("square").addEventListener("mouseout", function() {
    document.getElementById("square").style.backgroundColor = "black";
});

document.getElementById("square").addEventListener("mousedown", function(){
    document.getElementById("square").style.backgroundColor = "red";
})

document.getElementById("square").addEventListener("mouseup", function (){
    document.getElementById("square").style.backgroundColor = "yellow";
})

document.getElementById("square").addEventListener("dblclick", function (){
    document.getElementById("square").style.backgroundColor = "green";
})

window.addEventListener("wheel", function (){
    document.getElementById("square").style.backgroundColor = "orange";
})


var colorPick = function(key){
    if (key.keyCode == 82) {
        square.style.backgroundColor = "red"
        console.log("r")
    } else if(key.keyCode == 66) {
        square.style.backgroundColor = "blue"
    } else if(key.keyCode == 89 ){
        square.style.backgroundColor = "yellow"
    } else if(key.keyCode == 71 ){
        square.style.backgroundColor = "green"
    } else if (key.keyCode == 79 ) {
        square.style.backgroundColor = "orange"
    } else {console.log ("no")}
}

window.addEventListener("keyup", colorPick) 