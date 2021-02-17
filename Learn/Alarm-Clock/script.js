console.log("ALARM-CLOCK !!!");

const clock = document.querySelector("#clock");
const alarm = document.querySelector(".set-alarm");
const alarmBtn = document.querySelector("#set-alarm");
const snoozeBtn = document.querySelector("#snooze-alarm");
const alarmInput = document.querySelector("#date-time");
const audio = new Audio("alarm-tone.mp3");

alarm.classList.add("d-none");

clock.addEventListener("click", () => {
  alarm.classList.remove("d-none");
});

alarmBtn.addEventListener("click", setAlarm);

function setAlarm() {
  const alarmDate = new Date(alarmInput.value);
  const now = Date.now();
  console.log(`Alarm set for ${alarmDate}`);
  let timeDiff = now - alarmDate;
  console.log(timeDiff);
  if (timeDiff >= 0) {
    setTimeout(() => {
      audio.play();
    }, timeDiff);
  }
}

snoozeBtn.addEventListener("click", () => {
  audio.pause();
});
