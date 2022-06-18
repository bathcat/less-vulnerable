const storageKey = 'xyz';
import { decode } from './token.mjs';

export class AccountService {
  #httpClient = undefined;
  #securityService = undefined;

  constructor({ httpClient, securityService }) {
    this.#httpClient = httpClient;
    this.#securityService = securityService;
  }

  get url() {
    return `/authenticationrequests`;
  }

  async login(model) {
    const info = await this.#httpClient.post(this.url, model);
    const token = info.token;
    console.log(`Here's the token: ${token}`);
    const tokenInfo = decode(token);

    console.log(`Here's the info: ${JSON.stringify(tokenInfo)}`);
  }

  async logout(username, password) {}
}
