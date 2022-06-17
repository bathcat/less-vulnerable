import { ComponentBase } from '../../component-base.mjs';

//TODO: Use the injected navigation service
export class NavbarComponent extends ComponentBase {
  static Tag = 'avc-navbar';

  constructor(template = NavbarComponent.Template) {
    super(template);
  }
}

export const build = builder =>
  builder.buildComponent(NavbarComponent, import.meta.url);
