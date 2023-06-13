
var audio;

    function adicionarAudioVento() {
      if (audio && !audio.paused) {
        audio.pause();
      } else {
        audio = new Audio('sounds/Floresta.wav'); // 
        audio.play();
      }
    }
    function adicionarAudioChuva(){
        if (audio && !audio.paused) {
            audio.pause();
          } else {
            audio = new Audio('sounds/Chuva.wav'); // 
            audio.play();
          }
    }
    function adicionarAudioHouse(){
        if (audio && !audio.paused) {
            audio.pause();
          } else {
            audio = new Audio('sounds/Cafeteria.wav'); // 
            audio.play();
          }
    }
    function adicionarAudioCool(){
        if (audio && !audio.paused) {
            audio.pause();
          } else {
            audio = new Audio('sounds/Lareira.wav'); // 
            audio.play();
          }
    }