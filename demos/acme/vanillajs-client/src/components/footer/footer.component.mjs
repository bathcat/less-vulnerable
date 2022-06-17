import { ComponentBase } from '../../component-base.mjs';

export class FooterComponent extends ComponentBase {
  static Services = {};
  static Template = '<h1>Hello World</h1>';
  static Tag = 'avc-footer';

  constructor(template = FooterComponent.Template) {
    super(template);
  }
}

export const build = builder => builder.build(FooterComponent, import.meta.url);
