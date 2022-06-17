import { fetchTemplate } from '/tools.mjs';

export const init = async ({ window }) => {
  const template = await fetchTemplate(import.meta.url);

  class Footer extends HTMLElement {
    constructor() {
      super();
      this.appendChild(template.content.cloneNode(true));
    }
  }

  window.customElements.define('avc-footer', Footer);
};
