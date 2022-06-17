import { fetchTemplate } from '/tools.mjs';

export const init = async ({ window, accountService, router }) => {
  const template = await fetchTemplate(import.meta.url);

  class SignInComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      this.shadowRoot.querySelector('#cancel').addEventListener('click', () =>
        this.cancel()
      );
      this.shadowRoot.querySelector('#submit').addEventListener('click', () =>
        this.signIn()
      );
    }

    get login() {
      return this.shadowRoot.querySelector('#email').value;
    }

    get password() {
      return this.shadowRoot.querySelector('#password').value;
    }

    signIn() {
      this.accountService.login(this.login,this.password)
                         .then(_=>navigator.navigateTo('/'));
    }

    cancel() {
      router.navigateTo('/');
    }
  }
  window.customElements.define('avc-sign-in', SignInComponent);
};
