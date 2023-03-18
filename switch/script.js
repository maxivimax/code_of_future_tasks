const selectAction = document.querySelector('#selectAction');
const resultDiv = document.querySelector('#result');
const resultValue = document.querySelector('#resultValue');

selectAction.addEventListener('change', () => {
  const firstNumber = parseInt(prompt('Введите первое число:'));
  const secondNumber = parseInt(prompt('Введите второе число:'));

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert('Введите числа!');
    return;
  }

  let action = selectAction.value;
  let result;

  switch (action) {
    case 'add':
      result = firstNumber + secondNumber;
      break;
    case 'subtract':
      result = firstNumber - secondNumber;
      break;
    case 'multiply':
      result = firstNumber * secondNumber;
      break;
    case 'divide':
      result = firstNumber / secondNumber;
      break;
    default:
      alert('Выберите действие!');
      return;
  }

  resultValue.textContent = result;
  resultDiv.classList.remove('hidden');
});
