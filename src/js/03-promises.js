import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('.form'),
};

refs.formEl.addEventListener('submit', onButtonClick);

function onButtonClick(e) {
  e.preventDefault();

  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  let delayNum = Number(delay.value);

  for (let position = 1; position <= amount.value; position += 1) {
    if (position === 1) {
      delayNum = +delay.value;
    } else delayNum += Number(step.value);

    createPromise(position, delayNum)
      .then(value => {
        Notify.success(value);
      })
      .catch(error => {
        Notify.failure(error);
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
