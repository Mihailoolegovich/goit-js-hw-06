// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

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
