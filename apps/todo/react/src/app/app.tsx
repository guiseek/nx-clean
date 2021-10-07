import React, { useEffect } from 'react';
// import Checkbox from '@mui/material/Checkbox';
import {
  Link,
  Grid,
  Stack,
  Button,
  TextField,
  Checkbox,
  FormGroup,
  Typography,
  ButtonGroup,
  ToggleButton,
  FormControlLabel,
  ToggleButtonGroup,
} from '@mui/material';
import { NavigateBefore, Clear } from '@material-ui/icons';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { TodoVM, TodoPresenter } from '@nx-clean/todo-presentation';
import { injector } from './app.provider';

import styles from './app.module.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const presenter = injector.get<TodoPresenter>(TodoPresenter);

export function App() {
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

  const renderTodoItem = (todo: TodoVM) => {
    const label = { inputProps: { 'aria-label': todo.name } };

    return (
      <Grid key={todo.id} container alignItems="center">
        <FormControlLabel
          value={todo.name}
          control={
            <Checkbox
              {...label}
              checked={todo.completed}
              onChange={(event) => onToggleItem(event.target, todo.id)}
            />
          }
          label={todo.name}
        />
        <Clear onClick={() => onRemoveItem(todo)} sx={{ cursor: 'pointer' }} />
      </Grid>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
        <Grid
          p="20px"
          container
          justifyContent="space-between"
          sx={{ backgroundColor: 'primary.dark' }}
          alignItems="center"
        >
          <Link component="button" underline="none" href="/" color="white">
            <Grid container alignItems="center" spacing={0.5}>
              <Grid item mt="1px">
                <NavigateBefore />
              </Grid>
              <Grid item>
                <Typography variant="caption">
                  <span className="opacity">Voltar</span>
                </Typography>
              </Grid>
            </Grid>
          </Link>
          <Grid item>
            <Typography variant="h5" color="white">
              React - <span className="opacity">Clean Archtecture .design</span>
            </Typography>
          </Grid>
        </Grid>
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
            <FormGroup>{state.map(renderTodoItem)}</FormGroup>
          </Stack>
          <hr />
        </main>
        <footer className="footer">
          <p className="todo-count">
            Faltam {state.filter((value) => value.completed === false).length}{' '}
            itens pra finalizar
          </p>
          <ToggleButtonGroup
            color="primary"
            exclusive
            value={buttonGroup}
            onChange={handleButtonGroup}
            aria-label="outlined button group"
          >
            <ToggleButton value="showAll" onClick={onShowAll}>
              Todos
            </ToggleButton>
            <ToggleButton value="showActive" onClick={onShowActive}>
              Ativos
            </ToggleButton>
            <ToggleButton value="showCompleted" onClick={onShowCompleted}>
              Finalizados
            </ToggleButton>
          </ToggleButtonGroup>
          <hr />
          <Button variant="contained" onClick={onClearCompleted}>
            Limpar finalizados
          </Button>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
