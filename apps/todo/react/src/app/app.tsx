import { ThemeProvider } from '@mui/material/styles';

import { theme } from './app.theme';
import styles from './app.module.scss';

import Todo from './todo/todo';
import { useServiceLocator } from '@nx-clean/react';
import { TodoRepository } from '@nx-clean/todo-domain';
import { TodoInMemoryRepository } from '@nx-clean/todo-data-access';
import { TodoDefaultPresenter, TodoPresenter } from '@nx-clean/todo-presentation';

export function App() {

  useServiceLocator([
    {
      provide: TodoRepository,
      useFactory: () => {
        return new TodoInMemoryRepository([
          { id: '1', title: 'Front-end 1', completed: true },
          { id: '2', title: 'Front-end 2', completed: false },
          { id: '3', title: 'Front-end 3', completed: true },
          { id: '4', title: 'Front-end 4', completed: false },
        ]);
      },
    },
    {
      provide: TodoPresenter,
      useFactory: (repo: TodoRepository) => {
        return new TodoDefaultPresenter(repo);
      },
      deps: [TodoRepository],
    },
  ])

  return (
    <ThemeProvider theme={theme}>
      <div className={styles['app']}>
        <Todo />
      </div>
    </ThemeProvider>
  );
}

export default App;
