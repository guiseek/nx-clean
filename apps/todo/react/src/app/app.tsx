import { TodoVM, TodoPresenter } from '@nx-clean/todo-presentation';
import { injector } from './app.provider';
import React, { useEffect } from 'react';
import styles from './app.module.scss';
import Logo from './logo.svg';

const presenter = injector.get<TodoPresenter>(TodoPresenter);

console.log(presenter);

export function App() {
  const [value, setValue] = React.useState('');
  const [state, setState] = React.useState<TodoVM[]>([]);

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

  const renderTodoItem = (todo: TodoVM) => {
    return (
      <li key={todo.id}>
        <div className="view">
          <input
            id={todo.id}
            type="checkbox"
            className="toggle"
            checked={todo.completed}
            onChange={(event) => onToggleItem(event.target, todo.id)}
          />
          <label htmlFor={todo.id}>{todo.name}</label>
          <button className="destroy" onClick={() => onRemoveItem(todo)}>
            x
          </button>
        </div>
      </li>
    );
  };

  return (
    <div className={styles.app}>
      <header className="flex">
        <h1>Welcome to react!</h1>
      </header>
      <nav>
        <h3>
          <a href="/">Voltar</a>
        </h3>
      </nav>
      <main>
        <input
          type="text"
          autoFocus
          value={value}
          placeholder="O que falta finalizar?"
          onChange={(event) => setValue(event.target.value)}
          onKeyPress={(event) => handleAddTodo(event)}
        />
        <hr />
        <ul>{state.map(renderTodoItem)}</ul>
        <hr />
      </main>
      <footer className="footer">
        <p className="todo-count">Faltam {state.length} itens pra finalizar</p>
        <ul className="filters">
          <li>
            <button onClick={onShowAll}>Todos</button>
          </li>
          <li>
            <button onClick={onShowActive}>Ativos</button>
          </li>
          <li>
            <button onClick={onShowCompleted}>Finalizados</button>
          </li>
        </ul>
        <button onClick={onClearCompleted}>Limpar finalizados</button>
      </footer>
    </div>
  );
}

export default App;
