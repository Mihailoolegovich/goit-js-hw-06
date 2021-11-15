function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNum = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");
let sizeDiv = 30;
function createBoxes (amount) {
  const addNewDiv = `<div style=" width: ${sizeDiv}px; height: ${sizeDiv}px; background-color: ${getRandomHexColor()}; margin: 5px;" ></div>`;

  sizeDiv += 10;

  boxesEl.insertAdjacentHTML("beforeend", addNewDiv);
};

boxesEl.style.display = "flex";
boxesEl.style.flexWrap = "wrap";

createBtn.addEventListener("click", createBoxes);
// () =>{
// inputNum.addEventListener("input", (event) => {
//   inputValue = event.target.value
//   if (inputValue === 0) {
//     return;
//   }
//   createBoxes();
//   inputValue -= 1;
//   console.log('inputValue', inputValue);

//   // return inputValue = event.target.value;
//  });
// }
// );

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
