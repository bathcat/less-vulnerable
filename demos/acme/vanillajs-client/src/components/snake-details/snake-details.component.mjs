import { ComponentBase } from '../../component-base.mjs';

export class SnakeDetailsComponent extends ComponentBase {
  static Tag = 'avc-snake-details';
  #snakeService = undefined;

  constructor(
    template = SnakeDetailsComponent.Template,
    snakeService = SnakeDetailsComponent.Services.snakeService,
  ) {
    super(template);
    this.#snakeService=snakeService;
    this.registerClick('#save', () => this.save());
    this.registerClick('#cancel', () => this.cancel());
  }

  get key() {
    //TODO: Make this not sleazy.
    return window.location.href.split('/').slice(-1)[0];
  }

  connectedCallback() {
    this.#snakeService.getById(this.key).then(snake => {
      this.model = snake;
    });
  }

  #name=this.getInput('#name');
  #color=this.getInput('#color');
  #meannessLevel=this.getInput('#meannessLevel');
  #payGrade=this.getInput('#payGrade');

  save() {
    this.#snakeService.save(this.model);
    //TODO: Use the navigator service.... or something
    navigateTo('/snakes');
  }

  cancel() {
    //TODO: Use the navigator service.
    navigateTo('/snakes');
  }

  get model() {
    return {
      id: this.key,
      name: this.#name.get(),
      color: this.#color.get(),
      meannessLevel: this.#meannessLevel.get(),
      payGrade:this.#payGrade.get(),
    };
  }

  set model(value) {
    this.#name.set( value.name);
    this.#color.set(value.color);
    this.#meannessLevel.set(value.meannessLevel);
    this.#payGrade.set(value.payGrade);
  }
}

export const build = builder => builder.build(SnakeDetailsComponent, import.meta.url);



