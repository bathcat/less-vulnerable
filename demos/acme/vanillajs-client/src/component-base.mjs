export const component = base =>
  class extends base {
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

    // Adds an on-click event listener to a button with the
    //   specified id, calling a function with the same name.
    _bindClickHandler(id) {
      const element = this.querySelector(`#${id}`);
      element.addEventListener('click', () => this[id]());
    }

    _bindClickHandlers(...ids) {
      ids.forEach(id => this._bindClickHandler(id));
    }

    //Adds a property with the specified name,
    // binding it to the value of an <input> element
    // with a matching id.
    _bindInputProperty(id) {
      const element = this.querySelector(`#${id}`);
      Object.defineProperty(this, id, {
        get() {
          return element.value;
        },
        set(value) {
          element.value = value;
        },
      });
    }

    _bindInputProperties(ids) {
      ids.forEach(id => this._bindInputProperty(id));
    }
  };

export class ComponentBase extends component(HTMLElement) {
  constructor(template) {
    super();
    this.attachTemplate(template);
  }

  attachTemplate(template) {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  querySelector = selector => this.shadowRoot.querySelector(selector);
}
