import './todo-header.element.scss';

export class TodoHeaderElement extends HTMLElement {
  public static observedAttributes = [];

  innerHTML = `
    <h2>Todo header</h2>
  `

  connectedCallback() {

  }
}
customElements.define('todo-header', TodoHeaderElement);
