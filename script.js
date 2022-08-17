import {
  snakeSpeed,
  update as updateSnake,
  draw as snakeDraw,
  getsnakeHead,
  snakeIntersection,
} from "./snake.js";
import { draw as drawFood, update as updateFood } from "./food.js";
import { snakeOutsideGrid } from "./grid.js";
let gameBoard = document.getElementById("game__board");
let lastRenderTime = 0;
let gameOver = false;
function main(currentTime) {
  if (gameOver) {
    if (confirm("Ti Pidor")) {
      window.location = "/";
    }
    return;
  }
  window.requestAnimationFrame(main);
  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondSinceLastRender < 1 / snakeSpeed) return;
  lastRenderTime = currentTime;
  update();
  draw();
  console.log("Render");
}
window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  snakeDraw(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = snakeOutsideGrid(getsnakeHead()) || snakeIntersection();
}
