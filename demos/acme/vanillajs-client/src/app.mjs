import { build as navbar } from './components/navbar/navbar.component.mjs';
import { build as footer } from './components/footer/footer.component.mjs';
import { build as home } from './components/home/home.component.mjs';
import { build as root } from './components/root/root.component.mjs';
import { build as snakeList } from './components/snake-list/snake-list.component.mjs';
import { build as snakeListItem } from './components/snake-list/snake-list-item.component.mjs';
import { build as snakeEditor } from './components/snake-editor/snake-editor.component.mjs';
import { build as snakeBuilder } from './components/snake-builder/snake-builder.component.mjs';
import { build as signIn } from './components/sign-in/sign-in.component.mjs';
import { build as latinTranslator } from './components/latin-translator/latin-translator.component.mjs';
import { build as page } from './components/page/page.component.mjs';
import { build as error } from './components/error/error.component.mjs';
import { build as loginInfo } from './components/login-info/login-info.component.mjs';

import { ElementBuilder } from '/infrastructure/element-builder.mjs';
import { Router } from './services/router.mjs';
import { SnakeService } from './services/snake-service.mjs';
import { TranslationService } from './services/translation-service.mjs';
import { LocalStorageService } from './services/local-storage-service.mjs';
import { AccountService } from './services/account-service.mjs';
import { SecurityService } from './services/security-service.mjs';
import { ErrorService } from './services/error-service.mjs'; 
import { HttpClient } from './services/http-client.mjs';

const builders = [
  signIn,
  footer,
  home,
  latinTranslator,
  navbar,
  page,
  root,
  snakeEditor,
  snakeBuilder,
  snakeListItem,
  snakeList,
  error,
  loginInfo,
];

export class App {
  #window = {};
  #apiUrl = undefined;
  #routes = [];
  constructor(window, apiUrl, routes) {
    this.#window = window;
    this.#apiUrl = apiUrl;
    this.#routes = routes;
  }

  async start() {
    const services = this._configureServices();
    await this._buildCustomElements(services);

    const { router } = services;
    router.startWith(this.#window.location.pathname);
  }

  _configureServices() {
    let services = {
      routes: this.#routes,
      localStorageService: new LocalStorageService(),
      _fetch: this.#window.fetch.bind(this.#window),
      translationService: new TranslationService(),
      securityService: new SecurityService(),
      rootUrl: this.#apiUrl,
      errorService: new ErrorService(),
    };

    services = {
      ...services,
      router: new Router(services),
      httpClient: new HttpClient(services),
    };

    return {
      ...services,
      accountService: new AccountService(services),
      snakeService: new SnakeService(services),
    };
  }

  async _buildCustomElements(services) {
    const elementBuilder = new ElementBuilder(
      this.#window.customElements,
      services
    );

    for (let build of builders) {
      await build(elementBuilder);
    }
  }
}
