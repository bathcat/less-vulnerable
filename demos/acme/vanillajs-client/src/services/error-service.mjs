export class ErrorService {
  constructor() {}
  #element = undefined;

  show(message, details) {
    //TODO: Inject this stuff.
    const element = document.createElement('avc-error');
    element.message = message;
    element.details = details;
    document.body.appendChild(element);
    this.#element = element;
  }

  showUnauthorizedError(response, options) {
    const message = `
    You are not authorized to perform the action ${options.method} on the resource ${response.url}. 
    
    <br><br>

    Maybe you need to log in?
    `;
    this.show('401: Unauthorized', message);
  }

  showHttpError(response, options) {
    if (response.status === 401) {
      this.showUnauthorizedError(response, options);
      return;
    }
    throw new Error('Unknown response type.');
  }

  hide() {
    if (!this.#element) {
      return;
    }
    document.body.removeChild(this.#element);
  }
}
