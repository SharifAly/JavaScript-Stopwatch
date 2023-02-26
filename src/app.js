// const seconds = document.getElementById("seconds");
// const minutes = document.getElementById("minutes");
// let second = 0;
// let minute = 0;
// const btnStart = document.getElementById("btn-start");
// const btnReset = document.getElementById("btn-reset");
// const btnStop = document.getElementById("btn-Stop");

// btnStart.addEventListener("click", () => {
//   let interval = setInterval(function () {
//     seconds.innerHTML = second++;
//   }, 1000);
//   btnReset.addEventListener;
// });

// btnStop.addEventListener("click", () => {
//   return clearInterval(interval);
// });

let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("display-time");
let timer = null;

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  (timer = setInterval(stopwatch)), 1000;
}

function watchStop() {
  clearInterval(timer);
}

function watchReset() {
  clearInterval(timer);
  displayTime.innerHTML = "00:00:00";
}
