function validate(){
    let x=document.forms["form1"]["fname"].value;
    if(x==""){
        alert("Please fill out the form");
        return false;
    }
}

