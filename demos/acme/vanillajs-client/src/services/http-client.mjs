export class HttpClient {
  #rootUrl = undefined;
  #fetch = () => {throw new Error('No fetch!');}
  #securityService = undefined;
  constructor({ rootUrl,_fetch,securityService }) {
    this.#rootUrl = rootUrl;
    this.#securityService = securityService;
    this.#fetch=_fetch;
  }

  // getTokenHeader(){
  //   if(!this.#token){
  //     return {};
  //   }
  //   return {
  //     'Authorization': `Bearer ${this.#token}`
  //   }
  // }

  _getUrl(relative) {
    //TODO: Use new URL
    if (relative.startsWith('/')) {
      relative = relative.slice(1);
    }
    return `${this.#rootUrl}/${relative}`;
  }

  async get(relativeUrl) {
    const url = this._getUrl(relativeUrl);
    const response = await this.#fetch(url);
    return await response.json();
  }

  _getHeaders() {
    return {
      'Content-Type': 'application/json',
    };
  }

  async put(relativeUrl, contents) {
    const url = this._getUrl(relativeUrl);
    const headers = this._getHeaders();
    const body = JSON.stringify(contents);

    const response = await fetch(url, {
      method: 'PUT',
      body,
      headers,
    });

    return await response.json();
  }

  async post(relativeUrl, contents) {
    const url = this._getUrl(relativeUrl);
    const headers = this._getHeaders();
    const body = JSON.stringify(contents);

    const response = await fetch(url, {
      method: 'POST',
      body,
      headers,
    });

    return await response.json();
  }

  async delete(relativeUrl) {
    const url = this._getUrl(relativeUrl);

    const response = await fetch(url, {
      method: 'DELETE',
    });
    //TODO: Make sure everything went ok.S
    return;
  }
}
