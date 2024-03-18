const categoriesAmount = document.getElementById("categories");

const itemsInCategorie = categoriesAmount.querySelectorAll("li.item");

console.log(`Number of categories: ${itemsInCategorie.length}`);

itemsInCategorie.forEach((element) => {
  const categoryName = element.querySelector("h2").textContent;

  const ulElements = element.querySelectorAll("ul > li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${ulElements.length}`);
});
