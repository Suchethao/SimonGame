
//Create an empty array for the computer to pick the sequence, and another empty array for the user's input. The game play will compare both.
let computerSequence=[];
let humanSequence=[];
//keep track of rounds
let level =0;
//Create the start button to inititate the game. It should be hidden once it's clicked.
const startButton = document.querySelector('.js-start');
const info = document.querySelector('.js-info');
function nextStep() {
    const tiles=['pink','green','blue','yellow']
}
//create function to count rounds
function nextRound(){
    level +=1;
   //copy all the elements to the next sequence so that it's just an extension vs. a new sequence each time
   const nextSequence=[...sequence];
}
function startGame() {
  startButton.classList.add('hidden');
  info.classList.remove('hidden');
  info.textContent = 'Wait for the computer';
}
startButton.addEventListener('click', startGame);

