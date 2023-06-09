const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};
let timerId = null;
refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', onStop);
function onStart() {
  refs.start.disabled = true;
  refs.stop.disabled = false;
  timerId = setInterval(onBody, 1000);
}
function onStop() {
  refs.stop.disabled = true;
  refs.start.disabled = false;
  clearInterval(timerId);
}
function onBody() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
