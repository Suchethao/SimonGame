
//Create an empty array for the computer to pick the sequence, and another empty array for the user's input. The game play will compare both.
let sequence=[];
let humanSequence=[];
//keep track of rounds
let level =0;
//Create the start button to inititate the game. It should be hidden once it's clicked.
const startButton = document.querySelector('.js-start');
const info = document.querySelector('.js-info');
const heading = document.querySelector ('.js-heading');
const tileContainer = document.querySelector ('.js-container');
//play round by activating the tiles on the screen
function activateTile(color){
    const tile = document.querySelector(`[data-tile='${color}']`);
    const sound = document.querySelector(`[data-sound='${color}']`);

    tile.classList.add('activated');
    sound.play();

    setTimeout(()=> {
        tile.classList.remove('activated');
    },300);
}
//create subsequent rounds 
function playRound(nextSequence) {
    nextSequence.forEach((color,index)=> {
        setTimeout(() =>{
            activateTile(color);
            //create an artificial delay between the buttons going off
        }, (index+1)*600);
    });
}
function nextStep() {
    const tiles=['pink','green','blue','yellow'];
    const random = tiles[Math.floor(Math.random()*tiles.length)];
    
    return random;
}
//create function to count rounds
function nextRound(){
    level +=1;
    //add the unclickable class and edit info and heading every time a new round starts
    tileContainer.classList.add('unclickable');
    infotextContent= 'Wait for the Computer';
    heading.textContent = `Level ${level} of 20`;
   //copy all the elements to the next sequence so that it's just an extension vs. a new sequence each time
   const nextSequence=[...sequence];
   nextSequence.push(nextStep());
   playRound(nextSequence);
//add a delay before the humanTurn is executed
   sequence = [...nextSequence];
   setTimeout(()=> {
    humanTurn(level);
   }, level*600+1000);
}
function startGame() {
  startButton.classList.add('hidden');
  info.classList.remove('hidden');
  info.textContent = 'Wait for the computer';
  nextRound();
}
startButton.addEventListener('click', startGame);
//decide if the player should move to the next round or end the game.
tileContainer.addEventListener ('click',event=> {
    const { tile } = event.target.dataset;
    if (tile)handleClick (tile);
})
// create a function to indicate the computer is done, and it's time for the human to replicate the sequence
function humanTurn(level){
//removing the unclickable class so that the buttons can't be pressed while the game hasn't started yet
    tileContainer.classList.remove('unclickable');
//change info element to show player it's their turn. Show how many taps need to be entered.
    info.textContent=`Your turn: ${level} Tap${level>1?'s':''}`;
}
