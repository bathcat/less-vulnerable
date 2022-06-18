import { ComponentBase } from '/infrastructure/component-base.mjs';

export class LoginInfoComponent extends ComponentBase {
  static Tag = 'avc-login-info';

  #router = undefined;
  #securityService = undefined;
  constructor(
    template = LoginInfoComponent.Template,
    router = LoginInfoComponent.Services.router,
    securityService = LoginInfoComponent.Services.securityService
  ) {
    super(template);
    this.#router = router;
    this.#securityService = securityService;
  }

  connectedCallback() {
    this._bindClickHandlers('signin', 'signout');
    this.#securityService.loginInfo$.subscribe(i => this.infoUpdated(i));
  }

  signin() {
    this.#router.navigateTo('/sign-in');
  }

  signout() {
    this.#securityService.token = null;
  }

  infoUpdated(newInfo) {
    //TODO: This is pretty sleazy.
    const signin = this.querySelector('#signin');
    signin.classList.add('hidden');
    const signout = this.querySelector('#signout');
    signout.classList.add('hidden');
    if (newInfo.isLoggedIn) {
      signout.classList.remove('hidden');
    } else {
      signin.classList.remove('hidden');
    }
  }
}

export const build = builder =>
  builder.buildComponent(LoginInfoComponent, import.meta.url);
