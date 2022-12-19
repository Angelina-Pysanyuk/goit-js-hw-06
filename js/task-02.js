const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("ul#ingredients");

const addItem = (el) => {
  const listItem = document.createElement("li");
  listItem.textContent = el;
  listItem.classList.add("item");
  return listItem;
  };

ingredients.map(el => {
  ingredientsList.append(addItem(el));
});