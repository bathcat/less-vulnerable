import { fetchTemplate } from '/tools.mjs';

export const init = async ({ window, translationService }) => {
  const template = await fetchTemplate(import.meta.url);

  class LatinTranslatorComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      this.translateButon.addEventListener('click', () => this.translate());

      let params = new URLSearchParams(document.location.search);
      let english = params.get('english');
      if (english) {
        this.englishControl.value = english;
        this.translate();
      }
    }

    get translateButon() {
      return this.shadowRoot.querySelector('#translate');
    }

    get englishControl() {
      return this.shadowRoot.querySelector('#english');
    }

    get latinControl() {
      return this.shadowRoot.querySelector('#latin');
    }

    translate() {
      const original = this.englishControl.value;
      const translated = translationService.translate(original);
      this.latinControl.outerHTML = original;
    }
  }

  window.customElements.define(
    'avc-latin-translator',
    LatinTranslatorComponent
  );
};
