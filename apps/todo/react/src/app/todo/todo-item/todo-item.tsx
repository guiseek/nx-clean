import { Grid, Checkbox, FormControlLabel } from '@mui/material';
import { Clear } from '@material-ui/icons';

import { TodoVM } from '@nx-clean/todo-presentation';

export interface TodoItemProps {
  todo: TodoVM;
  handleToggleItem(input: HTMLInputElement, id: string): void;
  handleRemoveItem(id: TodoVM): void;
}

export function TodoItem({
  todo,
  handleToggleItem,
  handleRemoveItem,
}: TodoItemProps) {
  const label = { inputProps: { 'aria-label': todo.name } };

  return (
    <Grid key={todo.id} container alignItems="center">
      <FormControlLabel
        value={todo.name}
        control={
          <Checkbox
            {...label}
            checked={todo.completed}
            onChange={(event) => handleToggleItem(event.target, todo.id)}
          />
        }
        label={todo.name}
      />
      <Clear
        onClick={() => handleRemoveItem(todo)}
        sx={{ cursor: 'pointer' }}
      />
    </Grid>
  );
}

export default TodoItem;
