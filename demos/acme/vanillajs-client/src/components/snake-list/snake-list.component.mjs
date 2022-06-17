import { SnakeService } from '../../services/snake-service.mjs';
import { fetchTemplate } from '/tools.mjs';

export const init = async ({ window, snakeService }) => {
  const template = await fetchTemplate(import.meta.url);

  class SnakeList extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot
        .querySelector('#create')
        .addEventListener('click', () => this.create());
    }

    connectedCallback() {
      this.refresh();
    }

    adoptedCallback() {
      this.refresh();
    }

    create() {
      alert('TODO: Implement this.');
    }

    refresh() {
      snakeService.getAll().then(snakes => {
        this.render(snakes);
      });
    }

    render(snakes) {
      const tbody = this.shadowRoot.querySelector('tbody');
      tbody.innerHTML = '';
      for (let snake of snakes) {
        let e = document.createElement('tr', { is: 'avc-snake-list-item' });
        e.model = snake;
        tbody.appendChild(e);
      }
    }
  }

  window.customElements.define('avc-snake-list', SnakeList);
};
