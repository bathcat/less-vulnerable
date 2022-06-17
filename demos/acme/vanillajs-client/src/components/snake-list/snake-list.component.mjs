import { ComponentBase } from '../../component-base.mjs';

export class SnakeListComponent extends ComponentBase {
  static Tag = 'avc-snake-list';

  #snakeService = undefined;
  #router = undefined;

  constructor(
    template = SnakeListComponent.Template,
    snakeService = SnakeListComponent.Services.snakeService,
    router = SnakeListComponent.Services.router
  ) {
    super(template);
    this.#snakeService = snakeService;
    this.#router = router;

    //TODO: Add this back in.
    // this.registerClick('#submit', () => this.signIn());
    //
    // Here's the markup:
    //   <button
    //   class="card-header-icon button is-primary card-header-icon m-1"
    //   id="create"
    // >
    //   <span class="icon is-small">
    //     <i class="fas fa-plus"></i>
    //   </span>
    // </button>
  }

  connectedCallback() {
    this.refresh();
  }

  create() {
    alert('TODO: Implement this.');
  }

  refresh() {
    this.#snakeService.getAll().then(snakes => {
      this.render(snakes);
    });
  }

  render(snakes) {
    const tbody = this.shadowRoot.querySelector('tbody');
    tbody.innerHTML = '';
    for (let snake of snakes) {
      let e = document.createElement('tr', { is: 'avc-snake-list-item' });
      e.model = snake;
      tbody.appendChild(e);
    }
  }
}

export const build = builder =>
  builder.buildComponent(SnakeListComponent, import.meta.url);
