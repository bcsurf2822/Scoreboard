let homeScoreText = document.querySelector("#home");
let awayScoreText = document.querySelector("#away");

let homeScore = 0
let awayScore = 0

function newGame() {
  homeScore = 0;
  awayScore = 0;
  homeScoreText.innerText = homeScore;
  awayScoreText.innerText = awayScore;
}


function singlehm() {
  homeScore ++
  homeScoreText.innerText = homeScore
}

function doublehm() {
  homeScore += 2
  homeScoreText.innerText =  homeScore
}

function triplehm() {
  homeScore += 3
  homeScoreText.innerText = homeScore
}

function singleaw() {
  awayScore ++
awayScoreText.innerText = awayScore
}

function doubleaw() {
  awayScore += 2
  awayScoreText.innerText = awayScore
}
function tripleaw() {
  awayScore += 3
  awayScoreText.innerText = awayScore
}
