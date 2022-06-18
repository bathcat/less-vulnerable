import { ComponentBase } from '/infrastructure/component-base.mjs';

export class ErrorComponent extends ComponentBase {
  static Tag = 'avc-error';
  #errorService=undefined;
  constructor(template = ErrorComponent.Template,errorService = ErrorComponent.Services.errorService) {
    super(template);
    this.#errorService=errorService;
    this._bindClickHandler('close');
  }

  set message(value){
    this.querySelector('#message').innerHTML = value;
  }

  set details(value){
    this.querySelector('#details').innerHTML = value;
  }

  close() {
    this.#errorService.hide();
  }
}

export const build = builder =>
  builder.buildComponent(ErrorComponent, import.meta.url);
