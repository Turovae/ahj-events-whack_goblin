import './Goblin.css';

export default function Goblin() {
  this.element = document.createElement('div');
  this.element.classList.add('goblin');

  return this.element;
}
