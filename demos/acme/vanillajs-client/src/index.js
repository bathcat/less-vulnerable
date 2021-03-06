import { App } from "./app.mjs";
import { routes } from "./routes.mjs";

const apiUrl = 'https://localhost:7232';
const app = new App(window,apiUrl,routes);
await app.start();

// import { build as navbar } from './components/navbar/navbar.component.mjs';
// import { build as footer } from './components/footer/footer.component.mjs';
// import { build as home } from './components/home/home.component.mjs';
// import { build as root } from './components/root/root.component.mjs';
// import { build as snakeList } from './components/snake-list/snake-list.component.mjs';
// import { build as snakeListItem } from './components/snake-list/snake-list-item.component.mjs';
// import { build as snakeEditor } from './components/snake-editor/snake-editor.component.mjs';
// import { build as snakeBuilder } from './components/snake-builder/snake-builder.component.mjs';
// import { build as signIn } from './components/sign-in/sign-in.component.mjs';
// import { build as register } from './components/register/register.component.mjs';
// import { build as latinTranslator } from './components/latin-translator/latin-translator.component.mjs';
// import { build as page } from './components/page/page.component.mjs';

// import { ElementBuilder } from './element-builder.mjs';
// import { Router } from './services/router.mjs';
// import { routes } from './routes.mjs';
// import { SnakeService } from './services/snake-service.mjs';
// import { TranslationService } from './services/translation-service.mjs';
// import { LocalStorageService } from './services/local-storage-service.mjs';
// import { AccountService } from './services/account-service.mjs';
// import { SecurityService } from './services/security-service.mjs';
// import { HttpClient } from './services/http-client.mjs';

// const builders = [
//   signIn,
//   footer,
//   home,
//   latinTranslator,
//   navbar,
//   page,
//   root,
//   snakeEditor,
//   snakeBuilder,
//   register,
//   snakeListItem,
//   snakeList,
// ];

// const router = new Router(routes);

// const apiUrl = 'https://localhost:7232';


// const securityService = new SecurityService();
// const httpClient = new HttpClient()

// const injectables = {
//   router,
//   accountService: new AccountService(apiUrl),
//   translationService: new TranslationService(),
//   localStorageService: new LocalStorageService(),
//   snakeService: new SnakeService(apiUrl),
//   securityService
// };

// const elementBuilder = new ElementBuilder(window.customElements, injectables);

// for (let build of builders) {
//   await build(elementBuilder);
// }

// router.startWith(window.location.pathname);
