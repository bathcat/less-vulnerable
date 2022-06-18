import { ComponentBase } from '../../component-base.mjs';

export class SnakeBuilderComponent extends ComponentBase {
  static Tag = 'avc-snake-builder';
  #snakeService = undefined;
  #router = undefined;

  constructor(
    template = SnakeBuilderComponent.Template,
    snakeService = SnakeBuilderComponent.Services.snakeService,
    router = SnakeBuilderComponent.Services.router
  ) {
    super(template);
    this.#snakeService = snakeService;
    this.#router = router;
    this._bindInputModel('name', 'color', 'meannessLevel');
    this._bindClickHandlers('save', 'cancel');
  }

  connectedCallback() {
      this.model = {
        name: '',
        color: '',
        meannessLevel: 0,
      };
  }

  async save() {
    await this.#snakeService.create(this.model);
    this.#router.navigateTo('/snakes');
  }

  cancel() {
    this.#router.navigateTo('/snakes');
  }
}

export const build = builder =>
  builder.buildComponent(SnakeBuilderComponent, import.meta.url);
