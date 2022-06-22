$(window).ready(function() {
  window.addEventListener('message', (event) => {
    let data = event.data;
    if (data.action == "load"){
      init()
    }
  });
});

function init() {
  document.body.style.display = 'flex'
  var audioPlayer = null;
  if (audioPlayer != null) {
    audioPlayer.pause();
  }
  audioPlayer = new Howl({src: ["./alert.ogg"]});
  audioPlayer.volume(0.1);
  audioPlayer.play();

  const number = document.querySelector(".number");
  const countdown = 9;
  let counter = countdown;
  number.innerHTML = counter;

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  setInterval(() => {
    counter--;
    number.innerHTML = counter;
    if (counter === 0) {
      counter = 1;
    }
  }, 1000);
}

