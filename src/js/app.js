import Game from './game';

const game = new Game();

game.bindToDOM(document.querySelector('#game-container'));
game.drawBoard();
setInterval(() => game.redrawPositions(), 2000);
