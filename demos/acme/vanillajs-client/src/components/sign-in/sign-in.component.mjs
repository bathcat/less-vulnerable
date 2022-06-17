
export const init = async ({
  window,
  router,
  fetchTemplate,
  accountService,
  Component
}) => {

  const _template = await fetchTemplate(import.meta.url);

  class SignInComponent extends Component {
    #accountService = undefined;
    #router = undefined;

    constructor(accountS = accountService,routerS=router) {
      super(_template);
      this.#accountService = accountS;
      this.#router=routerS;
      this.registerClick('#submit', () => this.signIn());
      this.registerClick('#cancel', () => this.cancel());
    }

    #login = this.getInput('#email');
    #password = this.getInput('#password');

    signIn() {
      this.#accountService
        .login(this.#login.get(), this.#password.get());
    }

    cancel() {
      this.#router.navigateTo('/');
    }
  }
  window.customElements.define('avc-sign-in', SignInComponent);
};
