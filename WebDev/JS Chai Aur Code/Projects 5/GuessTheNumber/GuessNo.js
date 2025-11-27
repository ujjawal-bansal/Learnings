let inputEl= document.getElementById("guessField")
const btnEl= document.getElementById("subt")
let guessSlot= document.querySelector(".guesses")
let remGuess = document.querySelector(".lastResult")
let p = document.querySelector(".lowOrHi")

let randomNumber= Math.floor(Math.random()*100+1) // we could have also used 
                                                  // parseInt instead of Math.floor
let message= ""
let prevGuess= []
let isAlive = true
let guessRem = 10;
remGuess.textContent = guessRem;


btnEl.addEventListener("click", function(e){
    e.preventDefault();
    let guess = parseInt(inputEl.value)
    if (isAlive ){
        validateGuess(guess)
    }

})

function validateGuess(guess){
    if (isNaN(guess)){
        alert("Enter a Number")
    }
    else if(guess<1|| guess>100){
        alert('Enter a valid number')
    }
    else{
        prevGuess.push(guess)
        displayNumber(guess)
        checkGuess(guess)
    }
}

function displayNumber(guess) {
    inputEl.value = ''
    guessRem--
    remGuess.textContent = guessRem
    guessSlot.innerHTML= "" 
    for (let i = 0; i < prevGuess.length; i++) {
       guessSlot.innerHTML+= ` ${prevGuess[i]}`;
    }
}


function checkGuess(guess){
    if (guess===randomNumber){
       p.textContent=`you won the game. the no. was ${guess}`
    
       endGame()
    }
    else if(guess<randomNumber){
        if (guessRem>0){
            p.textContent=`The number is above from ${guess}`

        }
        else{
            endGame()
        }
    }
    else {
        if(guessRem>0){
            p.textContent=`The number is lower from ${guess}`
        }
        else{
            endGame()
        }
    }
}


function endGame() {
    isAlive = false;
    inputEl.disabled = true; 
    btnEl.disabled = true; 
    p.textContent=`Game Over!! The number was ${randomNumber}`
    startGame()
}

function startGame(){
    let restartBtn = document.createElement("button");
    restartBtn.textContent = "Play Again";

    restartBtn.addEventListener("click", function () {
        inputEl.disabled = false;
        btnEl.disabled = false;
        inputEl.value = "";
        guessSlot.innerHTML = "";
        remGuess.textContent = "10";
        p.textContent = "";
        prevGuess = [];
        guessRem = 10;
        randomNumber = Math.floor(Math.random() * 100 + 1);
        //location.reload();
        restartBtn.remove()
        isAlive = true;
    })
    document.body.appendChild(restartBtn);
}



// chai aur code logic 

/*let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

*/