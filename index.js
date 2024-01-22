var randomnumber1 = Math.floor((Math.random()*6)+1);
var randomnumber2 = Math.floor(Math.random()*6)+1;
var imageoneadres = "images/dice"+randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", imageoneadres);

var image2 = "images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", image2);


if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS"
}
else if(randomnumber2>randomnumber1)
{
    document.querySelector("h1").innerHTML = "PLAYE 2 WINS";
}
else
{
    document.querySelector("h1").innerHTML = "DRAW!";
}