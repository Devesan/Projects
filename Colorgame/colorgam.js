var color = generatRandomColors(6);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colordisplay = document.getElementById("colordisplay");
var msgdisplay = document.querySelector("#msg");
var rst = document.querySelector("#rst");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var numofSquares = 6;

easy.addEventListener("click",function(){
  h1.style.backgroundColor = "steelblue";
  hard.classList.remove("selected");
  easy.classList.add("selected");
  numofSquares = 3
  color= generatRandomColors(numofSquares);
  pickedColor = pickColor();
  colordisplay.textContent = pickedColor;
  for(var i =0 ;i<squares.length ;i++){
    if(color[i]){
      squares[i].style.backgroundColor = color[i];
        }
    else{
squares[i].style.display="none";
    }
  }
})
hard.addEventListener("click",function(){
  h1.style.backgroundColor = "steelblue";
  easy.classList.remove("selected");
hard.classList.add("selected");
numofSquares = 6;
color= generatRandomColors(numofSquares);
pickedColor = pickColor();
colordisplay.textContent = pickedColor;
for(var i =0 ;i<squares.length ;i++){

    squares[i].style.backgroundColor = color[i];
    squares[i].style.display = "block";
}
})
colordisplay.textContent = pickedColor;
for(var i =0;i<squares.length;i++){
  squares[i].style.backgroundColor = color[i];

  squares[i].addEventListener("click",function(){
    var selectedColor=this.style.backgroundColor;

    if(selectedColor===pickedColor){
      msgdisplay.textContent = "Correct";
      changeColors(selectedColor);
      rst.textContent = "Play Again ?";
    }
    else{
      this.style.backgroundColor = "#232323";
      msgdisplay.textContent = "Try Again!";
    }
    });
}

function changeColors(colors){
  for( var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors;
    h1.style.backgroundColor = colors;
  }
}
function pickColor(){
  var random = Math.floor(Math.random() * color.length);
  return color[random];
}

function generatRandomColors(num){
  var arr=[];
    for(var i=0;i<num;i++){
      arr.push(randomColor());
    }
  return arr;
}
function randomColor(){
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
  return "rgb("+r+ ", " +g+ ", "+b+")";
}

rst.addEventListener("click",function(){
    rst.textContent = "New Colors ";
    color=generatRandomColors(numofSquares);
    pickedColor=pickColor();
    colordisplay.textContent = pickColor();
    for(var i = 0; i<squares.length;i++){
      squares[i].style.backgroundColor = color[i];
    }
    h1.style.backgroundColor = "steelblue";
    msgdisplay.textContent = "";
})
