const refs = {
  startEl: document.querySelector('[data-start]'),
  stopEl: document.querySelector('[data-stop]'),
  bodyEl: document.querySelector('body'),
};

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function AddColorToBody() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
}

refs.startEl.addEventListener('click', () => {
  intervalId = setInterval(AddColorToBody, 1000);
  refs.startEl.setAttribute('disabled', true);
});

refs.stopEl.addEventListener('click', () => {
  clearInterval(intervalId);
  refs.startEl.removeAttribute('disabled');
});
