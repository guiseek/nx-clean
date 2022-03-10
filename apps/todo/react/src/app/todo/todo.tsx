import { TodoVM, TodoPresenter } from '@nx-clean/todo-presentation';
import React, { useEffect } from 'react';
import {
  Stack,
  Button,
  TextField,
  FormGroup,
} from '@mui/material';

import styles from './todo.module.scss';

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
    <div className={styles.app}>
      <TodoHeader />
      <main>
        <TextField
          type="text"
          autoFocus
          fullWidth
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyPress={(event) => handleAddTodo(event)}
          id="outline-required"
          label="O que falta finalizar?"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <hr />
        <Stack spacing={2}>
          <FormGroup>
            <Todos
              todos={state}
              handleToggleItem={onToggleItem}
              handleRemoveItem={onRemoveItem}
            />
          </FormGroup>
        </Stack>
        <hr />
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
      <div className="repo-link">
        <Button
          variant="text"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/guiseek/nx-clean/blob/main/apps/todo/react/src/app"
        >
          Source code
        </Button>
      </div>
    </div>
  );
}

export default Todo;
