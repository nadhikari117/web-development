console.log("hello")
alert("this is an alert!!")
confirm("are you okay?")
var answer = prompt("how was your day")

console.log(answer)
document.write(answer)

function changeColor() {
    document.getElementById("btn").style.background='blue';
}
function hideText(){
    document.getElementById('para').style.display="none"
}

var characters = ["Eren, Mikasa, Levi, Armin, Jean, Hange"];



document.write(characters);


var x = 24;


if(x<100){
    document.write("x is less than 100")
}
else{
    document.write("x is not less than 100")
}

var i;
for(i=1;i<=100;i++){
    console.log(i);
}

console.log(Math.round(2.6));
console.log(Math.ceil(2.6))
console.log(Math.floor(2.6)) 
console.log(Math.pow(3, 5))



console.log(Math.max(-88, 99, 8000, 77, 88))

console.log(Math.min(-88, 99, 8000, 77, 88))

console.log(Math.random())

