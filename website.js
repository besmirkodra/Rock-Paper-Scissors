let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElm ();

let isAutoplaying = false;
let intervalId;
function autoPlay () {
  if (!isAutoplaying) {
  intervalId = setInterval (() => {
      const playerMove = pickComputerMove();
      playGame (playerMove);
    },
  1000);
    isAutoplaying = true;
  } else {
    clearInterval (intervalId);
    isAutoplaying = false;
  }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
});

document.querySelector('.js-score-button').addEventListener('click', () => {
  score.wins = 0; 
  score.ties = 0;
  score.losses = 0;
  localStorage.removeItem('score');
  updateScoreElm ();
});

document.querySelector('.js-autoPlay-button').addEventListener('click', () => {
  autoPlay();;
});

document.body.addEventListener('keydown', (event) => {
  console.log(event.key);
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame ('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === ' ') {
    autoPlay();
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  if (playerMove === 'scissors') {
  if (computerMove === 'rock') {
    result = 'You LOSE!';
  } else if (computerMove === 'paper') {
    result = 'You WIN!';
  } else if (computerMove === 'scissors') {
    result = 'TIE!';
  }
} else if (playerMove === 'paper'){
  if (computerMove === 'rock') {
  result = 'You WIN!';
  } else if (computerMove === 'paper') {
  result = 'TIE!';
  } else if (computerMove === 'scissors') {
  result = 'You LOSE!';
  }
} else if (playerMove === 'rock') {
  if (computerMove === 'rock') {
    result = 'TIE!';
  } else if (computerMove === 'paper') {
    result = 'You LOSE!';
  } else if (computerMove === 'scissors') {
    result = 'You WIN!';
  }
}


document.querySelector('.js-result')
  .innerHTML = `${result}`;

document.querySelector('.js-moves')
  .innerHTML = `You<img src="${playerMove}-emoji.png" class="move-icon"> -- <img src="${computerMove}-emoji.png" class="move-icon" > Computer`;

if (result === 'You WIN!'){
  score.wins += 1; 
} else if (result === 'You LOSE!') {
  score.losses += 1;
} else if (result === 'TIE!') {
  score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElm ();

 /* alert (`You picked ${playerMove} . Computer picked ${computerMove}. ${result} 
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`); */
} 

function updateScoreElm () {
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove () {
  let computerMove = '' ;
  const randomNumber = Math.random();
  if (randomNumber > 0 && randomNumber <= 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber > 1 /3 && randomNumber <= 2 /3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }
  return computerMove;
}