var player1= prompt("enter Player 1 Name");
var player2= prompt("enter Player 2 Name");
document.querySelector("#player1").innerHTML=player1;
document.querySelector("#player2").innerHTML=player2;
    var random1 = Math.floor(Math.random()*6)+1;
    var random2 = Math.floor(Math.random()*6)+1;
    var randomImg1 = "assests/dice"+random1+".png";
    var randomImg2 = "assests/dice"+random2+".png";
    document.querySelectorAll("img")[0].setAttribute("src",randomImg1);
    document.querySelectorAll("img")[1].setAttribute("src",randomImg2);

    
    if(random1==random2){
        document.querySelector("h1").innerHTML="Draw";
    }
    else if(random1<random2){
        document.querySelector("h1").innerHTML= Player2+" wins";
    }
    else if(random1>random2){
        document.querySelector("h1").innerHTML = player1+" wins";
    }
