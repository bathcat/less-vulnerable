import { ComponentBase } from '../../component-base.mjs';

export class FooterComponent extends ComponentBase {
  static Tag = 'avc-footer';

  constructor(template = FooterComponent.Template) {
    super(template);
  }
}

export const build = builder => builder.build(FooterComponent, import.meta.url);
