import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

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
  console.log(selectedDates[0]);
});
