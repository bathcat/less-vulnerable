export class SnakeService {
  //TODO: Make these private.
  rootUrl = '';
  #httpClient = undefined;
  #errorService = undefined;

  constructor({ httpClient, errorService }) {
    if (!errorService || !httpClient) {
      throw new Error('Bogus arguments.');
    }

    this.#httpClient = httpClient;
    this.#errorService = errorService;
  }

  _getUrl(id = '') {
    return `/snakes/${id}`;
  }

  getAll() {
    const url = this._getUrl();
    return this.#httpClient.get(url);
  }

  getById(id) {
    const url = this._getUrl(id);
    return this.#httpClient.get(url);
  }

  update(snake) {
    const url = this._getUrl(snake.id);
    return this.#httpClient.put(url, snake);
  }

  create(snake) {
    const url = this._getUrl();
    return this.#httpClient.post(url, snake);
  }

  delete(snakeId) {
    this.#errorService.show('some error', 'deeeeeeeetails');
    return;
    const url = this._getUrl(snakeId);
    return this.#httpClient.delete(url);
  }
}
