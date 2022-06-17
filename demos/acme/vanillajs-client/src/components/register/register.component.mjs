export const init = async ({ window, fetchTemplate }) => {
  const template = await fetchTemplate(import.meta.url);

  class RegisterComponent extends HTMLElement {
    constructor() {
      super();
      this.appendChild(template.content.cloneNode(true));
    }
  }

  window.customElements.define('avc-register', RegisterComponent);
};
