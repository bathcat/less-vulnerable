export const init = async ({ window, fetchTemplate }) => {
  const template = await fetchTemplate(import.meta.url);

  class Footer extends HTMLElement {
    constructor() {
      super();
      this.appendChild(template.content.cloneNode(true));
    }
  }

  window.customElements.define('avc-footer', Footer);
};
