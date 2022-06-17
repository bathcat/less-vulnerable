import { fetchTemplate } from '/tools.mjs';

export const init = async ({ window }) => {
  const template = await fetchTemplate(import.meta.url);

  class RegisterComponent extends HTMLElement {
  
    constructor() {
      super();
      this.appendChild(template.content.cloneNode(true));
    }


  }

  window.customElements.define('avc-register', RegisterComponent);
};
