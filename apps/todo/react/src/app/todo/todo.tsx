import { TodoVM, TodoPresenter } from '@nx-clean/todo-presentation';
import React, { useEffect } from 'react';

import { injector } from '../app.provider';

import TodoFooter from './todo-footer/todo-footer';
import TodoHeader from './todo-header/todo-header';
import Todos from './todos/todos';

/* eslint-disable-next-line */
export interface TodoProps {}

const presenter = injector.get<TodoPresenter>(TodoPresenter);

export function Todo(props: TodoProps) {
  const [value, setValue] = React.useState('');
  const [state, setState] = React.useState<TodoVM[]>([]);
  const [buttonGroup, setButtonGroup] = React.useState('showAll');

  useEffect(() => {
    presenter.getAllTodos().subscribe(setState).unsubscribe();

    const subscription = presenter.todos$.subscribe(setState);

    return () => subscription.unsubscribe();
  }, []);

  function handleAddTodo(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      presenter.addTodo(value);
      setValue('');
    }
  }

  function onToggleItem(input: HTMLInputElement, id: string) {
    if (input.checked) {
      presenter.markTodoAsCompleted(id);
    } else {
      presenter.markTodoAsActive(id);
    }
  }

  function onShowAll() {
    presenter.getAllTodos();
  }

  function onShowActive() {
    presenter.getActiveTodos();
  }

  function onShowCompleted() {
    presenter.getCompletedTodos();
  }

  function onClearCompleted() {
    presenter.removeCompletedTodos();
  }

  function onRemoveItem(todo: TodoVM) {
    presenter.removeTodo(todo.id);
  }

  function handleButtonGroup(
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) {
    setButtonGroup(newAlignment);
  }

  return (
    <div>
      <TodoHeader />
      <main>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">O que falta finalizar?</span>
          </label>
          <input
            id="outline-required"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            name="task"
            autoFocus={true}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyUp={(event) => handleAddTodo(event)}
          />
        </div>
        <div className="divider"></div>
        <Todos
          todos={state}
          handleToggleItem={onToggleItem}
          handleRemoveItem={onRemoveItem}
        />
        <div className="divider"></div>
      </main>
      <TodoFooter
        todos={state}
        buttonGroup={buttonGroup}
        handleShowAll={onShowAll}
        handleShowActive={onShowActive}
        handleShowCompleted={onShowCompleted}
        handleClearCompleted={onClearCompleted}
        handleButtonGroup={handleButtonGroup}
      />
      <footer className="w-full p-3 text-center">
        <a
          className="btn btn-ghost btn-sm rounded-btn m-auto"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/guiseek/nx-clean/blob/main/apps/todo/angular/src/app/todo"
        >
          Source code
        </a>
      </footer>
    </div>
  );
}

export default Todo;
