const categoriesNames = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesNames.length}`);

const categoryTitles = document.getElementsByTagName('h2');
for (const category of categoryTitles) {
    console.log(`Category: ${category.innerHTML}`);
    const elements = category.nextElementSibling.children;
    console.log(`Elements: ${elements.length}`)
}
