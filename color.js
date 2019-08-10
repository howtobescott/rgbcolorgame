var numSquare = 6;
var colors = [];
var h1 = document.querySelector('h1');
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById('message');
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
  setUpButton();
  setUpSquares();
  reset();
}

function setUpButton() {
  for (var i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener("click", function() {
      modeButton[0].classList.remove("selected");
      modeButton[1].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numSquare = 3;
      } else {
        numSquare = 6;
      }
      reset();
    })
  }
}

function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    //Initial color to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function() {
      //Get color of picked sqaure
      var clickedColor = this.style.backgroundColor
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        resetButton.textContent = "Play again"
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}


function reset() {
  //generate new color
  colors = generateRandomColors(numSquare);
  //pick new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color on display
  colorDisplay.textContent = pickedColor;
  //change h1 to default color
  h1.style.backgroundColor = "steelblue";
  //Change message
  messageDisplay.textContent = "";
  resetButton.textContent = "New colors";
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
}

resetButton.addEventListener("click", function() {
  //generate new color
  colors = generateRandomColors(numSquare);
  //pick new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color on display
  colorDisplay.textContent = pickedColor;
  //change h1 to default color
  h1.style.backgroundColor = "steelblue";
  //Change message
  messageDisplay.textContent = "";
  resetButton.textContent = "New colors";
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
})



function changeColors(color) {
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.background = color;
  };
};

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generateRandomColors(num) {
  //make array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color + push into array
    arr.push(randomColor());
  }
  //return array
  return arr;
};

function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "red" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "red" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  //Return random rgb
  return "rgb(" + r + ", " + g + ", " + b + ")";
};
