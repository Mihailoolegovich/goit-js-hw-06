"use string";

const sizeControlEl = document.querySelector("#font-size-control");
const textEl = document.getElementById("text");

sizeControlEl.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.target.value}px`;
  //   console.log('textEl', textEl.style.fontSize);
});

// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн-стиль span#text
// обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.
