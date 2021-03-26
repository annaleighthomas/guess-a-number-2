// import functions and grab DOM elements
import { compareNumber } from './utils.js';

const playersGuessInputBox = document.querySelector('#players-guess');
const buttonEl = document.querySelector('#buttonEl');
const tooHighTooLowDiv = document.querySelector('#too-high-too-low');
const guessesLeftDiv = document.querySelector('#guesses-left');
const resetButton = document.querySelector('#reset-button');


const computersNumber = Math.ceil(Math.random() * 10);
const input = playersGuessInputBox;
const playersGuess = Number(playersGuessInputBox.value); 

console.log(input);

let guessesLeft = 4;


// set event listeners to update state and DOM

buttonEl.addEventListener('click', () => {

    const num = compareNumber(playersGuess, computersNumber); 

    if (num === -1) {
        tooHighTooLowDiv.textContent = 'Too Low!';
        guessesLeftDiv.textContent = --guessesLeft;
    } else if (num === 1) {
        tooHighTooLowDiv.textContent = 'Too High';
        guessesLeftDiv.textContent = --guessesLeft; 
    } else {
        alert('You Win!');
        buttonEl.disabled = true;
    }

    if (guessesLeft === 0) {
        alert('You Lose!');
        buttonEl.disabled = true;
    }    
});


// function clear() {
//     document.querySelector('#reset-button').reset();

// }


resetButton.addEventListener('click', () => {

    location.reload();
    

//     document.querySelector('#reset-button').reset();

//     // guessesLeft = 4;
//     // guessesLeftDiv.textContent = '4';
//     // tooHighTooLowDiv.textContent = '';
//     // buttonEl.disabled = false;
//     // input.value = '';

});






