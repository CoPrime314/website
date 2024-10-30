
//parallaxing with cursor
const bodymouse = document.querySelector('body');
function handleMouseMove(event) {
  const { clientX, clientY } = event;
  const x = clientX / window.innerWidth;
  const y = clientY / window.innerHeight;
  bodymouse.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
}
//end of parallax code


//**
// for windows specific
//**
if (typeof window.orientation == 'undefined'){
  bodymouse.addEventListener('mousemove', handleMouseMove);
}else{
  document.body.classList.add('bodyphone');
  document.querySelectorAll('.overlay_text').forEach(element => {
        element.style.fontSize = "0px";
      });
}
  

//sound

var mix = document.getElementById("mix");
mix.loop=true;
mix.volume=0.2;
const playpause = document.getElementById("radio");
playpause.addEventListener("click",playaudio);

function playaudio(){
  if (mix.paused) {
    mix.play();
    playpause.textContent = "Pause";
  } else {
    mix.pause();
    playpause.textContent = "Play";
  }
};

const volumeSlider = document.getElementById("volume");
const volumeValue = document.getElementById("volumeValue");
volumeSlider.addEventListener("input", function() {
  const volume = volumeSlider.value / 100;
  mix.volume = volume;
});