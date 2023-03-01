import './GameState.css';

/* eslint-disable no-underscore-dangle */
export default class GameState {
  constructor(element) {
    this._element = element;
    this._miss = 0;
    this.missEl = null;
    this._hit = 0;
    this.hitEl = null;

    this.init();
  }

  init() {
    if (this._element.children.length === 0) {
      this._element.innerHTML = `
        Попаданий: <span class="game-state-hit"></span> |
        Промахов: <span class="game-state-miss"></span>
      `;
      this.missEl = this._element.querySelector('.game-state-miss');
      this.hitEl = this._element.querySelector('.game-state-hit');
    }
    this.clear();
  }

  get miss() {
    return this._miss;
  }

  set miss(num) {
    this._miss = num;
    this.missEl.textContent = this._miss;
  }

  get hit() {
    return this._hit;
  }

  set hit(num) {
    this._hit = num;
    this.hitEl.textContent = this._hit;
  }

  clear() {
    this._miss = 0;
    this._hit = 0;
    this.missEl.textContent = this._miss;
    this.hitEl.textContent = this._hit;
  }
}
