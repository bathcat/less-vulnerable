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
    this._bindInputProperties('name', 'color', 'meannessLevel', 'payGrade');
    this._bindClickHandlers('save', 'cancel');
  }

  get key() {
    //TODO: Something's weird here.
    if (!this.hasAttribute('snakeID')) {
      return null;
    }
    return this.getAttribute('snakeID');
  }

  connectedCallback() {
    if (!this.key) {
      this.model = {
        name: '',
        color: '',
        meannessLevel: 0,
        payGrade: 'TBD',
      };
      return;
    }
    this.#snakeService.getById(this.key).then(snake => {
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

  get model() {
    return {
      id: this.key,
      name: this.name,
      color: this.color,
      meannessLevel: this.meannessLevel,
      payGrade: this.payGrade,
    };
  }

  set model(value) {
    this.name = value.name;
    this.color = value.color;
    this.meannessLevel = value.meannessLevel;
    this.payGrade = value.payGrade;
  }
}

export const build = builder =>
  builder.buildComponent(SnakeEditorComponent, import.meta.url);
