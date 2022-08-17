import { onSnake, expandSnake } from "./snake.js";
import { getRandomGridPos } from "./grid.js";
let food = { x: 10, y: 1 };
let expansionRate = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(expansionRate);
    food = getRandomFood();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFood() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = getRandomGridPos();
  }
  return newFoodPosition;
}
