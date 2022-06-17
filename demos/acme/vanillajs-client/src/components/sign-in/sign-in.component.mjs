import { fetchTemplate } from '/tools.mjs';

export const init = async ({
  window,
  router,
  fetchTemplate,
  accountService,
}) => {
  //
  class AcmeElementBase extends HTMLElement {
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

  //
  const _template = await fetchTemplate(import.meta.url);

  class SignInComponent extends AcmeElementBase {
    #accountService = undefined;

    constructor() {
      super(_template);
      this.#accountService = accountService;
      this.registerClick('#submit', () => this.signIn());
      this.registerClick('#cancel', () => this.cancel());
    }

    #login = this.getInput('#email');
    #password = this.getInput('#password');

    signIn() {
      this.#accountService
        .login(this.#login.get(), this.#password.get())
        .then(_ => navigator.navigateTo('/'));
    }

    cancel() {
      router.navigateTo('/');
    }
  }
  window.customElements.define('avc-sign-in', SignInComponent);
};
