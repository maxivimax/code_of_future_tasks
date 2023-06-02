// Приветствие пользователя при загрузке страницы
window.onload = function () {
    console.log("Добро пожаловать!");
};
// Прощание с пользователем при закрытии страницы
window.onbeforeunload = function () {
    console.log("До свидания!");
};
// Анимация при наведении на элементы
var animatedElements = document.querySelectorAll(".animated");
animatedElements.forEach(function (element) {
    element.addEventListener("mouseover", function () {
        element.classList.add("animate");
    });
    element.addEventListener("mouseout", function () {
        element.classList.remove("animate");
    });
    element.addEventListener("click", function () {
        element.classList.toggle("animate");
    });
});
// Обработка данных из формы
var form = document.querySelector("#myForm");
var input = document.querySelector("#myInput");
var output = document.querySelector("#output");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var userInput = input.value;
    output.textContent = "\u0412\u044B \u0432\u0432\u0435\u043B\u0438: \"".concat(userInput, "\"");
    // Динамически изменяем интерфейс в зависимости от введенных данных
    if (userInput.toLowerCase() === "убегающие кнопки") {
        var buttons = document.querySelectorAll(".button");
        var run1 = false;
        buttons.forEach(function (button) {
            if (run1 != true) {
                button.classList.add("runaway");
                run1 = true;
            }
            else
                button.classList.add("runaway2");
        });
        output.textContent = output.textContent + ", запущены убегающие кнопки";
    }
    else if (userInput.toLowerCase() === "исчезающий текст") {
        var text = document.querySelector("#text");
        text.classList.add("disappear");
        output.textContent = output.textContent + ", запущен исчезающий текст";
    }
});
