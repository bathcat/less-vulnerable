const storageKey = 'xyz';
import { decode } from './token.mjs';

export class AccountService {
  //TODO: Make these private.
  rootUrl='';
  fetch = () => {throw new Error('No fetch!');}

  constructor({fetch,rootUrl}) {
    this.rootUrl = rootUrl;
    this.fetch=fetch;
  }

  get url() {
    return `${this.rootUrl}/authenticationrequests`;
  }

  async login(model) {
    const method = 'POST';
    const body = JSON.stringify(model);
    const headers = { 'Content-Type': 'application/json' };
    const response = await this.fetch(this.url, { method, body, headers });
    const info = await response.json();
    const token = info.token;
    const tokenInfo = decode(token);
  }

  async logout(username, password) {}
}
