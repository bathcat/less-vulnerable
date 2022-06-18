import { ComponentBase } from '/infrastructure/component-base.mjs';

export class HomeComponent extends ComponentBase {
  static Tag = 'avc-home';

  constructor(template = HomeComponent.Template) {
    super(template);
  }
}

export const build = builder =>
  builder.buildComponent(HomeComponent, import.meta.url);
