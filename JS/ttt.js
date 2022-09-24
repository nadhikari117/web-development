var written1=0;
var written2=0;
var written3=0;
var written4=0;
var written5=0;
var written6=0;
var written7=0;
var written8=0;
var written9=0;

var click=1;
function write1(){
    if(written1==0)
    if((click%2)==0){
        document.querySelector(".one").innerHTML="O";
    }
    else{
        document.querySelector(".one").innerHTML="X";
    }
   click++;
   written1=1;
}
function write2(){
    if(written2==0)
    if((click%2)==0){
        document.querySelector(".two").innerHTML="O";
    }
    else{
        document.querySelector(".two").innerHTML="X";
    }
    click++;
    written2=1;
}
function write3(){
    if(written3==0)
    if((click%2)==0){
        document.querySelector(".three").innerHTML="O";
    }
    else{
        document.querySelector(".three").innerHTML="X";
    }
    click++;
    written3=1;
}
function write4(){
    if(written4==0)
    if((click%2)==0){
        document.querySelector(".four").innerHTML="O";
    }
    else{
        document.querySelector(".four").innerHTML="X";
    }
    click++;
    written4=1;
}
function write5(){
    if(written5==0)
    if((click%2)==0){
        document.querySelector(".five").innerHTML="O";
    }
    else{
        document.querySelector(".five").innerHTML="X";
    }
    click++;
    written5=1;
}
function write6(){
    if(written6==0)
    if((click%2)==0){
        document.querySelector(".six").innerHTML="O";
    }
    else{
        document.querySelector(".six").innerHTML="X";
    }
    click++;
    written6=1;
}
function write7(){
    if(written7==0)
    if((click%2)==0){
        document.querySelector(".seven").innerHTML="O";
    }
    else{
        document.querySelector(".seven").innerHTML="X";
    }
    click++;
    written7=1;
}
function write8(){
    if(written8==0)
    if((click%2)==0){
        document.querySelector(".eight").innerHTML="O";
    }
    else{
        document.querySelector(".eight").innerHTML="X";
    }
    click++;
    written8=1;
}
function write9(){
    if(written9==0)
    if((click%2)==0){
        document.querySelector(".nine").innerHTML="O";
    }
    else{
        document.querySelector(".nine").innerHTML="X";
    }
    click++;
    written9=1;
}
   
//winning conditions:
//123, 456, 789, 147, 258, 369, 159, 357

setInterval(check,500);

function check(){
    if( document.querySelector(".four").innerHTML =="X" &&
    document.querySelector(".five").innerHTML =="X" &&
    
    document.querySelector(".six").innerHTML =="X"){

        document.querySelector(".status").innerHTML="Player X is the winner"
    }

    if (document.querySelector(".four").innerHTML =="O" &&
    document.querySelector(".five").innerHTML =="O" &&
    
    document.querySelector(".six").innerHTML=="O"){

        document.querySelector(".status").innerHTML="Player X is the winner"
    }
    

    if (document.querySelector(".one").innerHTML=="X" && document.querySelector(".two").innerHTML==="X" && document.querySelector(".three").innerHTML=="X"){
        document.querySelector(".status").innerHTML="Player X is the winner!"
    }

    if(document.querySelector(".one").innerHTML=="O" && document.querySelector(".two").innerHTML==="O" && document.querySelector(".three").innerHTML=="O"){
        document.querySelector(".status").innerHTML="Player X is the winner!"
    }

    if (document.querySelector(".seven").innerHTML=="X" && document.querySelector(".eight").innerHTML==="X" && document.querySelector(".nine").innerHTML=="X"){
        document.querySelector(".status").innerHTML="Player X is the winner!"
    }

    if(document.querySelector(".seven").innerHTML=="O" && document.querySelector(".eight").innerHTML==="O" && document.querySelector(".nine").innerHTML=="O"){
        document.querySelector(".status").innerHTML="Player X is the winner!"
    }

    if (document.querySelector(".one").innerHTML=="X" && document.querySelector(".four").innerHTML==="X" && document.querySelector(".seven").innerHTML=="X"){
        document.querySelector(".status").innerHTML="Player X is the winner!"
    }

    if(document.querySelector(".one").innerHTML=="O" && document.querySelector(".four").innerHTML==="O" && document.querySelector(".seven").innerHTML=="O"){
        document.querySelector(".status").innerHTML="Player X is the winner!"
    }

    if (document.querySelector(".two").innerHTML=="X" && document.querySelector(".five").innerHTML==="X" && document.querySelector(".eight").innerHTML=="X"){
        document.querySelector(".status").innerHTML="Player X is the winner!"
    }

    if(document.querySelector(".two").innerHTML=="O" && document.querySelector(".five").innerHTML==="O" && document.querySelector(".eight").innerHTML=="O"){
        document.querySelector(".status").innerHTML="Player X is the winner!"
    }

    if (document.querySelector(".three").innerHTML=="X" && document.querySelector(".six").innerHTML==="X" && document.querySelector(".nine").innerHTML=="X"){
        document.querySelector(".status").innerHTML="Player X is the winner!"
    }

    if(document.querySelector(".three").innerHTML=="O" && document.querySelector(".six").innerHTML==="O" && document.querySelector(".nine").innerHTML=="O"){
        document.querySelector(".status").innerHTML="Player X is the winner!"
    }
    if (document.querySelector(".one").innerHTML=="X" && document.querySelector(".five").innerHTML==="X" && document.querySelector(".nine").innerHTML=="X"){
        document.querySelector(".status").innerHTML="Player X is the winner!"
    }

    if(document.querySelector(".one").innerHTML=="O" && document.querySelector(".five").innerHTML==="O" && document.querySelector(".nine").innerHTML=="O"){
        document.querySelector(".status").innerHTML="Player X is the winner!"
    }
    if (document.querySelector(".three").innerHTML=="X" && document.querySelector(".five").innerHTML==="X" && document.querySelector(".seven").innerHTML=="X"){
        document.querySelector(".status").innerHTML="Player X is the winner!"
    }

    if(document.querySelector(".three").innerHTML=="O" && document.querySelector(".five").innerHTML==="O" && document.querySelector(".seven").innerHTML=="O"){
        document.querySelector(".status").innerHTML="Player X is the winner!"
    }

}
