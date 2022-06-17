export class SnakeService {
  constructor(rootUrl) {
    this.rootUrl = rootUrl;
  }

  getUrl(id) {
    return `${this.rootUrl}/snakes/${id ?? ''}`;
  }

  async getAll() {
    const url = `${this.rootUrl}/snakes/`;
    const response = await fetch(url);
    return await response.json();
  }

  async getById(id) {
    const response = await fetch(this.getUrl(id));
    return await response.json();
  }

  async save(snake) {
    alert(`service saving: ${JSON.stringify(snake)}`);
  }

  async delete(snakeId) {
    const response = await fetch(this.getUrl(snakeId), { method: 'DELETE' });
    //TODO: Make sure things went ok.
    return;
  }
}
