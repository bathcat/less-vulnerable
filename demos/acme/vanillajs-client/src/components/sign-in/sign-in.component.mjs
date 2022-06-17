import { Component } from '../../component.mjs';

export class SignInComponent extends Component {
  //TODO: Use symbols for these...
  static Tag = 'avc-sign-in';
  static Services = {};
  static Template = '<h1>Hello World</h1>';

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

export const init = async ({
  window,
  router,
  fetchTemplate,
  accountService,
}) => {
  SignInComponent.Template = await fetchTemplate(import.meta.url);
  SignInComponent.Services = { router, accountService };

  window.customElements.define(SignInComponent.Tag, SignInComponent);
};
