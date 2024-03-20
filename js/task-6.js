function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const btnCreate = controls.querySelector("[data-create]");
const btnDestroy = controls.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes() {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }
  boxes.innerHTML = "";
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const boxx = document.createElement("div");
    boxx.style.width = `${size}px`;
    boxx.style.height = `${size}px`;
    boxx.style.backgroundColor = getRandomHexColor;
    boxes.appendChild(boxx);
    size += 10;
  }

  input.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
