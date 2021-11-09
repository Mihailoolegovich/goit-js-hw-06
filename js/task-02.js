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






 const ingredientsId = document.querySelector("#ingredients");

const lastItem = document.createElement("li");
lastItem.textContent = "createElement"
console.log('lastItem', lastItem);

 ingredientsId.innerHTML = '<li class="item">element</li>';




// 1. Создаст отдельный элемент <li>.
// Обзательно используй метод document.createElement().

console.log("ingredientsId", ingredientsId);

// const lastItem = document.createElement("li");

//  const resut = ingredients.map((element) => 
//  `<li class="item">${element}</li>`
 
//  ).join(" ");
//  ingredientsId.innerHTML = resut;
//  {
// 
// const lastItem = document.createElement("li").textContent = element;
// lastItem.
  // lastItem.textContent = element;
  //  ingredientsId.append(lastItem);
// 
// 
// });
//  console.log('resut', resut);






// const addLiForUl = (callbac) => {
//   // console.log(
//     ingredients.map((element) => {
//       lastItem.textContent = element;
//       return ingredientsId.append(lastItem);
//     })
//   // );
// };
// addLiForUl(ingredients);

// console.log('lastItem', lastItem);
// ingredientsId.append(lastItem);

// 2. Добавит название ингредиента как его текстовое содержимое.

// const list = document.querySelector(".usernames");

// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// 3. Добавит элементу класс item.
// elem.classList.add('.item') - добавляет класс cls в список классов элемента.

// 4. вставит все <li> за одну операцию в список ul.ingredients
