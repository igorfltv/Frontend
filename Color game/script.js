var colors = generateColors(6);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");

init();

resetBtn.addEventListener("click",function(){
    colors = generateColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0 ; i < square.length ; i++){
        square[i].style.background = colors[i];
    }
    this.textContent = "New Colors";
    h1.style.background = "#232323";
});

function init(){
    colorDisplay.textContent = pickedColor;
    for(var i = 0 ; i < square.length ; i++){
        square[i].style.background = colors[i];
        square[i].addEventListener("click",function(){
            var clickedColor=this.style.background;   
            if(clickedColor===pickedColor){
                messageDisplay.textContent = "Correct";
                resetBtn.textContent = "Play again";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            }
            else{
                this.style.background = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });
    }
}

function changeColors(color){
    for(var i = 0 ; i < square.length ; i++){
        square[i].style.background = color;
    }
}

function pickColor(){ 
    return colors[Math.floor(Math.random()*colors.length)];
}

function generateColors(num){
    var arr = [];

    for(var i = 0 ; i < num ; i++){
        arr[i] = randomColor();
    }
    return arr;
}

function randomColor(){
    var red   = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue  = Math.floor(Math.random()*256);

    return ("rgb(" + red+", "+green+", "+blue+")");
}