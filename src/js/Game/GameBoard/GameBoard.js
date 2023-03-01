import './GameBoard.css';

export default class GameBoard {
  constructor(container, size) {
    this.container = container;
    this.board = null;
    this.cells = [];
    this.boardSize = size;
    this.currentPosition = null;

    this.drawBoard();
  }

  drawBoard() {
    this.board = document.createElement('div');
    this.board.classList.add('board');
    this.container.appendChild(this.board);
    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.board.appendChild(cell);
    }

    this.cells = Array.from(this.board.children);
  }

  getPosition() {
    let position;
    do {
      position = Math.floor(Math.random() * this.cells.length);
    } while (position === this.currentPosition);
    this.currentPosition = position;
    return position;
  }

  placeCharacter(character) {
    this.cells[this.getPosition()].appendChild(character);
  }
}
