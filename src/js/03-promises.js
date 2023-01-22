import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('.form'),
  btnEl: document.querySelector('button'),
};

console.dir(refs.formEl.elements.amount.value);
// const amount = refs.formEl.elements.amount.value;

refs.formEl.addEventListener('submit', onButtonClick);

// refs.btnEl.addEventListener('submit', onButtonClick);

function onButtonClick(e) {
  e.preventDefault();

  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  let position = 0;

  for (let i = 0; i <= amount.value; i += 1) {
    console.log(i);
    position = i;
    console.log(position);
    console.log(+delay.value);

    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        );
      })
      .catch(({ position, delay }) => {
        console.log(
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
        );
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setInterval(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
  return promise;
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
//   })
//   .catch(({ position, delay }) => {
//     console.log(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
//   });
