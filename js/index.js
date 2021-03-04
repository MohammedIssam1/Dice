var randomNumPl1 = Math.floor(Math.random() * 6 + 1);
var randomNumPl2 = Math.floor(Math.random() * 6 + 1);
document.querySelector(".img1").setAttribute("src", "pics/dice" + randomNumPl1 + ".png");
document.querySelector(".img2").setAttribute("src", "pics/dice" + randomNumPl2 + ".png");
if(randomNumPl1 > randomNumPl2){
    document.querySelector(".whoWin").innerHTML = "🚩 Play 1 Wins!";
}
else if(randomNumPl1 < randomNumPl2){
    document.querySelector(".whoWin").innerHTML = "🚩 Play 2 Wins!"
}
else if(randomNumPl1 == randomNumPl2){
    document.querySelector(".whoWin").innerHTML = "DRAW!";
}else{
    document.querySelector(".whoWin").innerHTML = "ERROR!";
}