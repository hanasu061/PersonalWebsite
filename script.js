var musicButton = document.getElementById("Music");
var audio = new Audio("orange.mp3");
var isPlaying = false;

musicButton.addEventListener("click", function() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    musicButton.textContent = "Play";
  } else {
    audio.play();
    isPlaying = true;
    musicButton.textContent = "Pause";
  }
});
