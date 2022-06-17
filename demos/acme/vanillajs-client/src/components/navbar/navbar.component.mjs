export const init = async ({ window, fetchTemplate }) => {
  const template = await fetchTemplate(import.meta.url);

  class Navbar extends HTMLElement {
    constructor() {
      super();
      this.appendChild(template.content.cloneNode(true));
    }
    foo() {
      alert('hw');
    }
  }

  window.customElements.define('avc-navbar', Navbar);
};
