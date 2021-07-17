import './todo-item.element.scss';

export class TodoItemElement extends HTMLElement {
  public static observedAttributes = [];

  innerHTML = `
    <h3>Todo item</h3>
  `

  connectedCallback() {

  }
}
customElements.define('todo-item', TodoItemElement);
