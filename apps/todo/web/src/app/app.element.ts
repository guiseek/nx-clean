import { TodoInMemoryRepository } from '@nx-clean/todo-data-access';

import './app.element.scss';

const useFactory = () => {
  return new TodoInMemoryRepository([
    { id: '1', title: 'test', completed: false },
  ]);
};

const repository = useFactory();

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  constructor(
    private repository: TodoInMemoryRepository
  ) {
    super();
  }


  todos = []

  connectedCallback() {
    const title = 'todo-web';
    this.innerHTML = `
      <h1>${title}</h1>
      <todo-header></todo-header>

      <todo-item></todo-item>

      <todo-footer></todo-footer>
    `;
  }
}
customElements.define('nx-clean-root', AppElement);
