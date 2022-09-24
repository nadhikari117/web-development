const para = document.createElement('p'); 
const node = document.createTextNode("This is an appended paragraph from js");
para.appendChild(node);
const div = document.getElementById("d1");
div.appendChild(para);

function addPara(){
    document.getElementById('').style.display="block"
}