const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("ul#ingredients");

let ingredientsItem = '';

ingredients.map(el => {
  ingredientsItem += `<li class="item">${el}</li>`;
});

ingredientsList.innerHTML = ingredientsItem;