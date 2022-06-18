import { ComponentBase } from '/infrastructure/component-base.mjs';

//TODO: Use the injected navigation service
export class NavbarComponent extends ComponentBase {
  static Tag = 'avc-navbar';
  #router = undefined;
  constructor(
    template = NavbarComponent.Template,
    router = NavbarComponent.Services.router
  ) {
    super(template);
    this.#router = router;

    this.registerClick('#snakes', () => this.#router.navigateTo('/snakes'));
    this.registerClick('#latin', () =>
      this.#router.navigateTo('/latin-translator')
    );
  }
}

export const build = builder =>
  builder.buildComponent(NavbarComponent, import.meta.url);
