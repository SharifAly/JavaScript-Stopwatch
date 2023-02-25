const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
let second = 0;
let minute = 0;
const btnStart = document.getElementById("btn-start");
const btnReset = document.getElementById("btn-reset");
const btnStop = document.getElementById("btn-Stop");

btnStart.addEventListener("click", () => {
  let interval = setInterval(function () {
    seconds.innerHTML = second++;
  }, 1000);
});
