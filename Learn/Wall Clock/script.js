console.log("Wall Clock");

const clockDiv = document.querySelector("#clock");
setInterval(() => {
  updateClock();
}, 1000);

function updateClock() {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();
  let currentTimeOfDay = currentHour < 12 ? "AM" : "PM";

  clockDiv.innerHTML = `${currentHour} : ${currentMinute} : ${currentSeconds}  ${currentTimeOfDay}`;
}
