// Components
import Game from "./game.js"

// Canvas setup
let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

var background = new Image();

background.onload = function(){
  ctx.drawImage(background, 800, 600);
}();

background.src = '../assets/images/clouds.png';


const gameLoop = (timeStamp) => {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(deltaTime);
  game.draw(ctx);
  ctx.fillStyle=("")

  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);