var click=1
function openCart(){
    if((click%2)==0){
        document.querySelector(".cart-items-container").style.display="none"
        click++
    }
    else{
        document.querySelector(".cart-items-container").style.display="block"
        click++
    }


}

function openNav(){
    if((click%2)==0){
        document.querySelector(".side-nav").style.display="none"
        click++
    }
    else{
        document.querySelector(".side-nav").style.display="block"
        click++
    }


}function openCart(){
    if((click%2)==0){
        document.querySelector(".cart-items-container").style.display="none"
        click++
    }
    else{
        document.querySelector(".cart-items-container").style.display="block"
        click++
    }


}
function addItem1() {
    document.getElementById('item1').style.display = "block";
    document.querySelector(".cart-items-container").style.display="block";

}


function addItem2() {
    document.getElementById('item2').style.display = "block";
    document.querySelector(".cart-items-container").style.display="block";

}

function addItem3() {
    document.getElementById('item3').style.display = "block";
    document.querySelector(".cart-items-container").style.display="block";
}

function addITem4() {
    document.getElementById('item4').style.display = "block";
    document.querySelector(".cart-items-container").style.display="block";
}
