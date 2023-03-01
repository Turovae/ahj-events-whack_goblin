import GameBoard from './GameBoard/GameBoard';
import Goblin from './Characters/Goblin';
import GameState from './GameState/GameState';
import StartModal from './StartModal/StartModal';

export default class GamePlay {
  constructor(container, size) {
    this.container = document.querySelector(container);
    this.board = new GameBoard(this.container.querySelector('.board-container'), size);
    this.goblin = new Goblin();
    this.gameState = new GameState(this.container.querySelector('.game-state'));
    this.startModal = new StartModal(this.container.querySelector('.board-container'), this.startGame.bind(this));

    this.onWhack = this.onWhack.bind(this);

    this.container.addEventListener('click', this.onWhack);

    this.timeoutId = null;
    this.timeout = 1000;
  }

  onWhack(event) {
    event.preventDefault();

    const whackOnBoard = event.target.closest('.board');
    if (!whackOnBoard) {
      return;
    }

    const whackOnGoblin = event.target.closest('.goblin');
    if (whackOnGoblin) {
      this.gameState.hit += 1;
      this.loop();
    }
  }

  loop() {
    clearInterval(this.timeoutId);
    this.timeoutId = null;

    if (this.gameState.miss >= 5) {
      this.startModal.open();
      this.goblin.remove();
    } else {
      this.board.placeCharacter(this.goblin);
      this.timeoutId = setTimeout(() => {
        this.gameState.miss += 1;
        this.loop();
      }, this.getTimeout());
    }
  }

  getTimeout() {
    return this.timeout / (1 + Math.floor(this.gameState.hit / 10) * 0.1);
  }

  startGame() {
    this.gameState.clear();
    this.startModal.close();
    this.loop();
  }

  init() {
    this.startModal.open();
  }
}
