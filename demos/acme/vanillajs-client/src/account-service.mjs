const storageKey = 'xyz';

export class AccountService {
  constructor(rootUrl) {
    this.rootUrl = rootUrl;
  }

  get url() {
    return `${this.rootUrl}/authenticationrequests`;
  }

  async login(login, password) {
    const method = 'POST';
    const body = { login, password };
    const response = await fetch(this.url, { method, body });
    const info = await response.json();

    console.log(`Response: ${JSON.stringify(info)}`);
  }

  async logout(username, password) {}
}
