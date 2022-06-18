import { ComponentBase } from '../../component-base.mjs';

export class SignInComponent extends ComponentBase {
  static Tag = 'avc-sign-in';

  #accountService = undefined;
  #router = undefined;

  constructor(
    template = SignInComponent.Template,
    accountService = SignInComponent.Services.accountService,
    router = SignInComponent.Services.router
  ) {
    super(template);
    this.#accountService = accountService;
    this.#router = router;
    this._bindClickHandlers('signIn', 'cancel');
    this._bindInputModel('login', 'password');
  }

  async signIn() {
    await this.#accountService.login(this.model);
    this.#router.navigateTo('/');
  }

  cancel() {
    this.#router.navigateTo('/');
  }
}

export const build = builder =>
  builder.buildComponent(SignInComponent, import.meta.url);
