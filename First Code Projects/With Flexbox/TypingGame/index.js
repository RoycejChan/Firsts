window.addEventListener('load', init);

// Globals

//  Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};

//  change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#user-input');
const currentWord = document.querySelector('#word-display');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
'weird','accommodate', 'handkerchief', 'indict','cemetery', 'conscience', 'rhythm','playwright', 'embarrass','millennium','pharaoh','liaison','supersede', 'Caribbean','harass','heterogenous','maintenance','pronunciation','grandiloquent','Arctic','occurred','recommend','deductible','abnegation','adumbrate','aggrandize','idiosyncratic','anachronistic','antediluvian','incontrovertible','blandishment','camaraderie','capitulate','circumlocution','commensurate','scurrilous','surreptitious','intransigent','vociferous','sanctimonious','preponderance','philanthropic','obstreperous','legerdemain'
];


// start Game
function init() {
  seconds.innerHTML = currentLevel;
  showWord(words);
  wordInput.addEventListener('input', startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}


