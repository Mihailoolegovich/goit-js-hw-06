"use string";

const categories = document.querySelector("#categories");
console.log("Number of categories:", categories.children.length);

const item = categories.querySelectorAll(".item");
const itemCalc = () => {
  item.forEach((el, index) => {
    if (el) {
      console.log("Category:", item[index].firstElementChild.textContent);
      console.log("Elements:", item[index].querySelector("ul").children.length);
    }
  });
};

itemCalc();

// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.
