import './todo-footer.element.scss';

export class TodoFooterElement extends HTMLElement {
  public static get observedAttributes() {
    return ['count', 'filter'];
  }

  count: number;
  filter: string;

  innerHTML = `
    <footer class="footer">
      <p class="todo-count">
        Nada pra fazer
      </p>

      <ul class="filters">
        <li>
          <a
            href="/#todo"
            (click)="onShowAll()"
          >
            Todos
          </a>
        </li>
        <li>
          <a
            href="/#active"
            (click)="onShowActive()"
          >
            Ativos
          </a>
        </li>
        <li>
          <a
            href="/#completed"
            (click)="onShowCompleted()"
          >
            Finalizados
          </a>
        </li>
      </ul>

      <button class="clear-completed" (click)="onClearCompleted()">
        Limpar finalizados
      </button>
    </fotter>
  `;

  constructor() {
    super();

    this.count = 0;
    this.filter = '';
  }

  connectedCallback() {
    const links = this.querySelectorAll('a')

    window.onhashchange = (ev: HashChangeEvent) => {
      console.log(ev);
      console.log(location.hash);

      console.log(links);
      links.forEach(a => {
        console.log(a);
      })
    }

  }

  onShowAll() {
    console.log('show all');

    this.dispatchEvent(new CustomEvent('all'));
  }

  onShowActive() {
    this.dispatchEvent(new CustomEvent('active'));
  }

  onShowCompleted() {
    this.dispatchEvent(new CustomEvent('completed'));
  }

  onClearCompleted() {
    this.dispatchEvent(new CustomEvent('clearCompletd'));
  }

  attributeChangedCallback(name: string, prev: string, next: string) {
    console.log(name, prev, next);

    this[name] = next
  }
}
customElements.define('todo-footer', TodoFooterElement);
