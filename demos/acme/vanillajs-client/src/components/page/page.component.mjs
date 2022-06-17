export const init = async ({ window, fetchTemplate }) => {
  const template = await fetchTemplate(import.meta.url);

  class PageElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      if (!this.hasAttribute('title')) {
        return;
      }
      this.shadowRoot.getElementById('title').innerText =
        this.getAttribute('title');
    }
  }

  window.customElements.define('avc-page', PageElement);
};
