// Приветствие пользователя при загрузке страницы
window.onload = () => {
  console.log("Добро пожаловать!");
};

// Прощание с пользователем при закрытии страницы
window.onbeforeunload = () => {
  console.log("До свидания!");
};

// Анимация при наведении на элементы
const animatedElements = document.querySelectorAll(".animated");

animatedElements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.add("animate");
  });

  element.addEventListener("mouseout", () => {
    element.classList.remove("animate");
  });

  element.addEventListener("click", () => {
    element.classList.toggle("animate");
  });
});

// Обработка данных из формы
const form = document.querySelector("#myForm") as HTMLFormElement;
const input = document.querySelector("#myInput") as HTMLInputElement;
const output = document.querySelector("#output") as HTMLDivElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userInput = input.value;
  output.textContent = `Вы ввели: "${userInput}"`;

  // Динамически изменяем интерфейс в зависимости от введенных данных
  if (userInput.toLowerCase() === "убегающие кнопки") {
    const buttons = document.querySelectorAll(".button");
    var run1 = false;
    buttons.forEach((button) => {
      if (run1 != true) {
        button.classList.add("runaway");
        run1 = true;
      } else button.classList.add("runaway2");
    });
    output.textContent = output.textContent + ", запущены убегающие кнопки";
  } else if (userInput.toLowerCase() === "исчезающий текст") {
    const text = document.querySelector("#text") as HTMLDivElement;
    text.classList.add("disappear");
    output.textContent = output.textContent + ", запущен исчезающий текст";
  }
});
