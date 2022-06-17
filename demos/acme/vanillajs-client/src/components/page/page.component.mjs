import { ComponentBase } from '../../component-base.mjs';

export class PageComponent extends ComponentBase {
  static Tag = 'avc-page';

  constructor(template = PageComponent.Template) {
    super(template);
  }
}

export const build = builder => builder.build(PageComponent, import.meta.url);
