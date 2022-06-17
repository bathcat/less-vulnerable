import { ComponentBase } from '../../component-base.mjs';

export class RootComponent extends ComponentBase {
  static Tag = 'avc-root';

  constructor(template = RootComponent.Template) {
    super(template);
  }
}

export const build = builder =>
  builder.buildComponent(RootComponent, import.meta.url);
