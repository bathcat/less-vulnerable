import { buildTemplate } from '../../element-builder.mjs';

export const trTemplate = `
  <th id="name"></th>
  <td id="color"></td>
  <td id="meannessLevel"></td>
  <td id="payGrade"></td>
  <td>
    <button class="button is-light" id='edit'>
      <span class="icon is-small">
        <i class="fas fa-edit"></i>
      </span>
    </button>

    <button class="button is-light" id='promote'>
      <span class="icon is-small">
        <i class="fas fa-money-bill-alt"></i>
      </span>
    </button>

    <button class="button is-light" id='delete'>
      <span class="icon is-small">
        <i class="fas fa-trash"></i>
      </span>
    </button>
  </td>
`;

export class SnakeListItemComponent extends HTMLTableRowElement {
  static Tag = 'avc-snake-list-item';
  static Template = buildTemplate(trTemplate);

  #snakeService = undefined;
  constructor(snakeService = SnakeListItemComponent.Services.snakeService) {
    super();
    this.#snakeService = snakeService;
    this.appendChild(SnakeListItemComponent.Template.content.cloneNode(true));
  }

  connectedCallback() {
    this.querySelector('#name').innerHTML = this.model.name;
    this.querySelector('#color').innerHTML = this.model.color;
    this.querySelector('#meannessLevel').innerHTML = this.model.meannessLevel;
    this.querySelector('#payGrade').innerHTML = this.model.payGrade;
    this.querySelector('#edit').addEventListener('click', () => this.edit());
    this.querySelector('#delete').addEventListener('click', () =>
      this.delete()
    );
  }

  delete() {
    this.snakeService.delete(this.model.id).then(() => navigateTo('/snakes'));
  }

  edit() {
    navigateTo(`/snakes/${this.model.id}`);
  }

  _model = {
    id: '00000000-0000-0000-0000-000000000000',
    name: '',
    color: '',
    meannessLevel: 0,
  };

  get model() {
    return this._model;
  }

  set model(value) {
    this._model = value;
  }
}

export const build = builder =>
  builder.build(SnakeListItemComponent, import.meta.url, {
    extends: 'tr',
  });
