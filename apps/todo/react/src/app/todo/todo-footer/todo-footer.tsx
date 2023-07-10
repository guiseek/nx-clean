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
    <footer className="footer flex flex-col justify-start gap-0">
      <p className="todo-count">
        Faltam {todos.filter((value) => value.completed === false).length} itens
        pra finalizar
      </p>
      <div className="w-full">
        <div className="btn-group btn-group-horizontal lg:btn-group-horizontal p-4 w-full">
          <button
            className={`btn ${buttonGroup === 'all' ? 'btn-active' : ''}`}
            onClick={(e) => {
              handleShowAll();
              handleButtonGroup(e, 'all');
            }}
          >
            Todos
          </button>
          <button
            className={`btn ${buttonGroup === 'active' ? 'btn-active' : ''}`}
            onClick={(e) => {
              handleShowActive();
              handleButtonGroup(e, 'active');
            }}
          >
            Ativos
          </button>
          <button
            className={`btn ${buttonGroup === 'completed' ? 'btn-active' : ''}`}
            onClick={(e) => {
              handleShowCompleted();
              handleButtonGroup(e, 'completed');
            }}
          >
            Finalizados
          </button>
        </div>
      </div>
      <div className="divider"></div>

      <button className="btn btn-primary pt-4" onClick={handleClearCompleted}>
        Limpar finalizados
      </button>
    </footer>
  );
}

export default TodoFooter;
