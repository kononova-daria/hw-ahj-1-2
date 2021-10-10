export default class Game {
  constructor() {
    this.boardSize = 4;
    this.container = null;
    this.cells = [];
    this.currentIndex = null;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('Container is not HTMLElement');
    }
    this.container = container;
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('Board not bind to DOM');
    }
  }

  drawBoard() {
    this.checkBinding();

    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell', `number-${i + 1}`);
      this.container.appendChild(cellEl);
    }

    this.cells = Array.from(this.container.children);

    const cellGoblin = document.createElement('div');
    cellGoblin.classList.add('goblin');

    const index = Math.floor(Math.random() * (this.cells.length));

    this.cells[index].appendChild(cellGoblin);
    this.currentIndex = index;
  }

  redrawPositions() {
    const goblin = document.querySelector('.goblin');

    let newIndex = Math.floor(Math.random() * (this.cells.length));
    while (newIndex === this.currentIndex) {
      newIndex = Math.floor(Math.random() * (this.cells.length));
    }

    this.cells[newIndex].appendChild(goblin);
    this.currentIndex = newIndex;
  }
}
