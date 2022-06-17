import { ComponentBase } from '../../component-base.mjs';

export class HomeComponent extends ComponentBase {
  static Services = {};
  static Template = '<h1>Hello World</h1>';
  static Tag = 'avc-home';

  constructor(template = HomeComponent.Template) {
    super(template);
  }
}

export const build = builder => builder.build(HomeComponent, import.meta.url);
