export class ErrorService {
  constructor() {}
  #element = undefined;
  show(message, details) {
    const element = document.createElement('avc-error');
    element.message = 'In a bottle';
    element.details = 'deeeeeeeetails';
    document.body.appendChild(element);
    this.#element = element;
  }
  hide() {
    if (!this.#element) {
      return;
    }
    document.body.removeChild(this.#element);
  }
}
