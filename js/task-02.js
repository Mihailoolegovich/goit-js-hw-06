"use string";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// ============================================================
// const ingredientsId = document.querySelector("#ingredients");

// console.log("ingredientsId", ingredientsId);
//  const resut = ingredients.map((element) =>
//  `<li class="item">${element}</li>`

//  ).join(" ");
//  ingredientsId.innerHTML = resut;
// ============================================================

const ingredientsIdEl = document.querySelector("#ingredients");

const addLiIngredientsIdEl = () =>
  ingredients.map((element) => {
    const lastItem = document.createElement("li");
    lastItem.classList.add("item");
    lastItem.textContent = element;
    return ingredientsIdEl.append(lastItem);
  });

addLiIngredientsIdEl();

console.log("ingredientsIdEl", ingredientsIdEl);

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.