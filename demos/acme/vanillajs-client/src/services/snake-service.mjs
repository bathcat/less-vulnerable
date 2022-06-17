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

  async update(snake) {
    const url = this.getUrl(snake.id);

    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(snake),
      headers: { 'Content-Type': 'application/json' },
    });
    //TODO: Make sure things went ok.
    return;
  }

  async delete(snakeId) {
    const url = this.getUrl(snakeId);
    const response = await fetch(url, { method: 'DELETE' });
    //TODO: Make sure things went ok.
    return;
  }
}
