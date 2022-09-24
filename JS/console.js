console.log("hello")
console.error("error")
console.warn("BEWARE!!")

/*
1.) Make 5 divs
2.) Create 5 buttons (one for each div)
3.) First div should change background color , second should write text inside, 
3rd should change an image, 4rth should rotate it, 5th should animate

*/
function h(){
    document.querySelector('.color').style.backgroundColor="red"
}

function changeImage(){
    document.getElementById('image').src="https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png"}

    function showText(){
        document.getElementById('para').style.display="block"
    }
      
    function hideText(){
        document.getElementById('para').style.display="none"
    }
    
      function rotateImg() {
        document.querySelector("#img").style.transform = "rotate(60deg)"
      }
     
      function animation() {
          document.querySelector('#d2').style.animation="fadeIn 5s"
      }
        
        
      