import { fetchTemplate } from '/tools.mjs';

export const init = async ({ window, snakeService }) => {
  const template = await fetchTemplate(import.meta.url);

  class SnakeDetails extends HTMLElement {
    snakeService = snakeService;
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.getInput('#save').addEventListener('click', () => this.save());
      this.getInput('#cancel').addEventListener('click', () => this.cancel());
    }

    get key() {
      return window.location.href.split('/').slice(-1)[0];
    }

    save() {
      this.snakeService.save(this.model);
      navigateTo('/snakes');
    }

    cancel() {
      navigateTo('/snakes');
    }

    connectedCallback() {
      this.snakeService.getById(this.key).then(snake => {
        this.model = snake;
      });
    }

    getInput(selector) {
      return this.shadowRoot.querySelector(selector);
    }

    get model() {
      return {
        id: this.key,
        name: this.getInput('#name').value,
        color: this.getInput('#color').value,
        meannessLevel: this.getInput('#meannessLevel').value,
      };
    }

    set model(value) {
      this.getInput('#name').value = value.name;
      this.getInput('#color').value = value.color;
      this.getInput('#meannessLevel').value = value.meannessLevel;
      this.getInput('#payGrade').value = value.payGrade;
    }
  }

  window.customElements.define('avc-snake-details', SnakeDetails);
};
