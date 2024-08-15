 var ran=Math.floor(Math.random()*6)+1;
var randomImage="dice"+ran+".png";
var randomSource="images/"+randomImage;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomSource);
 
var ran2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+ran2+".png";
var randomSource2="images/"+randomImage2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomSource2);

if (ran>ran2){
    document.querySelector("h4").innerHTML="GEETU won";
    
}
else if(ran2>ran){
    document.querySelector("h4").innerHTML="PUNEETH won";
}
else{
    document.querySelector("h4").innerHTML="DRAW";
}
 