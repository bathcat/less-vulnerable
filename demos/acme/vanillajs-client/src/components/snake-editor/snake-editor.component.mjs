import { ComponentBase } from '../../component-base.mjs';

export class SnakeEditorComponent extends ComponentBase {
  static Tag = 'avc-snake-editor';
  #snakeService = undefined;
  #router = undefined;

  constructor(
    template = SnakeEditorComponent.Template,
    snakeService = SnakeEditorComponent.Services.snakeService,
    router = SnakeEditorComponent.Services.router
  ) {
    super(template);
    this.#snakeService = snakeService;
    this.#router = router;
    this._bindInputModel('id', 'name', 'color', 'meannessLevel');
    this._bindClickHandlers('save', 'cancel');
  }

  get snakeID() {
    const attribute = 'snakeID';
    return this.hasAttribute(attribute) && this.getAttribute(attribute);
  }

  connectedCallback() {
    if (!this.snakeID) {
      this.model = {
        name: '',
        color: '',
        meannessLevel: 0,
      };
      return;
    }
    this.#snakeService.getById(this.snakeID).then(snake => {
      this.model = snake;
    });
  }

  async save() {
    await this.#snakeService.update(this.model);
    this.#router.navigateTo('/snakes');
  }

  cancel() {
    this.#router.navigateTo('/snakes');
  }
}

export const build = builder =>
  builder.buildComponent(SnakeEditorComponent, import.meta.url);
