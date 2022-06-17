import { ComponentBase } from '../../component-base.mjs';

export class SignInComponent extends ComponentBase {
  //TODO: Use symbols for these...
  static Services = {};
  static Template = '<h1>Hello World</h1>';
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
    this.registerClick('#submit', () => this.signIn());
    this.registerClick('#cancel', () => this.cancel());
  }

  #login = this.getInput('#email');
  #password = this.getInput('#password');

  signIn() {
    this.#accountService.login(this.#login.get(), this.#password.get());
  }

  cancel() {
    this.#router.navigateTo('/');
  }
}

export const build = builder => builder.build(SignInComponent, import.meta.url);
