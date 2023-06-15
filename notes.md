// Event Listeners para os botões
const buttonStart = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonIncrease = document.querySelector('.increase');
const buttonDecrease = document.querySelector('.todecrease');

buttonStart.addEventListener('click', startTimer);
buttonStop.addEventListener('click', stopTimer);
buttonIncrease.addEventListener('click', increaseTime);
buttonDecrease.addEventListener('click', decreaseTime);

let minutes = 25;
let seconds = 0;
let timerInterval;
let isRunning = false;
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

function updateTimerDisplay() {
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
  if (isRunning) return;
  
  timerInterval = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timerInterval);
        alert('Tempo esgotado!');
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateTimerDisplay();
  }, 1000);
  
  isRunning = true;
}

function stopTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function increaseTime() {
  minutes += 5;
  updateTimerDisplay();
}
function decreaseTime() {
  minutes -= 5;
  if (minutes < 0) {
    minutes = 0;
  }
  updateTimerDisplay();
}
