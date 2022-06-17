import { ComponentBase } from '../../component-base.mjs';

export class RegisterComponent extends ComponentBase {
  static Tag = 'avc-register';

  constructor(template = RegisterComponent.Template) {
    super(template);
  }
}

export const build = builder =>
  builder.buildComponent(RegisterComponent, import.meta.url);
