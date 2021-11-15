"use string";

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  if (inputEl.value === "") {
    return (outputEl.textContent = "Anonymous");
  }
  outputEl.textContent = event.currentTarget.value;
});

// Напиши скрипт который, при наборе текста в инпуте input
// #name-input (событие input),
//
// подставляет его текущее значение в span
// #name-output.
//
// Если инпут пустой, в спане должна отображаться строка "Anonymous".
