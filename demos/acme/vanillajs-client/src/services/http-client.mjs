export class HttpClient {
  #rootUrl = undefined;
  #fetch = undefined;
  #securityService = undefined;
  constructor({ rootUrl, _fetch, securityService }) {
    this.#rootUrl = rootUrl;
    this.#securityService = securityService;
    this.#fetch = _fetch;
  }

  _getUrl(relative) {
    //TODO: Use new URL
    if (relative.startsWith('/')) {
      relative = relative.slice(1);
    }
    return `${this.#rootUrl}/${relative}`;
  }

  get headersForContentType() {
    return { 'Content-Type': 'application/json' };
  }

  get headersForAuthorization() {
    const token = this.#securityService.token;
    if (!token) {
      return {};
    }
    return { Authorization: `Bearer ${token}` };
  }

  async get(relativeUrl) {
    const url = this._getUrl(relativeUrl);
    const headers = {
      ...this.headersForAuthorization,
    };

    const response = await this.#fetch(url, { headers });
    return await response.json();
  }

  async put(relativeUrl, contents) {
    const url = this._getUrl(relativeUrl);
    const headers = {
      ...this.headersForContentType,
      ...this.headersForAuthorization,
    };

    const body = JSON.stringify(contents);

    const response = await this.#fetch(url, {
      method: 'PUT',
      body,
      headers,
    });

    return await response.json();
  }

  async post(relativeUrl, contents) {
    const url = this._getUrl(relativeUrl);
    const headers = {
      ...this.headersForContentType,
      ...this.headersForAuthorization,
    };
    const body = JSON.stringify(contents);

    const response = await this.#fetch(url, {
      method: 'POST',
      body,
      headers,
    });

    return await response.json();
  }

  async delete(relativeUrl) {
    const url = this._getUrl(relativeUrl);
    const headers = {
      ...this.headersForAuthorization,
    };

    const response = await this.#fetch(url, {
      method: 'DELETE',
      headers,
    });
    //TODO: Make sure everything went ok.
    return;
  }
}
