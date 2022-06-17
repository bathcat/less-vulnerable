import { fetchTemplate } from '/tools.mjs';

export const init = async ({ window }) => {
  const template = await fetchTemplate(import.meta.url);

  class Root extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  window.customElements.define('avc-root', Root);
};
