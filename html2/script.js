$(window).ready(function() {
    window.addEventListener('message', (event) => {
      let data = event.data;
      if (data.action == "load"){
		document.body.style.display = 'flex'
        test()
      }
    });
  });

var theCount;
var alarm = document.getElementById("alarm");
var turnOff = document.getElementById("turn-off");
var turnOffHor = document.getElementById("closing");
var detonate = document.getElementById("detonate");
alarm.volume = 0.25; //volume level

var time = document.getElementById("time");
function showCountDown() {
	time.innerText = time.innerText - 1;
	if (time.innerText == 0) {
		clearInterval(theCount);
		time.classList.add("crono");
		abort.classList.add("hide");
		detonate.classList.add("show");
		setTimeout(function () {
			turnOff.classList.add("close");
			turnOffHor.classList.add("close");
			alarm.pause();
		}, 1500);
	}
}

var btn = document.getElementById("activate");
function test() {
	alarm.load();
	alarm.currentTime = 10.1;
	alarm.play();
	setTimeout(function () {
		panel.classList.add("show");
		theCount = setInterval(showCountDown, 1000);
		alarm.load();
		alarm.play();
	}, 500);
}

var abort = document.getElementById("abort");
abort.addEventListener("click", function () {
	btn.classList.remove("pushed");
	panel.classList.remove("show");
	clearInterval(theCount);
	time.innerText = 9;
	alarm.pause();
	alarm.currentTime = 10;
	alarm.play();
});