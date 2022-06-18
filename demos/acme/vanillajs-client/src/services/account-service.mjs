const storageKey = 'xyz';

export class AccountService {
  constructor(rootUrl) {
    this.rootUrl = rootUrl;
  }

  get url() {
    return `${this.rootUrl}/authenticationrequests`;
  }

  async login(model) {
    const method = 'POST';
    const body = JSON.stringify( model);
    const headers = { 'Content-Type': 'application/json' };
    const response = await fetch(this.url, { method, body, headers });
    const info = await response.json();

    console.log(`Response: ${JSON.stringify(info)}`);
  }

  async logout(username, password) {}
}
