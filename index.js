
const rockEl = document.getElementById('rock')
const paperEl = document.getElementById('paper')
const scissorEl = document.getElementById('scissor')
const myParaEl = document.getElementById('myPara')
const myMoveEl = document.getElementById('myMove-el')
const compMoveEl = document.getElementById('compMove-el')

// let userMove = prompt("Enter Your Move (ROCK PAPER SCISSOR) ").toLocaleUpperCase();
// let computerMove = Math.random();

function computerChoice(num) {
  if(num >= 0 && num < 1/3) {
    return "ROCK"
  } else if (num >= 1/3 && num < 2/3) {
    return "PAPER"
  } else{
    return "SCISSOR"
  }
}

// let computerPlayer = computerChoice(computerMove);

function decideWinner(userMove, computerPlayer) {

  myMoveEl.textContent = `your move: ${userMove}`
  compMoveEl.textContent = `computer move: ${computerPlayer}`

// console.log(`computer move: ${computerPlayer}`);
// console.log(`your move: ${userMove}`);

if (userMove === computerPlayer) {
  myParaEl.textContent = "It's a TIE!";
} else if (userMove === 'ROCK' && computerPlayer === 'SCISSOR') {
  myParaEl.textContent = "YOU WIN!";
} else if (userMove === 'PAPER' && computerPlayer === 'ROCK') {
  myParaEl.textContent = "YOU WIN!";
} else if (userMove === 'SCISSOR' && computerPlayer === 'PAPER') {
   "YOU WIN!";
} else {
  myParaEl.textContent = "YOU LOSE!";
}
// myParaEl.textContent = ''
}

 
function playGame(userMove) {
  let computerMove = Math.random();
  let computerPlayer = computerChoice(computerMove);

let winner = decideWinner(userMove, computerPlayer)
console.log(winner)

}


rockEl.addEventListener('click', function() {
  playGame('ROCK');
});

paperEl.addEventListener('click', function() {
  playGame('PAPER');
});

scissorEl.addEventListener('click', function() {
  playGame('SCISSOR');
});

