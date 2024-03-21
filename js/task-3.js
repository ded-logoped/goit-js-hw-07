const userInput = document.querySelector("#name-input");
const userSpan = document.querySelector("#name-output");

userInput.addEventListener("input", () => {
  const noSpaces = userInput.value.trim();

  if (noSpaces === "") {
    userSpan.textContent = "Anonymous";
  } else {
    userSpan.textContent = noSpaces;
  }
});
