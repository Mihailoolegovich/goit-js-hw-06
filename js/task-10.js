function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  inputNum: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", () => createBoxes(refs.inputNum.value));
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const items = [];
  for (let j = 0, sizeDiv = 30; j < amount; j++, sizeDiv += 10) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("boxes__element");
    itemDiv.style.backgroundColor = getRandomHexColor();
    itemDiv.style.width = sizeDiv + "px";
    itemDiv.style.height = sizeDiv + "px";
    itemDiv.style.margin = "5px";
    items.push(itemDiv);
  }
  refs.boxesEl.append(...items);
  refs.inputNum.value = "";
};

function destroyBoxes() {
  refs.boxesEl.innerHTML = "";
  refs.inputNum.value = "";
  console.log("refs.boxesEl 4", refs.boxesEl);
};

// style Boxes
refs.boxesEl.style.display = "flex";
refs.boxesEl.style.flexWrap = "wrap";
refs.boxesEl.style.alignItems = "center";
//
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
