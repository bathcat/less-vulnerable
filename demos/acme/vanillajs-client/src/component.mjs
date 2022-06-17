export class Component extends HTMLElement {
  constructor(template) {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  querySelector = selector => this.shadowRoot.querySelector(selector);

  getInput(selector) {
    const element = this.querySelector(selector);
    if (!element) {
      throw new Error('Cant find element.');
    }
    return {
      get: () => element.value,
      set: val => (element.value = val),
    };
  }

  registerClick = (selector, callback) =>
    this.querySelector(selector).addEventListener('click', () => callback());
}
