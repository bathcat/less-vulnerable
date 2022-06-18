import { ComponentBase } from '/infrastructure/component-base.mjs';

export class PageComponent extends ComponentBase {
  static Tag = 'avc-page';

  constructor(template = PageComponent.Template) {
    super(template);
  }

  connectedCallback() {
    if (this.hasAttribute('title')) {
      this.shadowRoot.querySelector('#title').innerHTML =
        this.getAttribute('title');
    }
  }
}

export const build = builder =>
  builder.buildComponent(PageComponent, import.meta.url);
