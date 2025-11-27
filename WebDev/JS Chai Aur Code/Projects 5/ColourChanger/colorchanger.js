// The Code written by Ujjawal
let grey= document.getElementById("grey")
let white= document.getElementById("white")
let blue= document.getElementById("blue")
let yellow= document.getElementById("yellow")
const bodyElement= document.body /* Gets the <body> element of your HTML page
                                Stores, it in a variable called bodyElement &
                                Provides direct access to modify the body content.
                                Equivalent To: const bodyElement = document.querySelector('body'); */


grey.addEventListener("click", function(){
    bodyElement.style.backgroundColor="grey"
})
white.addEventListener("click", function(){
    bodyElement.style.backgroundColor="white"
})
blue.addEventListener("click", function(){
    bodyElement.style.backgroundColor="blue"
})
yellow.addEventListener("click", function(){
    bodyElement.style.backgroundColor="yellow"
})


// More optimize code written by chai aur code 
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e); // gives the event object
    console.log(e.target); // gives the element that was clicked. 
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});