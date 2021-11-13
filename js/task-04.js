"use string";

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const actualValue = document.querySelector("#value");
const btnIncrement = document.querySelector('button[data-action="increment"]');

let  counterValue = 0;

btnDecrement.addEventListener("click", () => {
   counterValue -= 1;
  actualValue.textContent =  counterValue;
  console.log("value - 1");
});

btnIncrement.addEventListener("click", () => {
   counterValue += 1;
  actualValue.textContent =  counterValue;
  console.log("value + 1");
});

// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.