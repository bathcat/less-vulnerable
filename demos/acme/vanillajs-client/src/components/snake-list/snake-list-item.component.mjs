import { buildTemplate } from '../../element-builder.mjs';
import { component } from '../../component-base.mjs';

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

export class SnakeListItemComponent extends component(HTMLTableRowElement) {
  static Tag = 'avc-snake-list-item';
  static Template = buildTemplate(trTemplate);

  #snakeService = undefined;

  //TODO: Consider using a mixin to reuse stuff frome ComponentBase
  //      (You can't inherit here 'cause this has to inherit from HTMLTableRowElement directly.)
  //      (Another possibility would be: Inherit from ComponentBase, and do some trickery with object.setprototype. )
  constructor(
    template = SnakeListItemComponent.Template,
    snakeService = SnakeListItemComponent.Services.snakeService
  ) {
    super();
    this.#snakeService = snakeService;
    this.appendChild(template.content.cloneNode(true));
    this.registerClick('#edit', () => this.edit());
    this.registerClick('#delete', () => this.delete());
  }

  connectedCallback() {
    this.querySelector('#name').innerHTML = this.model.name;
    this.querySelector('#color').innerHTML = this.model.color;
    this.querySelector('#meannessLevel').innerHTML = this.model.meannessLevel;
    this.querySelector('#payGrade').innerHTML = this.model.payGrade;
  }

  delete() {
    alert('delete');
    this.snakeService.delete(this.model.id);
  }

  edit() {
    alert('edit');
    //TODO: Use the router service.
    navigateTo(`/snakes/${this.model.id}`);
  }

  #model = {
    id: '00000000-0000-0000-0000-000000000000',
    name: '',
    color: '',
    meannessLevel: 0,
  };

  get model() {
    return this.#model;
  }

  set model(value) {
    this.#model = value;
  }
}

export const build = builder =>
  builder.buildInlineComponent(SnakeListItemComponent, {
    extends: 'tr',
  });
