// Dicee Player 1..........>>>>>

var randomNumber1 = Math.floor(Math.random()*6+1);
var image1 = "image/dice"+randomNumber1+".png";
var img1=document.querySelector("img.img1");
img1.setAttribute("src",image1);


// Dicee Player 2..........>>>>>
var randomNumber2 = Math.floor(Math.random()*6+1);
var image2 = "image/dice"+randomNumber2+".png";
var img2 = document.querySelector("img.img2");
img2.setAttribute("src",image2);

// Winner........>>>>>>>>>>>

function winner(player1,player2){

if (player1>player2){
    return "🚩Player 1 Wins!"
}else if (player2>player1){
    return "Player 2 Wins!🚩"
}else{
    return "Draw!"
}
}

document.querySelector("h1").textContent=winner(randomNumber1,randomNumber2);
