import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

const startBln = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBln.setAttribute('disabled', true);
startBln.addEventListener('click', timerGo);

let intervalId = null;
let selectedDate = '';
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const flatpick = flatpickr('#datetime-picker', options);

flatpick.config.onClose.push(function (selectedDates) {
  selectedDate = selectedDates[0].getTime();
  if (selectedDates[0] < new Date()) {
    Notify.warning('Please choose a date in the future');
  } else startBln.removeAttribute('disabled');
});

function timerGo() {
  startBln.setAttribute('disabled', true);
  intervalId = setInterval(() => {
    const deltaTime = selectedDate - Date.now();
    if (deltaTime > 0) {
      const timerResult = convertMs(deltaTime);
      timerNumbers(timerResult);
    } else {
      clearInterval(intervalId);
      startBln.removeAttribute('disabled');
    }
  }, 1000);
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function timerNumbers({ days, hours, minutes, seconds }) {
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}
