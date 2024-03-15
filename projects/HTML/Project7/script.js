const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const box = 20;
let snake = [{ x: 9 * box, y: 10 * box }];
let food = { x: Math.floor(Math.random() * 19 + 1) * box, y: Math.floor(Math.random() * 19 + 1) * box };
let score = 0;
let direction;

document.addEventListener('keydown', changeDirection);

function changeDirection(event) {
  if (event.keyCode === 37 && direction !== 'RIGHT') {
    direction = 'LEFT';
  } else if (event.keyCode === 38 && direction !== 'DOWN') {
    direction = 'UP';
  } else if (event.keyCode === 39 && direction !== 'LEFT') {
    direction = 'RIGHT';
  } else if (event.keyCode === 40 && direction !== 'UP') {
    direction = 'DOWN';
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw snake
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = (i === 0) ? 'green' : 'white';
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }

  // Draw food
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, box, box);

  // Move snake
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction === 'LEFT') snakeX -= box;
  if (direction === 'UP') snakeY -= box;
  if (direction === 'RIGHT') snakeX += box;
  if (direction === 'DOWN') snakeY += box;

  // If the snake eats the food
  if (snakeX === food.x && snakeY === food.y) {
    score++;
    food = { x: Math.floor(Math.random() * 19 + 1) * box, y: Math.floor(Math.random() * 19 + 1) * box };
  } else {
    snake.pop(); // Remove the tail
  }

  // Add new head
  const newHead = { x: snakeX, y: snakeY };

  // Game over conditions
  if (
    snakeX < box || snakeX > 19 * box ||
    snakeY < box || snakeY > 19 * box ||
    collision(newHead, snake)
  ) {
    clearInterval(game);
    alert('Game Over! Your score is ' + score);
    location.reload(); // Restart the game
  }

  snake.unshift(newHead);

  // Display score
  ctx.fillStyle = 'black';
  ctx.font = '20px Arial';
  ctx.fillText('Score: ' + score, 10, 30);
}

function collision(head, array) {
  for (let i = 0; i < array.length; i++) {
    if (head.x === array[i].x && head.y === array[i].y) {
      return true;
    }
  }
  return false;
}

let game = setInterval(draw, 100);
