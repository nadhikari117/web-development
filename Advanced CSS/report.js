function result(){
    //grabbing the name value from input table and displaying output table//
    var name = document.getElementById("name").value;
    document.getElementById("outputName").innerHTML=name;

//grabbing the marks value and storing in a,b,c,d variables
var a= document.querySelector("#eng").value;
var b= document.querySelector("#math").value;
var c= document.querySelector("#sci").value;
var d= document.querySelector("#his").value;
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
d = parseInt(d);

var percentage = ((a+b+c+d)/400)*100;
alert(a);
document.querySelector("#Percentage").innerHTML= percentage; 
}

if(percentage>90 && percentage<=100){
    document.querySelector("#grade").innerHTML = "A+";
    document.querySelector("#pass").innerHTML = "Pass";
}
else if(percentage>80 && percentage<=90){
    document.querySelector("#grade").innerHTML = "A";
    document.querySelector("#pass").innerHTML = "Pass";
}
else if(percentage>60 && percentage<=80){
    document.querySelector("#grade").innerHTML = "B";
    document.querySelector("#pass").innerHTML = "Pass";
}
else if(percentage>40 && percentage<=60){
    document.querySelector("#grade").innerHTML = "C";
    document.querySelector("#pass").innerHTML = "Pass";
}
else if(percentage>0 && percentage<=40){
    document.querySelector("#grade").innerHTML = "F";
    document.querySelector("#pass").innerHTML = "Fail";
}
else{
    alert("Please enter marks in the range of 0-100")
    
}
