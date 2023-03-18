const increaseButton = document.getElementById('increaseFontSize');
const decreaseButton = document.getElementById('decreaseFontSize');
const body = document.querySelector('body');

increaseButton.addEventListener('click', () => {
  const currentFontSize = parseInt(window.getComputedStyle(body).getPropertyValue('font-size'));
  body.style.fontSize = `${currentFontSize + 1}px`;
});

decreaseButton.addEventListener('click', () => {
  const currentFontSize = parseInt(window.getComputedStyle(body).getPropertyValue('font-size'));
  body.style.fontSize = `${currentFontSize - 1}px`;
});