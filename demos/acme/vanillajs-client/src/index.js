import { init as navbar } from './components/navbar/navbar.component.mjs';
import { init as footer } from './components/footer/footer.component.mjs';
import { init as home } from './components/home/home.component.mjs';
import { init as root } from './components/root/root.component.mjs';
import { init as snakeList } from './components/snake-list/snake-list.component.mjs';
import { init as snakeListItem } from './components/snake-list/snake-list-item.component.mjs';
import { init as snakeDetails } from './components/snake-details/snake-details.component.mjs';
import { init as signIn } from './components/sign-in/sign-in.component.mjs';
import { init as register } from './components/register/register.component.mjs';
import { init as latinTranslator } from './components/latin-translator/latin-translator.component.mjs';
import { init as page } from './components/page/page.component.mjs';

import { Router } from './router.mjs';
import { routes } from './routes.mjs';
import { SnakeService } from './services/snake-service.mjs';
import { TranslationService } from './services/translation-service.mjs';
import { LocalStorageService } from './services/local-storage-service.mjs';
import { AccountService } from './account-service.mjs';
import { TemplateService, fetchTemplate } from './services/template-service.mjs';
import {ComponentBase} from './component-base.mjs';

const components = [
  root,
  home,
  footer,
  navbar,
  snakeList,
  snakeListItem,
  snakeDetails,
  signIn,
  register,
  latinTranslator,
  page,
];

const router = new Router(routes);

const apiUrl = 'https://localhost:7232';

const injectables = {
  window,
  router,
  accountService: new AccountService(apiUrl),
  translationService: new TranslationService(),
  localStorageService: new LocalStorageService(),
  snakeService: new SnakeService(apiUrl),
  fetchTemplate,
  ComponentBase,
};

for (let init of components) {
  await init(injectables);
}

window.navigateTo = path => router.navigateTo(path);

router.startWith(window.location.pathname);
