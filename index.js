//generate first Dice Number
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random numbers 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //generates file name dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //generate the images sourcefile

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


//generate second Dice Number
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //generates file name dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceImage2; //generate the images sourcefile

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


//Compare and Print winner
if (randomNumber1 > randomNumber2 ){
  document.querySelector("h1").innerHTML="Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2 ){
  document.querySelector("h1").innerHTML="Player 2 Wins!"
}
else {
  document.querySelector("h1").innerHTML="It's a Draw"
}
