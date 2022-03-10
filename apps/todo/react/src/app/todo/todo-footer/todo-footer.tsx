import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { TodoVM } from '@nx-clean/todo-presentation';

export interface TodoFooterProps {
  todos: TodoVM[];
  buttonGroup: string;
  handleShowAll(): void;
  handleShowActive(): void;
  handleShowCompleted(): void;
  handleClearCompleted(): void;
  handleButtonGroup(
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ): void;
}

export function TodoFooter({
  todos,
  buttonGroup,
  handleShowAll,
  handleShowActive,
  handleShowCompleted,
  handleClearCompleted,
  handleButtonGroup,
}: TodoFooterProps) {
  return (
    <footer className="footer">
      <p className="todo-count">
        Faltam {todos.filter((value) => value.completed === false).length} itens
        pra finalizar
      </p>
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={buttonGroup}
        onChange={handleButtonGroup}
        aria-label="outlined button group"
      >
        <ToggleButton value="showAll" onClick={handleShowAll}>
          Todos
        </ToggleButton>
        <ToggleButton value="showActive" onClick={handleShowActive}>
          Ativos
        </ToggleButton>
        <ToggleButton value="showCompleted" onClick={handleShowCompleted}>
          Finalizados
        </ToggleButton>
      </ToggleButtonGroup>
      <hr />
      <Button variant="contained" onClick={handleClearCompleted}>
        Limpar finalizados
      </Button>
    </footer>
  );
}

export default TodoFooter;
