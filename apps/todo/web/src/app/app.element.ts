import { TodoPresenter } from '@nx-clean/todo-presentation';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { injector } from './app.provider';

import './app.element.scss';

const presenter = injector.get<TodoPresenter>(TodoPresenter);

export class AppElement extends HTMLElement {
  public static observedAttributes = [];
  private _destroy = new Subject<void>();

  innerHTML = `
    <header class="navbar bg-base-300">
      <div class="navbar-start">
        <a href="/">
          <label tabIndex={0} class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1"><path d="M657.706667 316.373333L597.333333 256 341.333333 512l256 256 60.373334-60.373333L462.08 512z"/></svg>
          </label>
          Back
        </a>
      </div>
      <div class="navbar-center">
        Web Components -  <span class="opacity">Clean Archtecture .design</span>
      </div>
    </header>

    <main>
      <header class="flex px-4 pt-4">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">O que falta finalizar?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
            id="add"
          />
        </div>
      </header>
      <div class="divider"></div>
      <ul>
        <template id="todo-list">
          <li>
            <div class="form-control w-full max-w-xs justify-normal!">
              <label class="label cursor-pointer">
                <input
                  type="checkbox"
                  class="checkbox checkbox checkbox-primary"
                  style="maxWidth: 25px"
                />
                <label id="label-text" class="label-text"></label>
                <button class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1"><path d="M341.333333 170.666667l42.666667-85.333334h256l42.666667 85.333334h213.333333v85.333333H128V170.666667h213.333333zM213.333333 298.666667h597.333334v554.666666a85.333333 85.333333 0 0 1-85.333334 85.333334H298.666667a85.333333 85.333333 0 0 1-85.333334-85.333334V298.666667z m85.333334 85.333333v469.333333h426.666666V384H298.666667z m85.333333 85.333333h85.333333v298.666667H384v-298.666667z m170.666667 0h85.333333v298.666667h-85.333333v-298.666667z"/></svg> 
                </button>
              </label>
            </div>
          </li>
        </template>
      </ul>
      <div class="divider"></div>
      <footer>
        <button id="clear" class="btn btn-primary ">
          Limpar finalizados
        </button>
      </footer>

      <footer class="w-full p-3 text-center">
        <a
          class="btn btn-ghost btn-sm rounded-btn m-auto"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/guiseek/nx-clean/blob/main/apps/todo/angular/src/app/todo"
        >
          Source code
        </a>
      </footer>
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
        const formField = clone.querySelector('div.form-control');
        const span = document.createElement('span');
        span.innerHTML = todo.name;

        const label = formField.querySelector('label.label-text');
        label.appendChild(span);

        // Checkbox
        const checkbox = clone.querySelector('input.checkbox') as HTMLInputElement;
        // checkbox.insertAdjacentElement('afterbegin', label)
        checkbox.checked = todo.completed;
        checkbox.dataset.id = todo.id;
        checkbox.id = todo.id;

        checkbox.removeEventListener('change', onChange);
        checkbox.addEventListener('change', onChange);

        // Icon
        const icon = clone.querySelector('button.btn');
        icon.ariaKeyShortcuts = todo.id;

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
