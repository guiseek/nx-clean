import { TodoPresenter } from '@nx-clean/todo-presentation';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import '@material/mwc-top-app-bar';
import '@material/mwc-icon-button';
import '@material/mwc-formfield';
import '@material/mwc-textfield';
import '@material/mwc-checkbox';
import '@material/mwc-button';
import '@material/mwc-icon';

import { injector } from './app.provider';

import './app.element.scss';

const presenter = injector.get<TodoPresenter>(TodoPresenter);

export class AppElement extends HTMLElement {
  public static observedAttributes = [];
  private _destroy = new Subject<void>();

  innerHTML = `
    <mwc-top-app-bar>
      <a slot="navigationIcon" href="/">
        <mwc-button unelevated label="voltar" icon="navigate_before"></mwc-button>
      </a>

      <div slot="actionItems">Web Components - <span style="opacity: 0.66">Clean Architecture .design</span></div>
    </mwc-top-app-bar>

    <main>
      <header class="flex">
        <mwc-textfield id="add" label="O que falta finalizar?"></mwc-textfield>
      </header>
  
      <ul>
        <template id="todo-list">
          <li>
            <div class="view">
              <mwc-formfield>
                <mwc-checkbox></mwc-checkbox>
              </mwc-formfield>
              <mwc-icon>close</mwc-icon>
            </div>
          </li>
        </template>
      </ul>

      <footer>
        <mwc-button id="clear" unelevated> Limpar finalizados </mwc-button>
      </footer>

      <div class="repo-link">
        <a
          target="_blank" rel="noopener noreferrer"
          href="https://github.com/guiseek/nx-clean/blob/main/apps/todo/web/src/app"
        >
          <mwc-button label="Source code"></mwc-button>
        </a>
      </div>
    </main>
  `;

  connectedCallback() {
    const template = this.querySelector<HTMLTemplateElement>('#todo-list');

    const handleAddTodo = ({ key, target }: KeyboardEvent) => {
      if (key === 'Enter') {
        const input = target as HTMLInputElement
        presenter.addTodo(input.value);
        input.value = '';
      }
    }

    const onChange = ({ target }) => {
      const input = target as HTMLInputElement;

      if (input.checked) {
        presenter.markTodoAsCompleted(input.dataset.id);
      } else {
        presenter.markTodoAsActive(input.dataset.id);
      }
    };

    const onRemove = ({ target }) => {
      const button = target as HTMLButtonElement;
      presenter.removeTodo(button.dataset.id);
    };

    const onClearCompleted = () => {
      presenter.removeCompletedTodos();
    };

    presenter.todos$.pipe(takeUntil(this._destroy)).subscribe((response) => {
      const items = document.querySelectorAll('li');
      items.forEach((item) => item.remove());

      const input = this.querySelector('#add');
      input.removeEventListener('keypress', handleAddTodo);
      input.addEventListener('keypress', handleAddTodo);

      const button = this.querySelector('#clear');
      button.removeEventListener('click', onClearCompleted);
      button.addEventListener('click', onClearCompleted);

      response.forEach((todo) => {
        const clone = template.content.cloneNode(true) as HTMLElement;

        // Form field
        const formField = clone.querySelector('mwc-formfield');
        formField.label = todo.name;

        // Checkbox
        const checkbox = clone.querySelector('mwc-checkbox');
        checkbox.checked = todo.completed;
        checkbox.dataset.id = todo.id;
        checkbox.id = todo.id;

        checkbox.removeEventListener('change', onChange);
        checkbox.addEventListener('change', onChange);

        // Icon
        const icon = clone.querySelector('mwc-icon');
        icon.dataset.id = todo.id;

        icon.removeEventListener('click', onRemove);
        icon.addEventListener('click', onRemove);

        template.parentNode.appendChild(clone);
      });
    });

    presenter.getAllTodos();
  }

  disconnectedCallback() {
    this._destroy.next();
    this._destroy.complete();
  }
}
customElements.define('nx-clean-root', AppElement);
