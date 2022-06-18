import { ComponentBase } from '../../infrastructure/component-base.mjs';

export class FooterComponent extends ComponentBase {
  static Tag = 'avc-footer';

  constructor(template = FooterComponent.Template) {
    super(template);
  }
}

export const build = builder =>
  builder.buildComponent(FooterComponent, import.meta.url);
