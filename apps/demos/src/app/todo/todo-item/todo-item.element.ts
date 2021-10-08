import { Connected, BuiltIn, html } from '../../../core';

@BuiltIn({
  selector: 'todo-item',
  extends: 'li',
})
export class TodoItemElement extends HTMLLIElement implements Connected {
  observed = ['todo', 'is'];
  is = 'todo-item'
  todo: any;

  template = html`
    <div class="view">
      <input type="checkbox" class="toggle" />
      <label></label>
      <button class="destroy">x</button>
    </div>
  `;

  query<K extends keyof HTMLElementTagNameMap>(selector: K) {
    return this.querySelector(selector);
  }

  connected(): void {
    if (this.todo && this.todo.name) {
      this.query('label').textContent = this.todo.name;
    }

    this.querySelector('input').onclick = ({ target }) => {
      const input = target as HTMLInputElement;
      this.dispatchEvent(
        new CustomEvent('toggle', {
          detail: input.checked,
        })
      );
    };

    this.querySelector('button').onclick = () => {
      console.log('remove');
      
      this.dispatchEvent(new CustomEvent('remove'));
    };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    '[is="todo-item"]': TodoItemElement;
  }
  interface HTMLElementEventMap {
    remove: CustomEvent<void>;
    toggle: CustomEvent<boolean>;
  }
}
