import { ComponentBase } from '../../component-base.mjs';

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
    this.registerClick('#register', () => this.#router.navigateTo('/register'));
    this.registerClick('#signin', () => this.#router.navigateTo('/sign-in'));
  }
}

export const build = builder =>
  builder.buildComponent(NavbarComponent, import.meta.url);
