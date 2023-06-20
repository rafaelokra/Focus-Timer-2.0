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





function alterarModo(modo) {
  if (modo === 'light') {
    // Alterar o fundo para escuro
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#ffffff';
   
  } else if (modo === 'dark') {
    // Alterar o ícone para a versão clara
    document.getElementById('darkIcon').style.color = '#ffffff';

    // Alterar o fundo para claro
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#323238';
  }
}




var audio;
var volume = 0.5;
var sliderVolume = document.getElementById('slider-volume'); 


    function adicionarAudioFlorest() {
      if (audio && !audio.paused) {
        audio.pause();
      } else {
        audio = new Audio('sounds/Floresta.wav'); // 
        audio.loop = true;
        audio.volume = 0.5;
        audio.play();
        

       
        sliderVolume.addEventListener('input', function() {
          audio.volume = parseFloat(sliderVolume.value); 
        });
      }
    }
    function adicionarAudioChuva() {
      if (audio && !audio.paused){
        audio.pause();
      } else {
        audio = new Audio('sounds/Chuva.wav');
        audio.loop = true;
        audio.play();
        
      }
    }
    function adicionarAudioCafeteria() {
      if (audio && !audio.paused){
        audio.pause();
      } else {
        audio = new Audio('sounds/cafeteria.wav');
        audio.loop = true;
        audio.play();
        
      }
    }
    function adicionarAudioLareira() {
      if (audio && !audio.paused){
        audio.pause();
      } else {
        audio = new Audio('sounds/lareira.wav');
        audio.loop = true;
        audio.play();
        
      }
    }