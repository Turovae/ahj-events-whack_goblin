import './StartModal.css';

export default class StartModal {
  constructor(container, callback) {
    this.container = container;
    this.modal = null;
    this.callback = callback;

    this.createModal();
  }

  createModal() {
    this.modal = document.createElement('div');
    this.modal.classList.add('modal');
    this.modal.innerHTML = `
      <h3 class="modal-head">потрачено...</h3>
      <button class="new-game-btn">Новая игра</button>
    `;

    this.modal.querySelector('.new-game-btn').addEventListener('click', this.callback);
  }

  open() {
    this.container.appendChild(this.modal);
  }

  close() {
    this.modal.remove();
  }
}
