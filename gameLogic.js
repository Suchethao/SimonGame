
//Create an empty array for the computer to pick the sequence, and another empty array for the user's input. The game play will compare both.
let computerSequence=[];
let playerSequence=[];
//Create the start button to inititate the game. It should be hidden once it's clicked.
const startButton = document.querySelector('.js-start');

function startGame() {
  startButton.classList.add('hidden');
}

startButton.addEventListener('click', startGame);
